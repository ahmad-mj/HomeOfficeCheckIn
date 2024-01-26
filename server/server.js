const express = require("express");
const mysql = require("mysql2");
const { compare } = require("./bc");
let secrets = require("../secrets.json");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// MySQL-Database connection
const db = mysql.createConnection({
  host: secrets.mySQL.host,
  user: secrets.mySQL.user,
  password: secrets.mySQL.password,
  database: secrets.mySQL.database,
});

// Check the database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to database");
});

// JSON-Requests Middleware
app.use(express.json());

// TODO: Handle the request from the frontend to stop the HomeOffice time
app.post('/stop-homeoffice/:userId', (req, res) => {
  try {
    const userId = req.params.userId;

    // TODO: Add logic here for updating the database if needed

    // Send a success message back to the frontend
    res.json({ success: true });
  } catch (error) {
    console.error("Error stopping HomeOffice:", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
app.post("/start-homeoffice/:userId", (req, res) => {
  try {
    const userId = req.params.userId;

    // TODO: Add logic here for updating the database if needed

    // Send a success message back to the frontend
    res.json({ success: true });
  } catch (error) {
    console.error("Error starting HomeOffice:", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Home Office API Working!");
});

// User login
app.post("/login", (req, res) => {
  const { user_name, password } = req.body;

  console.log("Received login request with user_name:", user_name);
  console.log("Received password:", password);
  db.query(
    "SELECT * FROM users WHERE user_name = ?",
    [user_name],
    async (err, results) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      if (results.length === 0) {
        console.log("User not found with user_name:", user_name);
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const user = results[0];
      try {
        const isMatch = await compare(password, user.hashed_password);

        if (isMatch) {
          return res.json({ message: "Login success" });
        } else {
          return res.status(401).json({ error: "Invalid Login data" });
        }
      } catch (error) {
        console.error("Password error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
