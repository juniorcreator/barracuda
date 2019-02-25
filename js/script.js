
jQuery(document).ready(function () {
//по клику на иконку поиска спускаеться поиск
$('.contacts_search_item_img').on('click', function(){
	$(this).siblings('.contacts_search_item').addClass('actSearch');
	$(this).siblings('.contacts_search_item').animate({
		'top':'0'
	},300);
	$(this).siblings('.contacts_search_item').focus();

});


// скрываем поиск если клип не по кнопке поиск и не о блоку поиска
$(document).mouseup(function (e){
		var div = $(".contacts_search"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			var hideElem = $('.contacts_search_item');
			hideElem.animate({'top':'-400'});
			hideElem.removeClass('actSearch');
			hideElem.val('');
		}
});


// при клике на тел номер показываем или убираем дополнительные номера и меняем стрелочку
$('.contacts_phones_span').on('click', function(){
	var list = $('.contacts_phones_list');
	var img = $('.contacts_phones_arr img');
	if(list.is(':hidden')){
		img.addClass('imgRotated');
		list.css('display','block');
	}else {
		img.removeClass('imgRotated');
		list.css('display','none');
	}
});

//при наведении показываем и прячем список
var langList = $('.contacts_lang_list');
var langarr = $('.contacts_lang_text_arr img');
$('.contacts_lang_text').hover(function(){
	langarr.addClass('imgRotated');
	langList.css('display','block');

}, 
function(){
	langList.css('display','none');
	langarr.removeClass('imgRotated');

});//end hover


// при клике на выбранный язык заменяем текст тем который был выбран
var defoultLanguage = $('.contacts_lang_text_span');
$('.contacts_lang_list li').each(function(){
	$(this).on('click', function(){
		var thisText = $(this).text();
		defoultLanguage.text(thisText);
		langList.hide();
	});

});


$( ".datepicker" ).datepicker();
$('.datepicker').datepicker({
    beforeShow: function(input, inst)
    {
        inst.dpDiv.css({marginTop: -input.offsetHeight + '100', marginLeft: input.offsetWidth + 'px'});
    }
});
// при клике на календарик форма с датойй стает в фокус
$('.date_img').on('click', function(){
	$('.date').focus();
});

//при скроле прячем или показываем кнопку наверх
var buttScroll = $('.scrollTop'); 
$(document).on('scroll', function(){

 if($(document).scrollTop() > 700){
	buttScroll.show();
 }else{
	buttScroll.hide();
 }

});


// при клике прокрутка страницы вверх
  $('.scrollTop').click(function() {
    $('html, body').animate({scrollTop: 0},700);
    return false;
  });

// если форма валидна кнопка отправить меняет цвет
/*var inputs = $('.valid');
var form = $('.regForm');
var btnSubmit = $('.submit');
inputs.on('input change', function(){
	if(form.is(':valid')){
		btnSubmit.css({'background-color':'#1C9963'});
	}else{
		btnSubmit.css({'background-color':'#F6303E'});
	}
	
});*/

///кликабельное меню
var mainMenu = $('.nav_shop .mainNav li');
mainMenu.each(function(){
	$(this).stop().on('click', function(){

		if($(this).find('.innrNav').is(':hidden')){
			$('.nav_shop .mainNav li').find('.innrNav').css('display','none');
			$('.nav_shop .mainNav li').find('img').css('transform','rotate(0deg)');
			$(this).find('.innrNav').css('display','block');
			$(this).find('img').css('transform','rotate(180deg)');
		}else{
			$(this).find('.innrNav').css('display','none');
			$(this).find('img').css('transform','rotate(0deg)');
		}
	});
	

});


//menu
var showmenu = $('.containers');
var menutop = $('.nav_shop .mainNav');
showmenu.on('click', function(){
	if(menutop.is(':hidden')){
		menutop.css('display','block');
		showmenu.addClass('change');
	}else{
		menutop.css('display','none');
		showmenu.removeClass('change');
	}
});


$("button").click(function(){
    $("p").off("click");
});

//убираем баг после маленького екрана
$( window ).resize(function() {
	if ($(window).width() > 533) {
		$('.nav_shop .mainNav').css('display','flex');
		showmenu.removeClass('change');
	}
	if($(window).width() < 533){
		$('.nav_shop .mainNav').hide();
	}
	return false;
});


/// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    mouseDrag: false,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 600,
    autoplayHoverPause: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


});// end Jquery








