function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "", x = 0
    for (var i = 0; i < length; i++) {
            x = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(x);  
        
    }
    return pass;
}

function generate() {
    myform.row_password.value = randomPassword(myform.length.value);
}