const express = require("express");
const app = express(); //obtiene el objeto express
const { exec } = require('child_process');
const fs = require("fs");

app.use(express.json()); // linea de código encargado de hacer conocer el formato JSON

app.all("/user", (req, res, next) => {
  console.log("Por aqui paso");
  next();
}); // método express encargado de pasen toda las ruras (/user)

app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "Howe"
  }); //responde la petición
}); //recibe una peticion HTTP(get) y realiza algo

// Creación de Router
app.post("/user", (req, res) => {
  console.log(req.body);
  let ci = req.body.ci;
  let password = req.body.password;

  exec(`npm --varCi=${req.body.ci} --varPassword=${req.body.password} test -- --tag dnsia`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    fs.rename('./test_image/pdf/ejemplo_esp.pdf', `./test_image/pdf/${ci}-${password}.pdf`, (err) => {
      if (err) throw err;
      console.log('Nombre Editado Satisfactoriamente');
      
      let obj = {
        'ci': ci,
        'password': password
      }
      let listadoPorHacer = [];
      listadoPorHacer.push(obj);
      let data = JSON.stringify(listadoPorHacer);
      fs.writeFile("db/data.json", data, err => {
        if (err) throw new Error("No se puedo grabar", err);
      });

      exec('node test_image/quicktest.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    });

  });

  // console.log(req.params); //obtiene  datos del id (url) parametros
  res.send("POST REQUEST RECEIVED"); //request post
});

app.listen(3000, () => {
  console.log("Serve on port 3000");
}); //levantar el servicio
