var express = require("express"); // framework que reduz linha de codigo. Pois efetua a criação de aplicações web  como configurar o seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.
var mongoose = require("mongoose"); //conector com o node com o mongodb
const port = 8083; //porta
const app = express(); //tudo o que tiver app sera express
  
mongoose.connect("mongodb://localhost/ProjetoCarrefour", { // nome do meu banco, mongoose conecta com meu banco que cria-o no mongodb
  useNewUrlParser: true, //
  useUnifiedTopology: true,
});
var db = mongoose.connection;  //conectar do mongo com o banco
  
app.use(express.json()); //usando o objeto json
  
// Pega os arquivos que estão na pasta public
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
  
app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*", // permitir o acesso ao diretorio raiz
  });
    
  // res.send("Hello World"); Primeiro arquvio que ele carrega ao colocar localhost
  return res.redirect("index.html");
});
  
app.post("/formFillUp", (req, res) => { //segunda rota após ir a primeira, guardando esses dados e enviando ao banco de dados
  var name = req.body.name;
  var reason = req.body.reason;
  var email = req.body.email;
  var phone = req.body.phone;
  var city = req.body.city;
  var state = req.body.state;
  var addressline = req.body.addressline;
  
  var data = {
    name: name,
    reason: reason,
    email: email,
    phone: phone,
    city: city,
    state: state,
    addressline: addressline,
  };
  
  db.collection("users").insertOne( //onde é guardado os meus ados
  data, (err, collection) => { 
    if (err) {
      throw err;
    }
    console.log("Usuário Criado com Sucesso!");
  });
  
  return res.redirect("formSubmitted.html"); //Pós enviar redireciona para essa página
});
  
app.listen(port, () => { // Abre o localhost com o numero da porta
  console.log(`A aplicação rodou na porta ${port}`);
});