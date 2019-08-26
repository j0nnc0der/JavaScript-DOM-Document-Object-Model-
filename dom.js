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
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = "Hello Jon";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#f4f4f4';
}