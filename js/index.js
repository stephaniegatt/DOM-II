// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
// mouseover
const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "#17A2B8";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);



  //wheel
const welcomeImg = document.getElementById("welcome-image");

let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    event.target.style.transform = `scale(${scale})`;
    console.log("this is event.target", event.target)
  };

welcomeImg.addEventListener("wheel", zoom);
welcomeImg.addEventListener("mouseleave", event => {
    event.target.style.transform = "scale(1)";
  });

  // keydown


// let buttons = document.getElementsByClassName("btn");
// console.log("deese dem buttons", buttons);
// function clickOnSpace(event) {
//       // event.preventDefault()
//       console.log("You have pushed a key");
//       if (event.keyCode === 229) {
//           event.target.style.backgroundColor = "#C0C0C0";
//       };
//   };

// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("keydown", clickOnSpace);
//     console.log(buttons[i]);
// }


// mainNav.addEventListener("keypress", clickOnSpace);

//   buttons.addEventListener('keydown', clickOnSpace);

addEventListener("keydown", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "#C0C0C0";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "";
  });


// dragover

const box = document.getElementsByClassName('text-content')[0]
const containers = document.getElementsByClassName('img-content')[0]
containers.addEventListener("dragover", dragover)
containers.addEventListener("dragenter", dragenter)
containers.addEventListener("drop", drop)

function dragover(e) {
  e.preventDefault()
}
function dragenter(e) {
  e.preventDefault()
}
function drop(e) {
  e.stopPropagation()
  e.target.append(box)
}

const body = document.querySelector("body");
body.addEventListener("dragover", dragover);
body.addEventListener("dragenter", dragenter);
body.addEventListener("drop", dropReset);

const contentSection = document.getElementsByClassName("content-section")[0];

function dropReset() {
  contentSection.prepend(box);
}

// load

const object = document.getElementsByClassName("content-destination")[0];
addEventListener("load", load);

function load() {
  object.style.color = "#C0C0C0";
  // console.log("loaded")
}

// dblclick

const footer = document.querySelector("footer");
console.log(footer);
footer.addEventListener("dblclick", function () {
  footer.style.backgroundColor = "#17A2B8";
  console.log("I'm here");
});

// click

const buttons = document.querySelectorAll('.btn');
console.log("btns", buttons)



buttons.forEach(button => {
  console.log("foreach worked")
  button.addEventListener('click', () => {
    button.textContent = "You Clicked";
    console.log("it worked")
  });
});

// 




