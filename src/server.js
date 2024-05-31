require("dotenv").config();

const app = require("./app");

app.listen(4444, () => {
    console.log("server running in port 3333")
})
