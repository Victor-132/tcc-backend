# **BACKEND DA APLICAÇÃO**

***

## **Para acessar o BACKEND da aplicação é necessário realizar algumas coisas**

* [Instalar o Postgresql.](https://www.postgresql.org/download/)
* No arquivo Knexfile.js é necessário colocar o **usuário, senha e tabela(Necessário criar tabela também) do postgresql.**
* [Editar o arquivo common.js colocando seu IP na aplicação React-Native na pasta App](https://bitbucket.org/xrundevelopment/tcc/src/master/). 
* Utilizar o comando ***npm install*** no CMD para instalar as dependências.
* Utilizar o comando ***Knex migrate:latest*** no CMD para ajustar o middleware.
* Utilizar o comando ***npm start*** para rodar o BACKEND.
***
## **Caso ocorra erro com seu nodemon é recomendado utilizar os seguintes comandos**

* ***npm install -g nodemon***
* ***npm install --save-dev nodemon***
* ***npm config get prefix***
* ___set PATH=%PATH%;C:\Users\"Aqui seu usuario"\AppData\Roaming\npm;___
  
***
## **Na parte de banco de dados temos os seguintes comandos úteis**
Para acessar o postgresql via CMD
* ***psql -U postgres***
 
 Para acessar a tabela
* ***\c "Nome da tabela"***


Para verificar os registros dos usuários
* ***select * from users;***
***
## **Para descobrir seu IP**

### Abra o CMD e utilize o comando ***ipconfig***
### Na parte de ***Rede Ethernet*** ou ***Adaptador de Rede Sem Fio*** seu **IP** estará em ___IPV4: 192.168.**___