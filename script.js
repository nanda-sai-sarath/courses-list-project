function LoginValidate() {
    var p=document.myform.password.value;
    var u=document.myform.username.value;
    if(u==null || u==""){
        alert("Username must be entered")
        return false;
    }
    else if(p.length==null || p.length==""){
        alert("Please enter Password")
        return false;
    }
    else if (p.length<8) {
        alert("Password Length must be greater than 8 characters")
        return false;
    }
    return true;          
}