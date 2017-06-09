# simple_timer

* This is a simple timer that follows these specifications:

#### Given a javascript DateTime object, create a javascript program and user interface that does the following.
* Displays the hours, minutes, and seconds until the given time in HTML (eg "XX hours, YY minutes, ZZ seconds remaining")
* Updates every second to show the remaining time
* When the time has passed, should show "00 hours, 00 minutes, 00 seconds remaining"
* For bonus points, make it look nice.

#### Approach, Assumptions, & Styling
* **Approach**: I approached this problem in a functional manner. I created 5 JavaScript functions, each with a specific and separated concern. The main function, `dateCountDown`, starts up the timer by clearing any previous intervals, grabbing the user selected date, validating it, and if proper, setting the interval for changeTimeHtml. Every one second, except if there is no more time to pass till the user selected date, changeTimeHtml recalculates what the time difference is using milliseconds and JavaScript Date objects. Once that function has calculated the remaining `timeToPass`, it passes the hours, minutes, and seconds as arguments to a string builder function. This function takes care of inserted zeros before single digits, and also stringifying the integers to construct the string to display in the HTML of index.html. I chose to use pure JavaScript for this project to avoid loading a larger library like JQuery or React.

* **Assumptions**: The timer HTML page assumes the following:
  1. a UTC representation of Date/Time is acceptable.
  2. Allowing the user to choose a Date is acceptable
  3. Not allowing the user to sub-select time on a specific date is acceptable
  4. The calendar dropdown, given by the HTML5 input type date, is acceptable for all users, even though it has worse UX in non-Chrome/Firefox browsers.
  5. External CSS frameworks are acceptable

* **UX/CSS** I accomplished the last bullet point, making it look nice, by utilizing the Material UI('MUI') CSS framework. This highly modular CSS framework is loaded by means of CDN delivered scripts from links in the Head of index.html. Classes are then assigned to the HTML elements in order for MUI to tag on and apply its clean styling. Minor in line styling is used to supplement MUI, and keep the text field to a manageable size. The usage of MUI allowed me to quickly implement styling after all the functionality was in place. 
