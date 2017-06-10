var intervalInSeconds;

function dateCountDown() {
  clearInterval(intervalInSeconds);
  //create a current date object and one for the user's selection
  var datePicker = document.getElementById('countdown-date');
  var endDate = new Date(datePicker.value);
  // if our date is in the future and valid, set a one second interval where our time to date will be recalculated & the html will be changed
  var timer = document.getElementById('countdown-timer')
  if(!validateDate(endDate)){
    timer.innerHTML = "Please select a date, and make sure it isn't in the past. We can't time travel here!"
    timer.setAttribute("style", "color:red");
  }
  else{
    timer.setAttribute("style", "color:black");
    intervalInSeconds = setInterval(function(){
      changeTimeHtml(endDate)
    }, 1000);
  }
}

function stopCountDown(){
  clearInterval(intervalInSeconds);
}

function validateDate(endDate){
  if(endDate < new Date() || endDate == 'Invalid Date'){
    return false;
  }
  return true;
}

function changeTimeHtml(endDate) {
  var currentDate = new Date();
  var timeToPass = endDate - currentDate;
  //clear the interval that has been set if the timer is finished.
  if (timeToPass <= 0) {
    clearInterval(intervalInSeconds);
  }
  //set up our times in milliseconds
  var second = 1000;
  var minute = 60000;
  var hour = 3600000;
  //calculate how many hours/minutes/seconds till the endDate
  var hours = Math.floor(timeToPass / hour);
  var minutes = Math.floor((timeToPass % hour) / minute);
  var seconds = Math.floor((timeToPass % minute) / second);

  var dateToSet = dateStringBuilder(hours, minutes, seconds)
  document.getElementById('countdown-timer').innerHTML = dateToSet;
}

function dateStringBuilder(hours, minutes, seconds) {
  if (hours.toString().length < 2) {
    hours = '0' + hours.toString();
  }
  if (minutes.toString().length < 2) {
    minutes = '0' + minutes.toString();
  }
  if(seconds === 0){
  	seconds = '00'
  }
  else {
    if (seconds.toString.length.length < 2){
      seconds = '0' + seconds.toString();
    }
  }
  return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds remaining';
}
