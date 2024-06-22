console.log("login");
document.getElementById('btn-submit').addEventListener('click',()=>{
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    
    if(email === "test@gmail.com" && password === "123"){
        window.location.href = "bank.html"
    }else{
        alert("Wrong Information ...")
    }
})