var content_on = 0;
var current_selected = "";

function set_content(id){
    if(!content_on) { 
        $('content').toggleClassName('invisible');
        content_on = 1
    }
    document.getElementById('content').innerHTML = document.getElementById(id).innerHTML;

    if(current_selected !="") {$(current_selected + "li").removeClassName('strong');}
    current_selected = id ;
    $(current_selected + "li").addClassName('strong');
}

