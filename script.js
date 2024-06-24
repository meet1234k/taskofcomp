const sidebar1=document.querySelector('.sidebar')
const fortext=document.querySelector('.arrowicon')
const arrow=document.querySelector('.arrow')
let count=0;
fortext.addEventListener("click",function(){
    if(count==0){
    sidebar1.style.width="200px"
    console.log("hello")
    count=1
    }
    else{
        sidebar1.style.width="100px"
        count=0
    }

    
})

