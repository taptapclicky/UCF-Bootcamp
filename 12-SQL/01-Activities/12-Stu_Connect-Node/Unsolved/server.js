const express = require('express');
// grabbing the client 
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// creates the connection to the data base 
const db = mysql.createConnection(
  {
    host: 'localhost',
    // mysql username
    user: 'root',
    // mysql password
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);
// query database
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});
// redirtects to 404 or prompts 404 for any other requests 
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
