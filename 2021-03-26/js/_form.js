$(function(){
    $(':input').css('backgroundColor', 'yellow');
    $(':password').css('backgroundColor', 'green');
    $(':radio').parent().css('backgroundColor', '#ff00ff');
    $(':submit').css('backgroundColor', '#bbb');
    $(':checkbox:checked').parent().css('backgroundColor', 'red');

    $('#txt').val($('[name="sl"] option:selected').text());

    $(':button').on('click', function() {
        $('#txt').val($('textarea').val());
    }) 
})