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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
