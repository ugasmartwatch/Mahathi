let drag;
const states = {
  init: 1, // intro
  notify1: 2, // show reminder1 
  lunchnotify1: 3,
};

function setState(st) {
  state = st;
}

 function initDragEvents() {
  Bangle.on("drag", e => {
  if (state == states.notify1) {
    if (!drag) { // start dragging
      drag = {x: e.x, y: e.y};
    } else if (!e.b) { // released
      const dx = e.x-drag.x, dy = e.y-drag.y;
      drag = null;
      if (Math.abs(dx)>Math.abs(dy)+10) {
        // horizontal
        E.showMessage("Oof","You've ignored parents' notif");
      } else if (Math.abs(dy)>Math.abs(dx)+10) {
        // vertical
            setState(states.lunchnotify1);
        
        require("notify").show({id:"msg", title:"Lunch Remind", body:"Did you eat your fruits? Swipe up/down-YES! left/right-No:("});
        
          lunchReminder();
        
      }
    }
  }
});
 }

function lunchReminder() {
  Bangle.on("drag", e => {
  if (state == states.lunchnotify1) {
    if (!drag) { // start dragging
      drag = {x: e.x, y: e.y};
    } else if (!e.b) { // released
      const dx = e.x-drag.x, dy = e.y-drag.y;
      drag = null;
      if (Math.abs(dx)>Math.abs(dy)+10) {
        // horizontal
         E.showMessage("PLEASE EAT YOUR FRUITS!!","Well..");
        setState(states.init);
      } else if (Math.abs(dy)>Math.abs(dx)+10) {
        // vertical
         E.showMessage("YAY!","Good job, Im proud of you!!!");
      }
    }
  }
});
 }



            
          
        
  






   

// eg... show notification

// or display lots of text, with a phone icon
setState(states.init);
if(state == states.init) { 
 E.showMessage("Got a message from your parent!!");
 E.showMessage("Press Btn1! \n\n Swipe up/down\n SEE \n\nSwipe left/right\n+/- IGNORE  ","NEW PARENT NOTIF!"); 
  setState(states.notify1);
}

if(state == states.notify1) {
 initDragEvents(); 
}




 
/**

require("notify").show({
  title:"Hello",
  src:"Test",
  body:"This is a really really really long bit of text that has to be wrapped",
  icon:require("heatshrink").decompress(atob("jEYxH+ACcejwUUAAYWVjESCqoABCqoYNCpQXLCxgXJQowtTA4ZbSZiwW/C4gWWjAXVZwIuVWhxFIC6z6OLpIXSCywXYDAIWVAAYXTA=="))
});



// Use ID to only hide a specific notification if it is still visible
require("notify").show({id:1, title:"Test", body:"Some Alert"});


require("notify").show({id:"msg", title:"Message", body:"Incoming Message"}); // replaces Test Alert
*/
