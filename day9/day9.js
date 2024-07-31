// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
// Task 1
let para = document.getElementById("para");
para.textContent = "This is day 9 of 30 days of JS series.";

// Task 2
let div = document.getElementsByClassName("30days");
if (div.length > 0) {
    div[0].style.background = "black";
}

// Activity 2: Creating and Appending elements
// Task 3
let body = document.querySelector("body");
let newDiv = document.createElement("div");
newDiv.textContent = "This series has helped a lot in learning JS so far";
body.append(newDiv);

// Task 4
let ul = document.querySelector("ul");
if (ul) {
    let li = document.createElement("li");
    li.textContent = "Day 9: DOM Manipulation";
    ul.append(li);
}

// Activity 3: Removing elements
// Task 5
let p = document.querySelector("#soFar");
if (p) {
    p.remove();
}

// Task 6
if (ul && ul.lastChild) {
    ul.removeChild(ul.lastChild);
}

// Activity 4: Modifying Attributes and Classes
// Task 7
let img = document.querySelector("img");
if (img) {
    img.setAttribute("src", "https://img-c.udemycdn.com/course/240x135/3641342_9c74.jpg");
}

// Task 8
if (div.length > 0) {
    div[0].classList.add("div2");
    div[0].classList.remove("div");
}

// Activity 5: Event Handling
// Task 9
let btn = document.querySelector("button");
if (btn) {
    btn.addEventListener('click', () => {
        let currentBackground = getComputedStyle(body).backgroundColor;
        if (currentBackground === "rgb(255, 255, 255)") { // white in RGB
            body.style.background = "black";
            body.style.color = "white";
            btn.textContent = "Dark mode";
            
            // Apply dark mode styles to the 30days div
            if (div.length > 0) {
                div[0].style.background = "black";
                div[0].style.color = "white";
            }
        } else {
            body.style.background = "white";
            body.style.color = "black";
            btn.textContent = "Light mode";
            
            // Apply light mode styles to the 30days div
            if (div.length > 0) {
                div[0].style.background = "white";
                div[0].style.color = "black";
            }
        }
    });
}

// Task 10
if (ul) {
    ul.addEventListener("mouseover", () => {
        ul.style.borderRadius = "10px";
        ul.style.borderColor = "black";
    });
}
