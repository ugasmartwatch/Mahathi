# BangleApps

1) *** PUCK TEST repository: consists of my notes and research findings from completing certain tutorials.

--> PuckTest tutorial data: 
 
    ****test.html file*****
**
Notes/Findings:
- Can add multiple devices and connect to a website --> Using Puck.connect command
- Can use Puck.Write and Puck.eval functions ONLY connecting to single device/ must use connection.write
- The temperature indoors room captured as 74 degrees when 68 in reality.
     --> could be influenced by heating of device or nearby devices (laptop)-


This Tutorial allowed me to explore how to connect multiple devices and read temperature from Bangle.Js. Mainly focusing on
RECEIVNG and SENDING data from Bangle.js to my own git website.

GOAL: find how to develop and transfer data between watch and website in order to develop a survey and send it to the watch.

***_Dashboard tutorial (Web Bluetooth tutorial) ***
 Notes/Findings: 
- Display data like light, battery, temperature onto Dashboard html website with information received from Puck.js
- Puck.connect(callback) --> TO SEND AND RECEIVE DATA from puck.js
**

2) BangleSurvey contains files to explore and create a survey notification for parents to display on children bangle watches.
    - (2/14/22) NOTES/FINDINGS:
   - within BangleSurvey I have a ParentalRemindPlatform folder, where I created a test.html file of a static UI. It is a platform where parents can send default or custom reminders to their children's watches. 
   - I am also working on notifySurvey which is the JS code of how to format reminders and send a lunch reminder to a kid's watch.
   - By manipulating and using the notify library I was able to keep up a reminder(message) format without it disappearing after a short second. 
   - I got it to where you can swipe up/down/right/left on a message screen to take it to the reminder/notification screen, but i believe there i something preventing the you to swipe up/down/right/left and move to another screen FROM the notification screen.
