const colors=["green","	 #ff1a1a"," #0000ff","#33FF57","33FFEE","#DBFF33"," #808000","red","rgba(133,122,200","#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
   //get random number between 0 - 3 colors[0]=green
    // const randomNumber=2;
    const randomNumber=getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
