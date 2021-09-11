/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author,content,timeStamp,numberOfLikes,comments) {
    this.author = author
    this.content = content
    this.timeStamp = timeStamp
    this.numberOfLikes = numberOfLikes
    this.comments = comments
  }

  likepost(){
    this.numberOfLikes = this.numberOfLikes + 1
  }
  addComment(string){
    this.comments.push(string)
  }

}

var myTweet = new Tweet("Enzo Jimenez-Soto","Why is the sky blue?", "September 11, 2021", 0,[])
console.log(myTweet);
myTweet.likepost();
myTweet.likepost();
myTweet.addComment("I have no idea and ive been wondering the same.");
myTweet.addComment("Just google it");
console.log(myTweet);
