var download = require("download-pdf");

var pdf =
  "https://www.asfi.gob.bo/images/ASFI/DOCS/OPORTUNIDADES_EMPLEO/2018/Requerimiento_de_personal_02-2018.pdf";

var options = {
  directory: "./pdfs/ebola/",
  filename: "2014-11-20.pdf"
};

download(pdf, options, function (err) {
  if (err) throw err;
  console.log("meow");
});
