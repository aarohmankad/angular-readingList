(function(){
  var app = angular.module('readingList', [ ]);
  app.controller('readingListController', function(){
  	this.books = [
  	{
      title: "Siddhartha",
      authors: "Herman Hesse",
      ain: "0553208845",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, fugit, perspiciatis blanditiis beatae quod praesentium quasi ratione obcaecati dolore neque eligendi sed necessitatibus dolorum quaerat provident impedit asperiores explicabo hic!",
      rating: 5,
      genre: "Alternate History",
      currently: false,
    },
    {
  		title: "Harry Potter and the Sorceror's Stone",
  		authors: "J.K. Rowling",
  		ain: "059035342X",
  		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum inventore fugiat. Perspiciatis, enim, nesciunt, modi officiis illum corrupti temporibus incidunt voluptatibus eius magnam commodi tempora! Dolorem, dicta necessitatibus vero?",
  		rating: 4,
  		genre: "Fiction",
      currently: false,
  	},
  	];

    this.sortByTitle = function () {
      this.books.sort(function (a, b) {
        if (a.title > b.title)
          return 1;
        if (a.title < b.title)
          return -1;
        // a must be equal to b
        return 0;
      });
    };

    this.sortByRating = function () {
      this.books.sort(function (a, b) {
        if (a.rating > b.rating)
          return 1;
        if (a.rating < b.rating)
          return -1;
        // a must be equal to b
        return 0;
      });
    };
  });

  app.directive('bookList', function () {
    return{
      replace: true,
      restrict: 'E',
      templateUrl: '../views/book-list.html'
    };
  });

  app.directive('bookInfo', function () {
    return{
      replace: true,
      restrict: 'E',
      templateUrl: '../views/book-info.html',
      controller: function ($scope) {
        $scope.changeStatus = function (book) {
          book.currently = !book.currently;
        }
      },
      controllerAs: 'bookInfo'
    };
  });

  app.directive('submitBook', function () {
    return{
      replace: true,
      restrict: 'E',
      templateUrl: '../views/submit-book.html',
      controller: function ($scope) {
        var Book = function () {
          return{
            title: null,
            authors: null,
            ain: null,
            review: null,
            rating: 5,
            genre: null,
            isEmpty: function () {
              return !(this.title || this.authors || this.review || this.genre);
            }
          };
        };

        $scope.book = new Book;

        $scope.addBook = function (books) {
          books.push($scope.book);
          $scope.book = new Book;
        };

        this.editBook = function (book) {
          $scope.book = book;
        }
      },
      controllerAs: 'submitBook'
    };
  });

})();