//Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
//using $('.class').load('htmlFileName.html');
//this will allow for much cleaner front end development without useing a templater like handlebars
// $('.modalContent').load('modalExample.html body');
// $('#modalTrigger').attr('href','#modal1')

// $(function(){
//     // $('.modalContent').append($('#modal1').html());
//     $('.modalContent').load('modalExample.html');
    
//     $('.modal').modal();
//     $('#modalTrigger').attr('href','.modal1').addClass('modal-trigger');
//     // $('#modal1').modal('open');
// });

$(function(){
    const supportsTemplate = function(){
        return 'content' in document.createElement('template');
    };
    document.addEventListener('DOMContentLoaded', ()=> {
        if(supportsTemplate()){
            let temp = document.getElementById('firstModal');
            let content2 = temp.content;
            $('#modalContent').append(content2);
            console.log("template loaded");
        }
    });

});
