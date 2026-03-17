const btn = document.getElementById("btn");
const colors =['red', 'blue', 'green', 'orange'];
let index = 0;
btn.addEventListener('click', function(event){
    document.body.style.backgroundColor=colors[index];
    index ++;
    if(index>=colors.length){
        index = 0;
    }
});
let btnOne=document.getElementById("card-one")
btnOne.addEventListener('click', function(){
    alert("Button Disabled");
    btnOne.disabled = true;
    let minus = document.getElementById("minus"); 
minus.innerText = minus.innerText - 1;
let plus = document.getElementById("plus");
plus.innerText = Number (plus.innerText)+1;
document.getElementById("container-three");
 let p = document.createElement('p');
 p.classList.add('para');
 p.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
 let container=document.getElementById("box");
container.appendChild(p);
});


document.getElementById("clear")
.addEventListener('click', function(){
    document.getElementById("box").style.display='none';
})

