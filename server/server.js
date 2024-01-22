const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const { hash, compare } = require('./bc');
let secrets = require('../secrets.json')

const app = express();
const PORT = process.env.PORT || 3001;

// MySQL-Database connection
const db = mysql.createConnection({
  host: secrets.mySQL.host,
  user: secrets.mySQL.user,
  password: secrets.mySQL.password,
  database: secrets.mySQL.database
});

// JSON-Requests Middleware
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Home Office API Working!');
});

// user Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'status 500' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const user = results[0];

    compare(password, user.hashed_password)
      .then(isMatch => {
        if (isMatch) {
          res.json({ message: 'Login success' });
        } else {
          res.status(401).json({ error: 'Invalid Login data' });
        }
      })
      .catch(err => {
        console.error('Password error:', err);
        res.status(500).json({ error: 'status 500' });
      });
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
