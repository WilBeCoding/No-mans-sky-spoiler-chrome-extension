var spoilers = [
  // "center of the universe",
  // "beat",
  // "ending",
  // "ended",
  // "complete",
  // "completed",
  // "the story was",
  // "the game was",
  // "it was",
  // "didn't like",
  // "liked",
  // "No man's sky was",
  // "ships"
  "wolf"
];

console.log("Looking for spoilers");

var counter = 0;

console.log(document.body.innerText.indexOf("wolf"),  '     index of tracker');

console.log(spoilers,  '   spoilers');

$(document).ready(function(){
  for(var i = 0; i < spoilers.length; i++) {
    console.log(spoilers[i], '     spoilers i')
    if(document.body.innerText.indexOf(spoilers[i]) > -1) {
      counter++;
      console.log("FIRST if STATEMENT HITS")
      console.log(counter + '    counter');
    }
  }
  if(counter > 0) {
    console.log("There are potential spoilers on this page");
    $( function() {
      $('body,html').dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Delete all items": function() {
            $( this ).dialog( "close" );
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
      });
    } );
  }else{
    console.log("This site is spoiler free")
  }
});






