const judul = document.getElementById('judul');
judul.style.color = 'orangeRed';
judul.style.backgroundColor = '#ccc';

// judul.style = 'text-align: center; font-size: 50px';

// getElementsByTagName()  ====> HTMLCollection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightBlue';
}

const a = document.getElementsByTagName('a')[0];
a.style.backgroundColor = 'yellow';

// getElementsByClassName()  ====> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'di rubah via js';

// querySelector()  ====> element
const li = document.querySelector('section#b > ul li:nth-child(2)');
// li.style.backgroundColor = 'orangered';

// querySelectorAll()  ====> nodeList
const p2 = document.querySelectorAll('#a > p');
p2[1].style.color = 'white';

// merubah node root
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.color = 'orangeRed';