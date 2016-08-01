


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

	var rrr = $('.js-read').html();

	$(document).on('click', '.js-read', function(e) {
		e.preventDefault();
		if ( $('.slide.hide').css('display') == 'block' ) {
			$(this).html(rrr);
		} else if ($('.slide.hide').css('display') == 'none') {
			
			$(this).html('Скрыть');
		}
		$(this).closest('.person-block').find('.slide.hide').slideToggle();
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