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
const sectionb = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.color = 'orangeRed';

const judul = document.getElementById('judul');
judul.innerHTML = 'dirubah via js';

const demo = document.getElementById('demo');

demo.style.backgroundColor = 'royalBlue';
demo.innerHTML = judul.innerHTML;

// element.style<property>
demo.style = 'color: royalBlue; font-size: 50px';

// element.setAttribute() || getAttribute() || removeAttribute()
const a = document.querySelector('section#a > a');
a.setAttribute('name', 'tautan');

// element.classList
// tidak bisa digunakan

// const p2 = document.querySelector('section#a > p.p2');
// p2.setAttribute('class', 'label');

// element.classList.add()

const p2 = document.querySelector('section#a > p.p2');
p2.classList.add('new');

// element.classList.remove()

p2.classList.remove('new');

// element.classList.toggle()
// pada console
// document.body.classList.toggle('dark-mode')

// element.classList.item()
// p2.classList
// p2.classList.add('satu')
// p2.classList.add('dua')
// p2.classList.add('tiga')
// p2.classList.item(0)

// element.classList.contains()
// element.classList.replace()

// #DOM Manipulation node method
// document.createElement()
const pBaru = document.createElement('p');

// document.createTextNode();
const textBaru = document.createTextNode('text baru pada p');

// document.appendChild()
pBaru.appendChild(textBaru);

// posisikan p baru
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// document.insertBefore()

// document.insertBefore()
const liBaru = document.createElement('li');
const textLi = document.createTextNode('item li baru');
liBaru.appendChild(textLi);

const ul = document.querySelector('section#b > ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// document.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// document.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const h2Text = document.createTextNode('judul baru');
h2Baru.appendChild(h2Text);
sectionB.replaceChild(h2Baru, p4);