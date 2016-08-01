
$(window).load(function(){
	var h1 = $('.bg-color').height();
	$('.bg-color .w-33').css('height', h1);


});



$(document).ready(function(){



	$("a.modal-form").fancybox({
		'hideOnContentClick': true,
		minWidth : 230,
		padding : 0,
		closeBtn : true,
		afterClose:function () {
			$('.form-all .js-val').val('');
		}
	});

	$('.js-type').on('click', function() {
		$('.form-all .js-val').val( $(this).closest('.w-33').find('.head').html() );
	});
	$('.js-wh').on('click', function() {
		$('.form-all .js-val').val( $(this).attr('data-val') );
	});

	

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	$('a.scr[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 600);
		}
	});


	jQuery(function($){ 
		$(".mask").mask("+7(999) 999-9999");
	});


});