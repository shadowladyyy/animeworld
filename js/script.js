/*** Document Ready */

document.addEventListener('DOMContentLoaded',() =>
{
    mobileMenu_init();

    window.addEventListener('resize', () =>
    {
        mobileMenu_init();
    });
});



/*** Mobile Menu */

function mobileMenu_show()
{
    return (window.matchMedia('(max-width: 1024px)').matches) ? true : false;
}



function mobileMenu_init()
{
    if(mobileMenu_show())
    {
        if(document.querySelector('#mobile-menu') == null)
        {
            document.querySelector('header nav').innerHTML += '<div id="mobile-menu"><span></span><span></span><span></span></div>';
            mobileMenu_build();

            document.querySelector('#mobile-menu').addEventListener('click', function(event)
            {
                event.preventDefault();
                mobileMenu_toggle();
            });
        }
    }
    else
    {
        mobileMenu_destroy();
    }
}




function mobileMenu_build()
{
    let menu_content = document.createElement('div');

    menu_content.setAttribute('id', 'mobile-menu-content');

    document.body.append(menu_content);


    let menu_content_overflow = document.createElement('div');

    menu_content.appendChild(menu_content_overflow);



    let navigation_clone = document.querySelector('header nav > ul').cloneNode(true);

    menu_content_overflow.appendChild(navigation_clone);
}



function mobileMenu_toggle()
{
    document.getElementById('mobile-menu').classList.toggle('open');
    document.getElementById('mobile-menu-content').classList.toggle('open');
}


function mobileMenu_destroy()
{
    let mobileMenu = document.getElementById('mobile-menu');

    if(mobileMenu != null)
    {
        mobileMenu.remove();
        document.getElementById('mobile-menu-content').remove();
    }
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);

} 

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * 
 * @param n
 */

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}



