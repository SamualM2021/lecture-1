//Script that takes a name (i.e. node printName.js {name})
// => Welcome to WebDevCore [Testname]

function printName() {
    const welcomeMessage = "Welcome to WebDevCore"; 
    const username = process.argv[2];
    const message = welcomeMessage + " " + username + "!";
    console.log(message);
}

printName();
