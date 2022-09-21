/*
 * Using JS make this array of posts existing in the HTML using the same structure of the example post
 * First level use the posts variable
 * Second level use Ajax and get data from this link
 * - https://jsonplaceholder.typicode.com/posts
 */

const posts = [
  {
    title: "one",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "two",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "three",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "four",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "five",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },

  {
    title: "six",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "seven",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "egiht",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },

  {
    title: "nine",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  },
  {
    title: "ten",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam adipisci"
  }
];

let div = document.getElementById("myDiv");
let original = document.querySelector(".col");

console.log(posts[0].title);