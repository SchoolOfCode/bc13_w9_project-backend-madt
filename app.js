require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const morgan = require("morgan")


const postRouter = require("./routes/post.js")
const customerRouter = require("./routes/customer.js")


// Parse the request JSON Body - This is an example of Middleware.
app.use(express.json());

// Using Morgan
// Morgan shows a report in the console. "GET / 200 1.693 ms - 70"
app.use(morgan("dev"))

// Using Router for each endpoint

app.use("/api/post", postRouter);
app.use("/api/customer", customerRouter);

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Listening Port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
