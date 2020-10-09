//Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
//using $('.class').load('htmlFileName.html');
//this will allow for much cleaner front end development without useing a templater like handlebars

//For example, this is where we will inject the modalExample code into index.html without having a crazy tree
//in that file
// $('.launchModal').on('click',function(){
//     $('#exampleModal1').foundation('reveal','open');
// });
$(document).foundation();