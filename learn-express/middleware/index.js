import express from "express";

const app = express();
const PORT = 3000;
/* 
    Task 1
    Logger Middleware

    Create global middleware that returns method and url
*/
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

/* 
    Task 2
    Auth Middleware

    Create middleware checkAuth:
    • if query ?token=123 -> next()
    • if not -> response 401 "Unauthorized"

    Use in route:
    GET /dashboard
*/
const checkAuth = (req, res, next) => {
    const token = req.query.token;

    if (token !== "123") {
        return res.status(401).send("Unauthorized");
    }

    next();
};

app.get("/dashboard", checkAuth, (req, res) => {
    res.send("Welcome to Dashboard");
});

/* 
    Task 3
    Middleware Order

    Add middleware:
    app.use(express.json());

    Create route POST /login

    Body:
    {"username" : "admin"}

    Response:
    Hello admin
*/
app.use(express.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    res.send(`Hello ${username}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
