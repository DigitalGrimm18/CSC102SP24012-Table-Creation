/* JavaScript Code for CSC102 Sp 2024 Event Driven Programming
    written by: Daniel Diaz
                dandiaz2@uat.edu
                24March2024
*/
// Function to move the meme image around the page
function moveMeme() {
    var meme = document.getElementById('meme');
    var newX = Math.random() * window.innerWidth;
    var newY = Math.random() * window.innerHeight;
    meme.style.left = newX + 'px';
    meme.style.top = newY + 'px';
  }
  
  // Function to enable Start button and disable Stop button
  function enableStart() {
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
  }
  
  // Function to enable Stop button and disable Start button
  function enableStop() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
  }
  
  // Function to start moving the meme and switch button states
  function startMoving() {
    moveMeme(); // Move meme initially
    enableStop(); // Enable Stop button
    // Set interval ID to a variable for later clearing
    var intervalId = setInterval(moveMeme, 1000); // Move meme every second
    // Save intervalId to use in stopMoving function
    document.getElementById('startBtn').intervalId = intervalId;
  }
  
  // Function to stop moving the meme and switch button states
  function stopMoving() {
    enableStart(); // Enable Start button
    clearInterval(document.getElementById('startBtn').intervalId); // Stop moving meme using intervalId
  }
  
  // Wire buttons to their respective functions
  document.getElementById('startBtn').addEventListener('click', startMoving);
  document.getElementById('stopBtn').addEventListener('click', stopMoving);
  