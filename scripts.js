// Write your JavaScript code here.
// Remember to pay attention to page loading!
function liftOffStatus() {
  let statusFlight = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  let missionAbort = document.getElementById("missionAbort");
  let leftButton = document.getElementById('leftButton');
  let rightButton = document.getElementById('rightButton');
  let upButton = document.getElementById('upButton');
  let downButton = document.getElementById('downButton');
  let rocketShip = document.getElementById('rocket');
  let offset = 0;
  let shuttleButtonHeight = 0;

  takeoff.addEventListener("click", function (event){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");


    if (response) {
      shuttleButtonHeight = 10000;
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = shuttleButtonHeight;
    } else {
      console.log("cancelled");
    };
  });

  landing.addEventListener ("click", function(event) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = "0";
  });

  missionAbort.addEventListener("click", function(event) {
    let response =
    window.confirm("Confirm that you want to abort the mission.");

    if (response) {
      flightStatus.innerHTML = "Mission aborted";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = "0";
    } else {
      console.log("shuttle on standby");
    };
  });

  leftButton.addEventListener('click', function(event){
    offset -= 10;
    rocketShip.style.position = 'relative';
    rocketShip.style.left = (offset) + 'px';
  });

  rightButton.addEventListener('click', function(event){
    offset += 10;
    rocketShip.style.position = 'relative';
    rocketShip.style.left = (offset) + 'px';
  });

  upButton.addEventListener('click', function(event){
    offset -= 10;
    shuttleButtonHeight += 10000
    rocketShip.style.position = 'relative';
    rocketShip.style.top = (offset) + 'px';
    spaceShuttleHeight.innerHTML = shuttleButtonHeight
  });

  downButton.addEventListener('click', function(event){
    offset += 10;
    shuttleButtonHeight -= 10000
    rocketShip.style.position = 'relative';
    rocketShip.style.top = (offset) + 'px';
    spaceShuttleHeight.innerHTML = shuttleButtonHeight
  });
}


window.onload = liftOffStatus;
