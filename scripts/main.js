
const myImage = document.querySelector("img");

// Change image on click
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/small_focus.jpg") {
    myImage.setAttribute("src", "images/click_img.jpg");
  } else {
    myImage.setAttribute("src", "images/small_focus.jpg");
  }
};

/*
// Create individual greeting for user
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
  
myButton.onclick = () => {
    setUserName();
  };


  // Dynamic list with user-generated items
  const list = document.createElement('ul');
  const info = document.createElement('p');
  const html = document.querySelector('html');

  info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

  document.body.appendChild(info);
  document.body.appendChild(list);

  html.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
      e.stopPropagation();
      const listContent = prompt('Enter new content for your list item');
      this.textContent = listContent;
    }
  }
*/