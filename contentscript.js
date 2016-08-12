var spoilers = [
  "center of the universe",
  "beat the game",
  "the games ending",
  "game ended",
  "completed the game",
  "finished the game",
  "no man's sky story was",
  "no mans sky story was",
  "no man's sky was",
  "it was",
  "didn't like no man's sky",
  "didn't like no mans sky",
  "liked",
  "No man's sky was",
];

// To-Do:
// -Make all letters lowercase before looping through the content
// -Add a pretty modal

console.log("Looking for spoilers");

var counter = 0;

$(document).ready(function(){
  for(var i = 0; i < spoilers.length; i++) {
    if(document.body.innerText.indexOf(spoilers[i]) > -1) {
      counter++;
    }
  }
  if(counter > 0) {
    console.log("There are potential spoilers on this page");
    alert("There are potential spoilers on this page!");
    // $( function() {
    //   $('body,html').dialog({
    //     resizable: false,
    //     height: "auto",
    //     width: 400,
    //     modal: true,
    //     buttons: {
    //       "Delete all items": function() {
    //         $( this ).dialog( "close" );
    //       },
    //       Cancel: function() {
    //         $( this ).dialog( "close" );
    //       }
    //     }
    //   });
    // } );
  }else{
    console.log("This site is spoiler free")
  }
});






