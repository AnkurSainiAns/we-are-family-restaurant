// reg
let subEl = document.getElementById("sub")
let space1El = document.getElementById("space1")
let nameEl = document.getElementById("name")
let Date = document.getElementById("Date")
let time = document.getElementById("time")
subEl.addEventListener("click", function () {
    if (nameEl.value == "" || Date.value == "" || time.value == "") {
        // alert("Please Fill Data before Submitting");
        space1El.textContent = "Please Fill Data before Submitting"
    }
    else {
        alert("Registration Successfully");
        // space1El.innerHTML = "<p> Registration Successfully 😄</p>";
        space1El.textContent = "Registration Successfully 😄"
    }
})


// order
let space3El = document.getElementById("space3")
let submiEl = document.getElementById("submi")

submiEl.addEventListener("click", function () {
    let selectoption1 = document.getElementById("select1").value
    let selectoption2 = document.getElementById("select2").value
    let selectoption3 = document.getElementById("select3").value
    let selectoption4 = document.getElementById("select4").value
    let selectoption5 = document.getElementById("select5").value
    let selectoption6 = document.getElementById("select6").value
    if (
        selectoption1 === "" &&
        selectoption2 === "" &&
        selectoption3 === "" &&
        selectoption4 === "" &&
        selectoption5 === "" &&
        selectoption6 === ""
    ) {
        // alert("Please select at least one option ☹️");
        space3El.textContent = "Please select at least one option ☹️";
    }
    else {
        alert("Thank You for placing order 😍")
        let orderList = [selectoption1, selectoption2, selectoption3, selectoption4, selectoption5, selectoption6].filter(opt => opt !== "").join(", ");
        space3El.textContent = "You ordered:" + orderList


    }
});
// review
let subbEl = document.getElementById("subb")
let space4El = document.getElementById("space4")
mobile5El = document.getElementById("mobile5")
feedbackEl = document.getElementById("feedback")
name5El = document.getElementById("name5")
subbEl.addEventListener("click", function () {
    if
        (name5El.value == "" || mobile5El.value == "" || feedbackEl.value == "") {
        space4El.textContent = "fill the form details"
    }
    else {
        space4El.textContent = "Thank you For your Feedback"
    }
})

// google screen
screenEl = document.getElementById("screen")
screenEl.textContent = "we'r family Restaurant"

// menu
