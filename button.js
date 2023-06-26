//MouseHover on Navigation
function hoverEffect(element) {
    element.style.backgroundColor = 'rgba(129, 28, 28, 0.8)';
    element.style.color = '#fff';
}

function exitHoverEffect(element) {
    element.style.backgroundColor = 'rgba(0,0,0,0)';
    if ((scrollValue > targetScrollValue-350) && (scrollValue <= secondTargetScrollValue)) {
        element.style.color = primary_color;
    } else {
        element.style.color = '#fff';
    }
}