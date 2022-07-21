$('#button').hide();
$('#button1').hide();
$('#button2').hide();
$('#button3').hide();
$('#button4').hide();

$('#rule').click(function(){
    $('#rule').hide();
    $('#button').fadeIn(200)
    $('#button1').fadeIn(200)
    $('#button2').fadeIn(200)
    $('#button3').fadeIn(200)
    $('#button4').fadeIn(200)
});


$('#predict').click(function(){
    $('#luck').hide();
    $('#luck').fadeIn(500);

})
