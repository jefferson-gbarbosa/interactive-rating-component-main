const button = document.querySelector('button'); 
const rating = document.querySelector('.rating');
const resultSection = document.querySelector('.result');
const textResult = document.querySelector('#text-result');
let starts = document.querySelectorAll("li");
let countStart = 0;

starts.forEach((start) =>{
   start.addEventListener('click', ()=>{
      start.classList.toggle('active')
   });
})

button.addEventListener('click',()=>{
   starts.forEach((start) =>{
      if(start.classList.contains('active')){
         countStart++;
      }
   })
   rating.classList.add('hide');
   resultSection.classList.remove('hide')
   textResult.innerText = `You selected ${countStart} out of 5`;
})