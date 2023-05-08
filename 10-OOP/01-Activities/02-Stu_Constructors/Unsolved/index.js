// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object

function Blogpost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function() {
        
        //console.log('Created by ${this.authorName} on ${this.createdOn}');
    };
};

const post = new Blogpost(
    'jhonny',
    'my first blog post',
    'This is my first blog post',
    '04/18/2023',
);
post.printMetaData();