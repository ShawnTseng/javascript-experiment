const collection = document.getElementsByTagName('p');
console.log(collection);

document.getElementById('demo1').textContent = collection[1].textContent;

document.getElementById('demo2').textContent = collection.length;

function changeColor() {
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = 'red';
    }
}