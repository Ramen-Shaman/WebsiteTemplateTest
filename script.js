function convertPxToVw(target) {
    "use strict";
    var vw_context = window.innerWidth * 0.01;
    return (target / vw_context);
}

function checkDevice() {
    bannerImage = document.getElementById('banner-img');
    element = document.getElementById('hero-background-image-link');
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile| Chrome Mobile | Opera Mini/i.test(navigator.userAgent) && (element.getAttribute('data-mobile-image') && element.getAttribute('data-mobile-image') !== 'false')) {
        bannerImage.src = element.getAttribute('data-mobile-image');
        bannerImage.style.display = 'block';
    } else {
        if (element.getAttribute('data-desktop-image') && element.getAttribute('data-desktop-image') !== 'false') {
                                    bannerImage.src = element.getAttribute('data-desktop-image');
                                    bannerImage.style.display = 'block'; 
                                }
                                    else{                    bannerImage.style.display = 'none';
                                    }                
                            }              
                }


function adjustFontSize(){
    var original_font_size = null;
    var converted_font_size = null;
    var element = null; 
    var elements = null; 
    element = document.getElementById('hero_header'); 
    original_font_size = parseFloat(document.getElementById('hero-header-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        if(window.innerWidth <= 768 && converted_font_size > 10.0){
            converted_font_size = 10.0;
        }
    
    element.style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
    element = document.getElementById('hero_subtitle'); 
    original_font_size = parseFloat(document.getElementById('hero-subtitle-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        if(window.innerWidth <= 768 && converted_font_size > 4.5){
             converted_font_size = 4.5;
        }
    
    element.style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
    elements = document.querySelectorAll('.rewards-templete .heading-holder h2');
    original_font_size = parseFloat(document.getElementById('header-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
    elements = document.querySelectorAll('.rewards-templete .heading-holder p');
    original_font_size = parseFloat(document.getElementById('subtitle-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
    elements = document.querySelectorAll('.rewards-templete .main-block .block-holder .item-box h3');
    original_font_size = parseFloat(document.getElementById('grid-item-desc-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
    elements = document.querySelectorAll('.rewards-templete .main-block .block-holder .item-box h2');
    original_font_size = parseFloat(document.getElementById('grid-item-cost-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
    elements = document.querySelectorAll('#swell-bootstrap .rewards-templete .faq-block .content-block h2');
    original_font_size = parseFloat(document.getElementById('faq-question-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        } 
    
    elements = document.querySelectorAll('#swell-bootstrap .rewards-templete .faq-block .content-block p');
    original_font_size = parseFloat(document.getElementById('faq-answer-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
    elements = document.querySelectorAll('.rewards-templete .referral-block h2');
    original_font_size = parseFloat(document.getElementById('header-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
    elements = document.querySelectorAll('.rewards-templete .referral-block p');
    original_font_size = parseFloat(document.getElementById('subtitle-font-size').getAttribute('data-font-size'));
    converted_font_size = convertPxToVw(original_font_size);
    
        for (i = 0; i < elements.length; ++i){
            elements[i].style.setProperty( 'font-size', converted_font_size+'vw', 'important' );
        }
    
}

window.addEventListener('resize', function(){
    adjustFontSize();
});

var stateCheck = setInterval(function(){
    
    if (document.readyState === 'complete') 
    {
        clearInterval(stateCheck);
        adjustFontSize();
        checkDevice();
    }
    
}, 100);