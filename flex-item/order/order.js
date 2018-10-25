function setOrder(array) {
    colorDefault()
    array.forEach(element => {
        var item = document.getElementById(element[0]);
        item.style.order = element[1];
        item.style.backgroundColor = 'red';
    });
}

function colorDefault() {
    items = document.getElementsByClassName('item')
    for (let index = 0; index < items.length; index++) {
        items[index].style.backgroundColor = 'white';
        items[index].style.order = 'unset';
    }
}