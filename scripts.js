const primary_color = '#811c1c';  

///Scroll to top on refresh
//history.scrollRestoration = "manual";

//Convert number to another range of number
function convertRange(value, oldRangeMin, oldRangeMax, newRangeMin, newRangeMax) {
    return (value - oldRangeMin) * (newRangeMax - newRangeMin) / (oldRangeMax - oldRangeMin) + newRangeMin;
}

var scrollValue = window.scrollY;
window.addEventListener('scroll', function() {
    scrollValue = window.scrollY;
    console.log(scrollValue);
})

var targetScrollValue = 1200;
var secondTargetScrollValue = 2400;
var endScrollValue = 3600;


//Animate Navbar
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navbar_container = document.getElementById('navbar-container');
    var brand_image = navbar_container.querySelector('img');
    var navbar_texts = document.getElementById('navbar-nav').querySelectorAll('a');
    var search_box = document.getElementById("search-box");
    var search_input = document.getElementById("search-input");
    var search_icon = document.getElementById("search-icon");
    var login_button = document.getElementById("login-button");

    if ((scrollValue <= targetScrollValue-500) || (scrollValue >= secondTargetScrollValue-100)) { //Unscrolled
        //Navbar BG
        if (scrollValue <= secondTargetScrollValue+100) {
            navbar.style.background = 'linear-gradient(180deg, #570a0000 80%, #570a0000 100%)';
        } else {
            navbar.style.background = 'linear-gradient(180deg, #570a00ff 80%, #570a0000 100%)';
        }
        
        //Logo
        brand_image.style.filter = ' saturate(0%) brightness(500%)';

        //Text
        for (let i = 0; i < navbar_texts.length; i++) {
            if (navbar_texts[i].classList.contains('active')) {
                navbar_texts[i].style.backgroundColor = 'transparent';
            } else {
                navbar_texts[i].style.color = '#fff';
            }
            
        }

        //Search Box
        search_box.style.borderColor = '#fff';
        search_input.style.color ='#fff';
        search_icon.setAttribute('fill', '#fff');

        login_button.style.backgroundColor = '#fff';
        login_button.style.color = primary_color;

    } else { //Scrolled
        navbar.style.background = 'linear-gradient(180deg, #570a0000 80%, #570a0000 100%)';

        brand_image.style.filter = ' saturate(100%) brightness(100%)';

        for (let i = 0; i < navbar_texts.length; i++) {
            if (navbar_texts[i].classList.contains('active')) {
                navbar_texts[i].style.color = '#fff';
                navbar_texts[i].style.backgroundColor = primary_color;
            } else {
                navbar_texts[i].style.color = primary_color;
            }
            
        }

        search_box.style.borderColor = primary_color;
        search_input.style.color = primary_color;
        search_icon.setAttribute('fill', primary_color);

        login_button.style.backgroundColor = primary_color;
        login_button.style.color = '#fff';
    }
    
})

//Animate "Kenapa Harus Memilih"
window.addEventListener('scroll', function() {
    var header = document.getElementById('choose');
    if (scrollValue < targetScrollValue) {
        var fontSize = convertRange(scrollValue, 0, targetScrollValue, 4, 3);
        var width = convertRange(scrollValue, 0, targetScrollValue, 40, 30);
        var translateY = convertRange(scrollValue, 0, targetScrollValue, -1, -3);
        header.style.transform = 'translateY(' + translateY + 'em) scaleY(0.8)';
        header.style.fontSize = fontSize + 'em';
        header.style.width = width + '%';

        var r = convertRange(scrollValue, 0, targetScrollValue, 255, 126);
        var g = convertRange(scrollValue, 0, targetScrollValue, 255, 28);
        var b =convertRange(scrollValue, 0, targetScrollValue, 255, 0);
        header.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
    }


})

//Animate Background
window.addEventListener('scroll', function() {
    newTargetScroll = targetScrollValue + 500;
    var hand_bg = document.getElementById('hand-bg');
    var hand_fg = document.getElementById('hand-fg');
    var paper = document.getElementById('paper');

    var translateY = -scrollValue;

    hand_bg.style.transform = "translateY(" + translateY*1.05 + "px)";
    hand_fg.style.transform = "translateY(" + translateY*1.05 + "px)";

    paper.style.filter = 'brightness(' + convertRange(scrollValue, 0, targetScrollValue, 100, 96) + '%) contrast(' + convertRange(scrollValue, 0, targetScrollValue, 100, 95) + '%) opacity(' + convertRange(scrollValue, targetScrollValue, secondTargetScrollValue-400, 100, 0) + '%)';
    paper.style.transform = 'translateY(' + convertRange(scrollValue, 0, secondTargetScrollValue, 0, 40) + 'em)';
    
    var box = document.getElementById('box');
    box.setAttribute('width', convertRange(scrollValue, 0, targetScrollValue, 600, window.innerWidth+800));
    box.setAttribute('height', convertRange(scrollValue, 0, targetScrollValue, 350, screen.height));
    box.style.transform = "translate(-50%, " + (-50 + translateY*0.05) + "%)";
    box.style.filter = 'brightness(' + convertRange(scrollValue, 0, targetScrollValue+500, 100, 200) + '%)';

    var ballot2 = document.getElementById('ballot2');
    ballot2.style.transform = "translate(-50%, " + (-50 + translateY*0.1) + "%)";
    ballot2.setAttribute('width', convertRange(scrollValue, 0, targetScrollValue, 600, window.innerWidth+800));

    var closure_bot_1 = document.getElementById('closure-bot-1');
    var closure_bot_2 = document.getElementById('closure-bot-2');
    var closure_bot_3 = document.getElementById('closure-bot-3');


    closure_bot_1.style.transform = 'translateX(' + convertRange(scrollValue, 0, targetScrollValue, 0, -25) + 'em) translateY(' + convertRange(scrollValue, 0, targetScrollValue, 0, 25) + 'em)';
    closure_bot_2.style.transform = 'translateX(' + convertRange(scrollValue, 0, targetScrollValue, 0, -40) + 'em) translateY(' + convertRange(scrollValue, 0, targetScrollValue, 0, 40) + 'em)';
    closure_bot_3.style.transform = 'translateX(' + convertRange(scrollValue, 0, targetScrollValue, 0, -55) + 'em) translateY(' + convertRange(scrollValue, 0, targetScrollValue, 0, 55) + 'em)';
    
    var closure_top_1 = document.getElementById('closure-top-1');
    var closure_top_2 = document.getElementById('closure-top-2');
    var closure_top_3 = document.getElementById('closure-top-3');


    closure_top_1.style.transform = 'translateX(' + convertRange(scrollValue, 0, targetScrollValue, 0, -25) + 'em) translateY(' + convertRange(scrollValue, 0, targetScrollValue, 0, 25) + 'em)';
    closure_top_2.style.transform = 'translateX(' + convertRange(scrollValue, 0, targetScrollValue, 0, -40) + 'em) translateY(' + convertRange(scrollValue, 0, targetScrollValue, 0, 40) + 'em)';
    closure_top_3.style.transform = 'translateX(' + convertRange(scrollValue, 0, targetScrollValue, 0, -55) + 'em) translateY(' + convertRange(scrollValue, 0, targetScrollValue, 0, 55) + 'em)';

    //Move the whole things after targetScrollValue
    var sub_1 = document.getElementById("sub-1");
    if (scrollValue > targetScrollValue) {
        sub_1.style.top = -convertRange(scrollValue, targetScrollValue, secondTargetScrollValue, 0, 0) + '%';
    }

    var ballotbg = document.getElementById('ballotbg');
    if (scrollValue >= 700) {
        ballotbg.style.filter = 'brightness(' + convertRange(scrollValue, 700, 1100, 100, 600) + '%) grayscale(' + convertRange(scrollValue, 700, 1100, 0, 100) + '%)';
    } else {
        ballotbg.style.filter = 'brightness(100%)';
    }

    ballotbg.style.backgroundColor = 'rgba(126, 28, 0,' + convertRange(scrollValue, targetScrollValue+1000, secondTargetScrollValue, 1, 0) +')';
});

//Show paragraph
window.addEventListener('scroll', function() {
    var paragraph = document.getElementById('paragraph');
    if (scrollValue > targetScrollValue-100) {
        paragraph.style.top = '45%';
        paragraph.style.filter = 'opacity(100%)';
    } else {
        paragraph.style.top = '50%';
        paragraph.style.filter = 'opacity(0%)';
    }


    //TRANSPARENT PARAGRAPH
    var first_fade = document.getElementsByClassName('first-fade');
    for (var i = 0; i < first_fade.length; i++) {
        if (scrollValue >= secondTargetScrollValue) {
            first_fade[i].style.filter = 'opacity(0%)';
        } else {
            first_fade[i].style.filter = 'opacity(' + convertRange(scrollValue, targetScrollValue+600, secondTargetScrollValue-200, 100, 0) + '%';
        }
    }
    
    
    if (scrollValue >= targetScrollValue+600) {
        
    } else {
        navbar.style.backgroundColor = '#570a0000';
    }

});

//Scroll Last
// window.addEventListener('scroll', function() {
//     if (scrollValue >= 4532) {
//         document.getElementById('last-body').style.transform = 'translateY(' + convertRange(scrollValue, 4532, 5500, 0, 1000) + 'px)';
//     }
// })


