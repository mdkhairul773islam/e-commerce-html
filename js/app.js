$(document).ready(function(){
	$(".dropdown_li .nav-link").on("click", function(event) {
		var parent = $(this).closest(".dropdown_li");

        if(parent.hasClass("active")) {
            parent.removeClass("active");
        } else {
            parent.addClass("active");
            $( ".dropdown_li" ).not( parent ).removeClass( "active" );
        }
        event.preventDefault();
    });

	$(".sub_dropdown_li>a").on("click", function(event) {
		var parent = $(this).closest(".sub_dropdown_li");

        if(parent.hasClass("active")) {
            parent.removeClass("active");
        } else {
            parent.addClass("active");
            $( ".sub_dropdown_li" ).not(parent).removeClass( "active" );
        }
        event.preventDefault();
    });
});


var _d = (x)=>document.querySelector(x);
/* purchase_cart.active */
var cart_btn        = _d('.authentic .basket');
var purchase_cart   = _d('.purchase_cart')
var close_bar       = _d('.close_bar')
if(cart_btn && close_bar){
    cart_btn.onclick =()=>{
        if(purchase_cart.classList.contains('active')){
            purchase_cart.classList.remove('active');
        }
        else{
            purchase_cart.classList.add('active');
        }
    }
    close_bar.onclick =()=>{
        purchase_cart.classList.remove('active');
    }
}
/* Focus in the window */
window.onclick = (event)=>{
    if(!event.target.closest('.purchase_cart') && !event.target.closest('.authentic')){
		purchase_cart.classList.remove('active');
    }
}


/* fixed nav bar in jquery */
$(window).scroll(function() {
    if($(this).scrollTop() > 0) {
        $('.purchase_cart').addClass('scroll_height');
    } else {
        $('.purchase_cart').removeClass('scroll_height');
    };
});


/* quantity value js */
var minus = Object.values(document.querySelectorAll('.minus'));
var quantity_value = Object.values(document.querySelectorAll('.quantity_value'));
var plus = Object.values(document.querySelectorAll('.plus'));
minus.forEach((tag, key)=>{
	tag.addEventListener('click', ()=>{
		if(quantity_value[key].value>0){
			quantity_value[key].value = +quantity_value[key].value - 1;
		}
	});
	plus[key].addEventListener('click', ()=>{
		quantity_value[key].value = +quantity_value[key].value + 1;
	});
});
