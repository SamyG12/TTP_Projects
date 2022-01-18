

$(document).ready(function (){
    function init(){
        //section to input the name
        if(localStorage["name"]){
            $('#name').val(localStorage["name"]);
        }
    //section for the email
    if(localStorage["email"]){
        $('#email').val(localStorage["email"]);
    }
    //section for the message
    if(localStorage["message"]){
        $('#message').val(localStorage["message"]);
    }
}
    init();


});
//Save the data in the local storage.

$('stored').change(function(){
    localStorage[$(this).attr('name')] = $(this).val();

});