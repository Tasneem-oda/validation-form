let inputs = [ //creating the opjects
    
        name = `
        <div class="name">
            <input type="text" placeholder="enter your name">
            <div class="next"></div>
        </div>
        `
    ,
        email = `
        <div class="email">
            <input type="email" placeholder="enter your email">
            <div class="next" ></div>
        </div>
        `
    
    ,
        password = `
        <div class="password">
            <input type="password" placeholder="enter your password">
            <div class="next"></div>
        </div>
        `
    
]
let index = 0;
const form = document.querySelector('form');
form .innerHTML = inputs[0];
let next_sign = document.querySelector('.next');
let name_input = document.querySelector('.name input')
next_sign.addEventListener('click', function(){
if(name_input.value !=''){
    form.classList.add('valid')
    form.classList.remove('invalid')
        // let name = document.querySelector('.name');
        // name.style.marginTop = '50px';
        // setTimeout(function(){
        //     name.style.marginTop = '0px';
        // } , 300)
            form.innerHTML = inputs[1];
            let email_input = document.querySelector('.email input')
            next_sign = document.querySelector('.next');
            next_sign.addEventListener('click', function(){
                if (email_input.value !=''){
                    form.classList.add('valid')
                    form.classList.remove('invalid')
                    form.innerHTML = inputs[2];
                    next_sign = document.querySelector('.next');
                    let password_input = document.querySelector('.password input');
                    next_sign.addEventListener('click', ()=>{
                         if(password_input.value.length > 6 ){
                            form.classList.add('valid')
                            form.classList.remove('invalid')
                        form.innerHTML = `
                        <div class="thanks">
                        <p> thank you for filling the form</p>
                    </div> 
                        `
                    }else{
                        let password = document.querySelector('.password');
                        password.style.rotate= '45deg' 
                        form.classList.remove('valid');
                        form.classList.add('invalid')
                        setTimeout(function(){
                            password.style.rotate= '0deg' 
                        } , 300)
                        
                    }
                    })
                   
                 
                }else{
                    let email = document.querySelector('.email');
            email.style.rotate= '45deg' 
            form.classList.remove('valid');
            form.classList.add('invalid')
            setTimeout(function(){
                
                email.style.rotate= '0deg' 
            } , 300)
                }
            })
            

        }else{
            let name = document.querySelector('.name');
            name.style.rotate= '45deg' 
            form.classList.remove('valid');
            form.classList.add('invalid')
            setTimeout(function(){
                
                name.style.rotate= '0deg' 
            } , 300)
        }
    })
    // email validation  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/