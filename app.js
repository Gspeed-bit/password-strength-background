

const background = document.querySelector('.background');

const passwordValue = document.getElementById("password")



    
    passwordValue.addEventListener("input", (e)=>{
        let input = e.target.value; 
        let inputValue = 20 - (input.length *3)

         background.style.filter = `blur(${inputValue}px)`
        
    
    
    })



 
