quando baixamos um projeto do git hub, para podermos instalar suas dependências, utilizamos o comando
npm install

criando projeto todolist sql

instalando o gerenciador de pacotes
npm init -y -> -y, signifca que toda pergunta que o instalador fizer na instalação, sua resposta será sempre sim
foi gerado um arquivo package.json
img package.json.jpge

instalando o express, ultima versão no projeto com o -S
npm install -S express

foi gerado um arquivo package-lock.json e a pasta node_modules e suas dependências
img package-lock.json.jpge

criando o arquivo gitignore pelo terminal com o comando
touch .gitignore
neste arquivo, colocamos o que não queremos tratar e nem subir para o repositorio do github

inicialisando um repositorio na pasta com o comando
git init

adicionando todo o conteúdo ao commit com o comando
git add .

visualisando o conteúdo adicionado ao commit
git status

criando o nosso servidor
server.js

iniciando o servidor
node server.js

parando o servidor com o comando
control + C

para evitar ter que para e iniciar o servidor a cada alteração, vamos instalar o nodemon em ambiente de desenvolvimento -D
npm i -D nodemon

mudando a forma de estartar o servidor, com novo comando 
npm start

criando uma estrutura de pastas mkdir para criar pasta
mkdir models
mkdir src
mkdir src/routes
mkdir src/controllers ou mkdir models src src/routes src/controllers

criando o usuarioRoute.js dentro da pasta routes
touch routes/usuarioRoute.js

criando o usuariosControlers
touch src/controllers/usuariosControllers.js

visualizando o status do projeto e salvando ele localmente antes de subir para o git
git status

adicionando todas as modificações ao repositorio local, se quiser add só uma modificação é só colocar gir add 'nome do arquivo'
git add .

criando uma mensagem
git commit -m "mensagem"

informando quais os repositorios remotos que você tem
git remote -v

adicionando o meu repositorio
git remote add origen <lik do repositori>

colocando em um repositorio nas nuvens
git push -u origin master

na primeira vez ele vai pedir usuario e senha





git commit -m " Criado as Pastas do projeto todolistsql, models, src, src/controlles, src/routes, e os arquivos de
ntro das pastas src/controllers/usuariosControllers.js, src/routes/usuarioRoutes.js,  na pasta raiz .gitignore, pack
age.json, package-lock.json e server.js."
