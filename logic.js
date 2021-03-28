var body=document.getElementById('main');
var col1=document.querySelector('.c1');
var col2=document.querySelector('.c2');
var prop=document.querySelector('h3');

col1.addEventListener("input",getcol);
col2.addEventListener("input",getcol);
function getcol()
{
    body.style.background='linear-gradient(to right,'
    +col1.value+','+col2.value+')';
    prop.textContent=body.style.background;
}
