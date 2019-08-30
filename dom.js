// // EXAMINE THE DOCUMENT OBJECT //


// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID//
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// var header = document.getElementById('main-header');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'
// Understand text content, inner text and Inner HTML
// changing the style 
//header.style.borderBottom = 'solid 3px #000';


// GET ELEMENTS BY CLASS NAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// //Gives error
// // items.style.backgroundColor = '#f4f4f4';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f44';
// }

//GET ELEMENTS BY TAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// //Gives error
// // items.style.backgroundColor = '#f4f4f4';
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f44';
// }

//CLASS NAME AND TAG NAME IS IDENTICAL.


// IMPORTANT- QUERY SELECTOR//
// use for more than 1 item.
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #f44';

// var input = document.querySelector('input');
// input.value = 'HELLO WORLD';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow';

// QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = "Hello Jon";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#f4f4f4';
// }




// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f6f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f6f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes - nodelist(array)
// console.log(itemList.childNodes); dont use this
// use this
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'orange';


// FirstChild - is kind of useless
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 01';

// lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';



// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);


// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';




// // Create a div
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'hello';
// console.log(newDiv);

// // Add id
// newDiv.id = 'Hello11dgdf1';

// // Add Artibute
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Helllo Mr Tech');

// //Add text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '60px';

// container.insertBefore(newDiv, h1);

// EVENTSSS
// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
// console.log('Button Clicked');
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#4f4';
//  console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>' +
//     e.target.id + '</h3>';


// //event object
// console.log(e.type);

// console.log(e.clientX);
// console.log(e.clientY);

//console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }


var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);


    console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';




    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3> <h3>MouseY: ' + e.offsetY + ' < /h3> ';

    // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
    // document.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}