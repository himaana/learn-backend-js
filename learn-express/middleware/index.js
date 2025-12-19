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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
