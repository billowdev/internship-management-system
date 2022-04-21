require("dotenv").config(); 
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require('morgan')
const cors = require('cors')
const app = express();
app.use(express.json({ limit: "40mb" }));
app.use(cookieParser());

//config for only development
if (process.env.NODE_ENV === 'development') {
	// Cors it's allow to deal with react for localhost at port {CLIENT PORT} without any problem
	app.use(cors({
		origin: process.env.CLIENT_URL
	}))
	// Morgan give information about each requrest
	app.use(morgan('dev'))
}

const usersRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const studentsRoute = require("./routes/students.route");
const loginRoute = require("./routes/admin/login.route");

app.use("/api/users", usersRoute);
// authentications
app.use("/api/auth", authRoute);
// admin
app.use("/api/admin/login", loginRoute);
// app.use("/api/admin/login", loginRoute);

//student
app.use("/api/students", studentsRoute);




module.exports = app;
