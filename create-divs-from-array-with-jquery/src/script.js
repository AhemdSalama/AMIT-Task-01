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

/*let div = document.getElementById("myDiv");
let original = document.querySelector(".col"); */

document.querySelector("h2").innerText=posts[0].title;
document.querySelector("p").innerText=posts[0].content;

for (let index = 1; index < posts.length; index++) {
  myFunction(index) ;  
}

function myFunction(index) 
  {
    const node = document.querySelector(".col");
    const clone = node.cloneNode(true);
    clone.querySelector("h2").innerText=posts[index].title;
    clone.querySelector("p").innerText=posts[index].content;
    document.getElementById("myDiv").appendChild(clone);    
  }
