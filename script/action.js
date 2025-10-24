
$('.mo_nav').html($('.pc_nav').html());
$('.mo_icons').html($('.icons').html());

// mo nav
$('.hamburger').click(function(){
    $('.mo_wrap').show()
})

$('.mo_wrap').click(function(){
    $(this).hide();
})
$('.mo_nav').click(function(e){
    e.stopPropagation();
})