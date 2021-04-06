const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Ashish kapoor", email: "009ashish.kum@gmail.com", Balance: 500}, {
        username: "pawan singh", email: "potato.singgmail.com", Balance: 500
    }, {
        username: "anshul sharma", email: "karyana@gmail.com", Balance: 500
    },
    {
        username: "varun saxena", email: "dhawan78@gmail.com", Balance: 500},
    {
        username: "sahil dogra", email: "sahil_Dogra@gmail.com", Balance: 500
    },
    {
        username: "preetam saxena", email: "12preeta.sax@gmail.com", Balance: 500
    },
    {
        username: "ankush kapoor", email: "kapoor90anku@gmail.com", Balance: 500
    }]);
};

v();