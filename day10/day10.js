// Activity 1: Event Handling

// Task 1: Change paragraph text on button click
document.querySelector("#btn1").addEventListener("click", () => {
    document.querySelector("#task1").innerText = "Text has been updated!";
});

// Task 2: Toggle image visibility on double click
document.querySelector("#btn2").addEventListener("dblclick", () => {
    const img1 = document.querySelector("#img1");
    img1.style.visibility = (img1.style.visibility === "hidden") ? "visible" : "hidden";
});

// Activity 2: Mouse Events

// Task 3: Change background color on mouseover
const head1 = document.querySelector("#head1");
head1.addEventListener("mouseover", () => {
    head1.style.backgroundColor = "yellow";
});

// Task 4: Reset background color on mouseout
head1.addEventListener("mouseout", () => {
    head1.style.backgroundColor = "white";
});

// Activity 3: Keyboard Events

// Task 5: Log pressed key on keydown
document.querySelector("#input1").addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Display current value on keyup
document.querySelector("#input1").addEventListener("keyup", () => {
    document.querySelector("#para1").innerText = `Current value: ${event.target.value}`;
});

// Activity 4: Form Events

// Task 7: Prevent form submission and log data
document.querySelector("#test").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Option 1: ${document.querySelector("#dropdown1").value}`);
    console.log(`Option 2: ${document.querySelector("#dropdown2").value}`);
});

// Task 8: Display selected dropdown value
document.querySelector("#dropdown1").addEventListener("change", (event) => {
    document.querySelector("#para2").innerText = `Selected Option: ${event.target.value}`;
});

// Activity 5: Event Delegation

// Task 9: Log list item text on click using event delegation
document.querySelector("#list1").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10: Handle events for dynamically added list items
document.querySelector("#btn3").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.innerText = document.querySelector("#input3").value;
    document.querySelector("#list1").appendChild(newItem);
});
