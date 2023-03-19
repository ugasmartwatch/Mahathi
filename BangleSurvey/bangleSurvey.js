var Layout = require("Layout");
let drag;
const states = {
  init: 1, // initial survey screen
  lunch: 2, // lunch
  pleaseRemember: 3, // remember 
  YayBye: 4, // yay farewell
  confirm: 5
};


f = require("Storage").open("bangleSurvey.json", "a");

var layout = new Layout( {
    type:"v", c: [
      {type:"txt", font:"6x8:1",pad:4, label:"View Parent Survey?", id:"label" },
      {type:"btn",font:"6x8:1", label:"View",pad:5, cb:()=> lunchReminder(), cbl: l=>print("One long press")},
    {type:"btn",font:"6x8:1",label:"Snooze",pad:4, cb:()=> setTimeout('', 1000), cbl: l=>print("long press to return")},
    ]
  });

function setLabel(x) {
  layout.label.label = x;
  layout.render();
}
g.clear();
layout.render();

function SnoozeFunc() {
 f.write("{Q1:View Survey?, A1:Snooze}\n");
  E.showMessage("Reminder Snoozed!");
 setTimeout("introPage()", 1000);
}

function introPage() {
  g.clear();
  var layout = new Layout( {
  type:"v", c: [
      {type:"btn",font:"6x8:2", label:"View",pad:6, cb:()=> lunchReminder(), cbl: l=>print("One long press")},
    {type:"txt", font:"6x8:1.5",pad:4, label:"View Parent Survey?", id:"label" },
    {type:"btn",font:"6x8:2",label:"Snooze",pad:4, cb:()=> SnoozeFunc(), cbl: l=>print("long press to return")},
]});
g.clear();
layout.render();
}


introPage();

function lunchReminder() {
  f.write("{Q1:View Survey?, A1:View}\n");
  g.clear();
  var layout = new Layout( {
  type:"v", c: [
      {type:"btn",font:"6x8:2", label:"Yes",pad:6, cb:()=> YesconfirmScreen(), cbl: l=>print("One long press")},
    {type:"txt", font:"6x8:2",pad:4, label:"Fruits eaten?", id:"label" },
    {type:"btn",font:"6x8:2",label:"No",pad:4, cb:()=> NoconfirmScreen(), cbl: l=>print("long press to return")},
]});
g.clear();
layout.render();
}

function NoconfirmScreen() {
 f.write("{Q1:Confirm Survey?, A1:No}\n");
  answers1 = "No";
  state = states.confirm;
  if(state == states.confirm) {
  E.showMessage("Confirm No?","Swipe up/down > confirm + right/left > back"); 
      Bangle.on("drag", e => {
      if (!drag) { // start dragging
        drag = {x: e.x, y: e.y};
      } else if (!e.b) { // released
        const dx = e.x-drag.x, dy = e.y-drag.y;
        drag = null;
        if (Math.abs(dy)>Math.abs(dx)+10) {
          // vertical up
          E.showMessage("DONE!","End of Survey");
        }  
        else if (Math.abs(dx)>Math.abs(dy)-10) {
          // vertical down
           lunchReminder();
        } 
       
       
       
      }
  }
                
);
      
  } 
}

function YesconfirmScreen() {
  state = states.confirm;
  f.write("{Q1:Confirm Survey?, A1:yes}\n"); 
  if(state == states.confirm) {
  E.showMessage("Confirm Y?","Swipe up/down > confirm + right/left > back"); 
      Bangle.on("drag", e => {
      if (!drag) { // start dragging
        drag = {x: e.x, y: e.y};
      } else if (!e.b) { // released
        const dx = e.x-drag.x, dy = e.y-drag.y;
        drag = null;
        if (Math.abs(dy)>Math.abs(dx)+10) {
          // vertical up
          E.showMessage("DONE!","End of Survey");
        }  
        else if (Math.abs(dx)>Math.abs(dy)-10) {
          // vertical down
           lunchReminder();
        } 
       
       
       
      }
  }
                
);
      
  } 
 
}

/*****
function thankYouBye() {
  Bangle.on("drag", e => {
    if (!drag) { // start dragging
      drag = {x: e.x, y: e.y};
    } else if (!e.b) { // released
      const dx = e.x-drag.x, dy = e.y-drag.y;
      drag = null;
        E.showMessage("YAY!","Good job, Im proud of you!!!");
      if (Math.abs(dy)>Math.abs(dx)+10) {
        // vertical
          E.showMessage("DONE!","End of Survey");
      } 
  }
});
 }

function pleaseRemember() {
  Bangle.on("drag", e => {

    if (!drag) { // start dragging
      drag = {x: e.x, y: e.y};
    } else if (!e.b) { // released
      const dx = e.x-drag.x, dy = e.y-drag.y;
      drag = null;
        E.showMessage(":(","Well please remember to eat them!");
      if (Math.abs(dy)>Math.abs(dx)+10) {
        // vertical
          E.showMessage("DONE!","End of Survey");
      }
    
  }
});
 }
 ******/
