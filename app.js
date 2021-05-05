$('.navItem').each(function(){
    $(this).css("color","white")
    })
$('#nav').each(function(){
    $(this).css('background-color','#145')
    })
$('li:even').each(function(){
    $(this).css('background-color', '#ccc')
})
$('li:odd').each(function(){
    $(this).css('background-color', '#aaa')
})
$('#myInput').val("Andrew")