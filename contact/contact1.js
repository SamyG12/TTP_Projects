$(document).ready(function (){
    function init(){
        if(localStorage["name"]){
            $('#email').val(localStorage["email"]);
        }
    
    if(localStorage["email"]){
        $('#email').val(localStorage["email"]);
    }
    if(localStorage["message"]){
        $('#message').val(localStorage["message"]);
    }
}
    init();


});

$('stored').change(function(){
    localStorage[$(this).attr('name')] = $(this).val();

});