const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "@cwruTC17",
  database: "train_trackdb",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("INSERT INTO users (email, password) VALUES (?,?)",
    [email, password], 
    (err, result) => {
        if(err) {
            console.log(err)
        }
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password], 
    (err, result) => {
        if(err) {
            res.send({err: err})
        }
        if(result.length > 0) {
            res.send(result);
        }
        else {
            res.send({message: "Wrong email/password combination"});
        }
    });
});

app.post("/addcompany", (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    
    db.query("INSERT INTO company (name, address) VALUES (?,?)",
    [name, address], 
    (err, result) => {
        if(err) {
            console.log(err)
        }
    });
});

app.post("/addtrain", (req, res) => {
    const model = req.body.model;
    const seats = req.body.seats;
    const owner = req.body.owner;
    
    db.query("INSERT INTO train (model, seats, owner) VALUES (?,?,?)",
    [model, seats, owner], 
    (err, result) => {
        if(err) {
            console.log(err)
        }
    });
});

app.post("/addstation", (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    
    db.query("INSERT INTO station (name, address) VALUES (?,?)",
    [name, address], 
    (err, result) => {
        if(err) {
            console.log(err)
        }
    });
});

app.post("/addrailroad", (req, res) => {
    const distance = req.body.distance;
    const weight = req.body.weight;
    const rail_class = req.body.rail_class;
    const owner = req.body.owner;
    
    db.query("INSERT INTO railroad (distance, weight, class, owner) VALUES (?,?,?,?)",
    [distance, weight, rail_class, owner], 
    (err, result) => {
        if(err) {
            console.log(err)
        }
    });
});

app.get("/companies", (req, res) => {
    db.query("SELECT * FROM company", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/stations", (req, res) => {
    db.query("SELECT * FROM station", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        }
    });
});

app.get("/trains", (req, res) => {
  db.query("SELECT * FROM train", (err, result) => {
      if (err) {
      console.log(err);
      } else {
      res.send(result);
      }
  });
});

app.get("/railroads", (req, res) => {
  db.query("SELECT * FROM railroad", (err, result) => {
      if (err) {
      console.log(err);
      } else {
      res.send(result);
      }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});