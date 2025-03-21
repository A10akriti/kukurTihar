const express = require("express");
const cors = require("cors"); 
require("./config/database.config");

const app = express();
app.use(cors()); 

const routes = require("./Routes");
const ContactRoutes = require("./Routes/contact.routes");
const EventRoutes = require("./Routes/event.routes");
const DashboardRoutes = require("./Routes/dashboard.routes");

app.use(
  express.json(), 
  express.urlencoded({
    extended: true,
  })
);

// Use routes after middlewares
app.use(routes);
app.use ("/api" , ContactRoutes);
app.use ("/api" , EventRoutes);
app.use ("/api" , DashboardRoutes);

app.use((req, res, next) => {
  next({
    data: "",
    msg: "page not found",
    code: 401,
    meta: null,
  });
});

app.use((error, req, res, next) => {
  const data = error.data || JSON.stringify(error.data);
  const msg = error.msg || "Resource not found";
  const status = error.status || 500;
  res.status(status).json({
    data: data,
    msg: msg,
    code: status,
    meta: null,
  });
});

app.listen(3005, "localhost", (error) => {
  if (error) {
    console.log("Error while listening Server");
  } else {
    console.log("Server is listening to port : ", 3005);
  }
});
