function setOrder(element,order) {
    var item = document.getElementById(element); 
        item.style.order = order ;
        item.style.backgroundColor= 'red' ;
}
function colorDefault() {
    items = document.getElementsByClassName('item')
    for (let index = 0; index < items.length; index++) {
        items[index].style.backgroundColor = 'white';       
    }
}

