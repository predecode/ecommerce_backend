// Configuring the express js as a server
const express = require("express");
const app = express();

// For reading the values from the .env file.
const env = require("dotenv");
env.config();

// Connection to the mongodb
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

// Applying the middleware to parse the data sent from client-side
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
const authRoutes = require("./routes/userAuthRoutes");

const adminRoutes = require("./routes/admin/adminAuthRoutes");

const categoryRoutes = require("./routes/categoryRoutes");

// Applying middleware as "/api". i.e every request of user routes should be prefixed with "/api".
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

// App run on the port number
app.listen(process.env.PORT, () => {
  console.log(`Server is running at port number ${process.env.PORT}`);
});
