# Desafio-Brickup

# CRUD DE TAREFAS

Um projeto onde é possível adicionar, editar, listar e deletar tarefas.




## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:BrenoGodoy/Desafio-Brickup.git
```

Entre no diretório do front

```bash
  cd desafio-brickup-front
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev

```

## Rodando o Back

Clone o projeto


Entre no diretório do back (vá para raíz do projeto)

```bash
  cd desafio-brickup-back 
```

Crie um Banco de Dados com o nome taskList
```bash
  mysql -u ~coloque-aqui-seu-user -p
```

No terminal do mySql, digite:

```bash
  create database taskList;
```

Com o banco criado, acesse o seguinte arquivo:

```bash
  raíz-do-projeto/target/classes/application.properties
```
Nesse arquivo cole suas credencias:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/taskList
spring.datasource.username=SEU_USERNAME
spring.datasource.password=SUA_SENHA
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
```

## Configurando MyFiles

Com tudo feito, agora falta apenas configurar o PATH de onde serão armazenadas as imagens que serão feitas updload.

Navegue até a service, dentro de src/main/java

Dentro da service existe uma variável chamada FOLDER_PATH
```bash
    private final String FOLDER_PATH="DIGITE AQUI A ROTA PARA SEU ARQUIVO myFiles, que está na raíz do projeto";

```

Lembrando que a rota deve estar no formato completo dessa maneira:

```bash
/home/seu_usuario/pasta_onde_clonou/Desafio-Brickup/desafio-brickup-back/myFiles/
``` 
