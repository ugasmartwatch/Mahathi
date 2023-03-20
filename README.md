# BangleApps
> WEEK 1/2
- Created a HW timer and uploaded to BangleApps App loader. Can swipe up/down/left/right. Only problem was when refreshing app loader it occasionally crashed.

> WEEK 3/4:
1) PUCK TEST repository: consists of my notes and research findings from completing certain tutorials.

***Notes/Findings:***
- Can add multiple devices and connect to a website --> Using Puck.connect command
- Can use Puck.Write and Puck.eval functions ONLY connecting to single device/ must use connection.write
- The temperature indoors room captured as 74 degrees when 68 in reality.
     --> could be influenced by heating of device or nearby devices (laptop)-
- This Tutorial allowed me to explore how to connect multiple devices and read temperature from Bangle.Js. Mainly focusing on
- RECEIVNG and SENDING data from Bangle.js to my own git website.

> WEEK 5/6:

***GOALS:***
- find how to develop and transfer data between watch and website in order to develop a survey and send it to the watch.
Dashboard tutorial (Web Bluetooth tutorial) -- Notes/Findings: 
- Display data like light, battery, temperature onto Dashboard html website with information received from Puck.js
- Puck.connect(callback) --> TO SEND AND RECEIVE DATA from puck.js

> WEEK 7 (2/14)
     2) BangleSurvey contains files to explore and create a survey notification for parents to display on children bangle watches.
   
***NOTES/FINDINGS:***
   - within BangleSurvey I have a ParentalRemindPlatform folder, where I created a test.html file of a static UI. It is a platform where parents can send default or custom reminders to their children's watches. 
   - I am also working on notifySurvey which is the JS code of how to format reminders and send a lunch reminder to a kid's watch.
   - By manipulating and using the notify library I was able to keep up a reminder(message) format without it disappearing after a short second. 
   - I got it to where you can swipe up/down/right/left on a message screen to take it to the reminder/notification screen, but i believe there i something preventing the you to swipe up/down/right/left and move to another screen FROM the notification screen.
   
> WEEK 8/9 ( 2/17 to 2/21)

***GOALS:***
- Develop connection bw website and watch 
- Aiming to develop connection via BLE to send notifications/surveys
- Exploring with the Bluetooth GATT CHARACTERISTICS
- Modifying notification format to look like survey with buttons and swipes to move to next question (CHECK)
- Modify website UI (CHECK)

***Achievements:***
- Managed to develop connection between watch and website, but only so far as a LED light displaying when button pressed to send reminder.
- bangleSurvey.js file: Modified survey to include buttons and swipes using layout.
- Tried to use connection.write to display notifications on watch from website - Fail so far
- Exploring how to use the BLE GATT characteristics to form connection bw website and watch

> WEEK 10/11 (3/6 and 3/14)  

**GOALS*** 
- Store data of responses in json 
- Send custom reminder to watch 
- Add Snooze Function/Page to reminder

****PROBLEMS****
- Trying to snooze page for a set time then return to introWelcome Survey page
- Was trying to store values returned from function in json - Learned to store specific json data in specific functions 
using the following command:
**require("Storage").writeJSON("fileName",[json to add]);**
- learning how to update append json to file 
-Added snooze function but not going back to intropage after setTimeOut

***Achievements:***
- Incorporated json to call in functions
- Json is now appending to bangleSurvey.json file after function calls
- added snooze page

> WEEK 12/13 (3/20 and 3/14) 

**Goals***
- get website to send reminder using sched.js library
- find way to send json file over
