const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config.env" });

const app = require("./app");

// MongoDB URI for Compass/local connection
const DB = "mongodb://127.0.0.1:27017/Mern"; 

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Required for newer MongoDB drivers
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log("DB connection error:", err)); // Catch connection errors

const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
