// TODO: Add a comment describing what kind of function this is
// this is a contructor function
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// the following will pushn a comment to the console log 
// the protoype is adding to the contructor function with user input
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComent('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// Nice post, I like it! will be displayed in the console 
console.log(post.comments);
