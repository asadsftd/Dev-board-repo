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
    alert("Board Updated Successfully");
    btnOne.disabled = true;
    let minus = document.getElementById("minus"); 
minus.innerText = minus.innerText - 1;
let plus = document.getElementById("plus");
plus.innerText = Number (plus.innerText)+1;
document.getElementById("container-three");
 let p = document.createElement('p');
 p.classList.add('para');
 p.innerText = "You have Complete The Task Fixed Mobail Button Issue! at 12:48:15 PM";
 let container=document.getElementById("box");
container.appendChild(p);
});
const btnTwo =document.getElementById("card-two");
btnTwo.addEventListener('click', function(event){
    alert("Board Updated Successfully");
    btnTwo.disabled = true;
    let minus = document.getElementById("minus");
    minus.innerText = minus.innerText - 1;
    let plus = document.getElementById("plus");
    plus.innerText = Number(plus.innerText)+1;
    document.getElementById("container-three");
    let p = document.createElement('p');
    p.classList.add('para');
    p.innerText = "You have Complete The Task Add Dark Mode    at 12:49:20 PM";
    let container=document.getElementById("box");
    container.appendChild(p);
});
const btnThree = document.getElementById("card-three");
btnThree.addEventListener('click', function(event){
    alert("Board Updated Successfully");
    btnThree.disabled = true;
    let minus = document.getElementById("minus");
    minus.innerText = minus.innerText - 1;
    let plus = document.getElementById("plus");
    plus.innerText = Number (plus.innerText)+1;
        document.getElementById("container-three");
    let p = document.createElement('p');
    p.classList.add('para');
    p.innerText = "You have Complete The Task Optimize Home Page at 12:51:15 PM";
    let container=document.getElementById("box");
    container.appendChild(p);
});
const btnFour = document.getElementById("card-four");
btnFour.addEventListener('click', function(event){
    alert("Board Updated Successfully");
    btnFour.disabled = true;
    let minus = document.getElementById("minus");
    minus.innerText = minus.innerText - 1;
    let plus = document.getElementById("plus");
    plus.innerText = Number(plus.innerText)+1;
    document.getElementById("container-three");
    let p = document.createElement('p');
    p.classList.add('para');
    p.innerText = "You have Complete The Task Add New Emoji at 12:52:15 PM";
    let container=document.getElementById("box");
    container.appendChild(p);  
});
const btnFive = document.getElementById("card-five");
btnFive.addEventListener('click', function(event){
    alert("Board Updated Successfully");
    btnFive.disabled = true;
    let minus = document.getElementById("minus");
    minus.innerText = minus.innerText - 1;
    let plus = document.getElementById("plus");
    plus.innerText = Number(plus.innerText)+1;
    document.getElementById("container-three");
    let p = document.createElement('p');
    p.classList.add('para');
    p.innerText = "You have Complete The Task Add New Emoji at 12:52:15 PM";
    let container=document.getElementById("box");
    container.appendChild(p);
});
const btnSix = document.getElementById("card-six");
btnSix.addEventListener('click', function(event){
    alert("Board Updated Successfully");
    alert("Congrates!!! you have completed all the current task");
    btnSix.disabled = true;
    let minus = document.getElementById("minus");
    minus.innerText = minus.innerText - 1;
    let plus = document.getElementById("plus");
    plus.innerText = Number(plus.innerText)+1;
    document.getElementById("container-three");
    let p = document.createElement('p');
    p.classList.add('para');
    p.innerText = "You have Complete The Task Improve Job Searching at 12:54:15 PM";
    let container=document.getElementById("box");
    container.appendChild(p);
});
// date
let toDay= new Date();
document.getElementById("date").innerText=toDay.toDateString();

document.getElementById("clear")
.addEventListener('click', function(){
    document.getElementById("box").style.display='none';
})

