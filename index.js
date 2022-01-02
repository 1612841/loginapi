const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB Connection Successful!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);

app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running!");
});