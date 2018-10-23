function setFlexFlow(direction, wrap) {
    var container=document.getElementById('container'); 
        container.style.webkitFlexFlow  = direction + ' ' + wrap;
        container.style.flexFlow = direction + ' ' + wrap;
}
function setStyleHeight(height) {
    var container=document.getElementById('container'); 
        container.style.height=height;
}
