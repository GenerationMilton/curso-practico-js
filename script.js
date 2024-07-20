const h1 = document.querySelector('h1');
const p= document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid= document.getElementById('pid');
const input= document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML='patito <br> Feo';
h1.innerText='patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');


h1.classList.add('rojo')
h1.classList.remove('verde')
//h1.classList.toggle('verde')
//h1.classList.contains('verde');

input.value = "456"

//elementos desde 0
const img = document.createElement('img');
img.setAttribute('src','https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg');
console.log(img);

pid.innerHTML="";
pid.appendChild(img);