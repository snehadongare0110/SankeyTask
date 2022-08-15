function errorfunc() {
    var users =
    {

        email: "sanky905@solutions.com",
        pass: "mindset",
    }
    var email = document.getElementById("email");
    var password = document.getElementById("password");

   

        if (email != "users.email" || password == "users.pass") {
            document.getElementById("issuese").innerHTML = "Invalid Password";


        } else if (email == "users.email" || password != "users.pass") {
            document.getElementById("issuese").innerHTML = "Invalid Email";
        } else {
            document.getElementById("issuese").innerHTML = "Invalid Email & Password";



        }
    }
    errorfunc()