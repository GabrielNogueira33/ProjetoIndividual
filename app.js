// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var jogoRouter = require("./src/routes/jogo");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/jogo", jogoRouter);


app.listen(PORTA_APP, function () {
    console.log(`
                                                                                            
                                                                                      dddddddd  
    PPPPPPPPPPPPPPPPP                                                                 d::::::d
    P::::::::::::::::P                                                                d::::::d
    P::::::PPPPPP:::::P                                                               d::::::d
    PP:::::P     P:::::P                                                              d:::::d 
      P::::P     P:::::P  ooooooooooo   uuuuuu    uuuuuunnnn  nnnnnnnn        ddddddddd:::::d 
      P::::P     P:::::Poo:::::::::::oo u::::u    u::::un:::nn::::::::nn    dd::::::::::::::d 
      P::::PPPPPP:::::Po:::::::::::::::ou::::u    u::::un::::::::::::::nn  d::::::::::::::::d 
      P:::::::::::::PP o:::::ooooo:::::ou::::u    u::::unn:::::::::::::::nd:::::::ddddd:::::d 
      P::::PPPPPPPPP   o::::o     o::::ou::::u    u::::u  n:::::nnnn:::::nd::::::d    d:::::d 
      P::::P           o::::o     o::::ou::::u    u::::u  n::::n    n::::nd:::::d     d:::::d 
      P::::P           o::::o     o::::ou::::u    u::::u  n::::n    n::::nd:::::d     d:::::d 
      P::::P           o::::o     o::::ou:::::uuuu:::::u  n::::n    n::::nd:::::d     d:::::d 
    PP::::::PP         o:::::ooooo:::::ou:::::::::::::::uun::::n    n::::nd::::::ddddd::::::dd
    P::::::::P         o:::::::::::::::o u:::::::::::::::un::::n    n::::n d:::::::::::::::::d
    P::::::::P          oo:::::::::::oo   uu::::::::uu:::un::::n    n::::n  d:::::::::ddd::::d
    PPPPPPPPPP            ooooooooooo       uuuuuuuu  uuuunnnnnn    nnnnnn   ddddddddd   ddddd
                                                                                              
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
