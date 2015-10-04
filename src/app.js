var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');


var splashWindow = new UI.Window();
var titleText = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  text:'$treak',
  font:'GOTHIC_28_BOLD',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center'
});
var streakDetails = new UI.Text({
  position: new Vector2(0, 40),
  size: new Vector2(144, 50),
  text:'Welcome! ',
  font:'GOTHIC_28',
  color:'black', 
  textOverflow:'wrap',
  textAlign:'center'
});
splashWindow.add(new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  backgroundColor: 'white'
})); //background white
splashWindow.add(titleText);
splashWindow.add(streakDetails);
splashWindow.show();

var menuItems = [
            {title: "Add",
             subtitle: "Workout"}, 
            {title: "Add",
             subtitle: "Food Log"}
        ];
var mainMenu = new UI.Menu({
   sections: [{
        title: 'Welcome to Streak',
        items: menuItems
      }]
});
splashWindow.on('click', function(e) {
  mainMenu.show();
});

mainMenu.on('select', function(e) {
  var tempCard = new UI.Card({
    title: 'Added ' + menuItems[e.itemIndex].subtitle,
    subtitle: 'Streak continues!'
  });
  tempCard.show();
})