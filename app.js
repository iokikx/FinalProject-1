const mockUser = {
    username: "iokikx",
    password: "123456",
    name: "baem",
    };
    function createJWT(payload, secret, expiresInSeconds = 20) {                                                                                                                                                                                                                           
        const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
        const body = btoa(
        JSON.stringify({
        ...payload,
        exp: Date.now() + expiresInSeconds * 1000,
        })
        );
        const signature  = btoa(`${header}.${body}.${secret}`);
         return `${header}.${body}.${signature}`;
        }
        document.getElementById("loginForm").addEventListener("submit", function (e) {                                                         
        e.preventDefault();                              
        const username = document.getElementById("username").value;                                    
        const password = document.getElementById("password").value;
        if (username === mockUser.username && password === mockUser.password) {
        const token = createJWT({username: mockUser.username}, "mysecret", 20);
        
        localStorage.setItem("token", token);
        
        localStorage.setItem("name", mockUser.name);
        localStorage.setItem("email", mockUser.email);
        alert("Login successful!");
        window.location.href = "home.html";
        } else {
        alert("Invalid username or password.");
        } 
        });