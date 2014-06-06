(function(){
  var app = angular.module('readingList', [ ]);

  app.controller('readingListController', function(){
  	this.books = [
  	{
  		title: "Harry Potter and the Sorceror's Stone",
  		authors: "J.K. Rowling",
  		ain: "059035342X",
  		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum inventore fugiat. Perspiciatis, enim, nesciunt, modi officiis illum corrupti temporibus incidunt voluptatibus eius magnam commodi tempora! Dolorem, dicta necessitatibus vero?",
  		rating: 4,
  		genre: "Fiction",
  	}
  	{
  		title: "Siddhartha",
  		authors: "Herman Hesse",
  		ain: "0553208845",
  		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, fugit, perspiciatis blanditiis beatae quod praesentium quasi ratione obcaecati dolore neque eligendi sed necessitatibus dolorum quaerat provident impedit asperiores explicabo hic!",
  		rating: 5,
  		genre: "Alternate History",
  	}
  	];
  });


})();
