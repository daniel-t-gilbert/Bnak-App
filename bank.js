function register(){
    accnoDetails = {
        accountNumber : accNum.value,
        username : userName.value,
        password : pass.value,
        balance : 2000
    }

    if(accnoDetails.accountNumber in localStorage){
        alert("account number is already present..!!");
    }
    else{
        localStorage.setItem(accnoDetails.accountNumber , JSON.stringify(accnoDetails));
        alert("Registerd Successfully");
        window.location.href="index.html";
    }
}


function login(){
    
    accno = loginAccno.value;
    pass = loginPass.value;

    if(accno in localStorage){
        accnoDetails=JSON.parse(localStorage.getItem(accno));
        console.log(accnoDetails["password"]);

        if(pass==accnoDetails.password){
            alert("Login succesful");
            window.location.href='home.html';
        }
        else{
            alert("incorrect password..!!");
        }

    }
    else{
        alert('Invalid account number');
    }
}