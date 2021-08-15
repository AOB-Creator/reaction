let user = {
    email: "",
    password: ""
}
let tester = {
    ema:"",
    p1:"",
    p2:""
}
let logger = {
    data1:"",
    data2:""
}

let k = 0;

const signup = document.querySelector(".sign-up")
const login = document.querySelector(".login")
const logout = document.querySelector(".logout")
const pages = document.querySelector(".pages")  


if(localStorage.getItem("user")===null){
    
    signup.classList.remove("none")
    const button = document.querySelector(".sign-up button")

    const email = document.querySelector("#email")
    const pass1 = document.querySelector("#password")
    const pass2 = document.querySelector("#password2")

    email.addEventListener("change", (e)=>{
        tester.ema=e.target.value
    })
    pass1.addEventListener("change", (e)=>{
        tester.p1 = e.target.value
    })
    pass2.addEventListener("change", (e)=>{
        tester.p2 = e.target.value
    })
    
    button.addEventListener("click", function(e){
        e.preventDefault()
        const {ema, p1, p2}=tester;
        console.log(ema, p1, p2)
        if(email!==""){
        if(p1===p2 && p1!==""){
                user.email = ema
               user.password=p1;
               localStorage.setItem("user", JSON.stringify(user))  
               user.email=""
               user.password=""      
               signup.classList.add("none")
        pages.classList.remove("none")
        }
    }else{
        alert("")
    }
}
    )

}else if(localStorage.getItem("user")!==null){
    const logbtn = document.querySelector(".loginbtn")
    
    login.classList.remove("none")
    const inputlogin = document.querySelector("#emailogin")
        const passwordlogin = document.querySelector("#passwordlogin")

        inputlogin.addEventListener("change", (e)=>{
            logger.data1 = e.target.value
            
        })
        passwordlogin.addEventListener("change", (e)=>{
            logger.data2 = e.target.value
            
        })
    const alter = logbtn.addEventListener("click", (e)=>{
            e.preventDefault()
            console.log(logger.data1, logger.data2);
        const datauser = JSON.parse(localStorage.getItem("user"))
        const {email, password} = datauser;
        
        

        if( logger.data1 == email && logger.data2==password){      
    
                k=0;
                pages.classList.remove("none")
                
                
                logout.addEventListener("click",  function(){
                    localStorage.removeItem("user")          
                    signup.classList.remove("none")
                    logout.classList.add("none")
                    pages.classList.add("none")

                })
                login.classList.add("none")
            } else {
                // k++
                
                // setTimeout(() => {
                    
                // logbtn.removeEventListener()
                    
                // }, k*1000);
                
                // setInterval(() => {
                //     const waiting = document.querySelector(".waiting-time")
                //     waiting.textContent = k;
                // }, 1000);
                
             }      
            }
    )
}


































