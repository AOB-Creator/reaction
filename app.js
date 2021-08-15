let user = {
    email: "",
    username: "",
    password: ""
}
let tester = {
    ema:"",
    uname:"",
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
    const username = document.querySelector("#username")
    const pass1 = document.querySelector("#password")
    const pass2 = document.querySelector("#password2")

    email.addEventListener("change", (e)=>{
        tester.ema=e.target.value
    })
    username.addEventListener("change", (e)=>{
        tester.uname=e.target.value
    })
    pass1.addEventListener("change", (e)=>{
        tester.p1 = e.target.value
    })
    pass2.addEventListener("change", (e)=>{
        tester.p2 = e.target.value
    })
    
    button.addEventListener("click", function(e){
        e.preventDefault()
        const {ema, uname, p1, p2}=tester;
        console.log(ema, p1, p2)
        if(ema!=="" && uname!==""){
        if(p1===p2 && p1!==""){
            if(p1.length>=8){
                user.email = ema
                user.username = uname
               user.password=p1;
               localStorage.setItem("user", JSON.stringify(user))  
               user.email=""
               user.username=""
               user.password=""      
               signup.classList.add("none")
                pages.classList.remove("none")
            }else{
                alert("xavfsizlik uchun passwordta kamida 8ta simvol ishlating")
            }
                
        }else{
            alert("Passowords are not the same")
        }
    }else{
        alert("Barch katakchalar toldirilishi shart")
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
    logbtn.addEventListener("click", (e)=>{
            e.preventDefault()
            console.log(logger.data1, logger.data2);
        const datauser = JSON.parse(localStorage.getItem("user"))
        const {username, password} = datauser;
        
        

        if( logger.data1 == username && logger.data2==password){      
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
                const waiting  = document.querySelector(".waiting-time")
                const timer  = document.querySelector(".timer")
                waiting.textContent = "you have several error"    
                logbtn.classList.add("none")
                
                let time = k*3;
                const a=setInterval(()=>{
                    timer.classList.remove("none")
                    timer.textContent=time 
                    time--
                    

                }, 1000)
                setTimeout(() => {
                    logbtn.classList.remove("none")
                    waiting.textContent = ""    
                    timer.classList.add("none")
                    timer.textContent="" 
                    clearInterval(a)
                }, k*3000);
                k++
                
                
             }      
            }
    )
}


































