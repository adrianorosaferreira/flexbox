function setFlexDirection(direction) {
    var container=document.getElementById('container'); 
        container.style.WebkitFlexDirection = direction; 
        container.style.flexDirection = direction;
}

function setWritingMode(mode) {
    var container=document.getElementById('container'); 
        container.dir = mode;
}

