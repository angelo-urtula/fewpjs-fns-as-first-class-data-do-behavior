/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const timeArray = timeString.split(':')
  if (parseInt(timeArray[0]) < 12){
    return "Good Morning"
  } else if (parseInt(timeArray[0]) > 12 && parseInt(timeArray[0]) < 17) {
    return "Good Afternoon"
  } else if (parseInt(timeArray[0]) > 17) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  const greet = document.querySelector('#greeting')
  greet.innerText = string
}

