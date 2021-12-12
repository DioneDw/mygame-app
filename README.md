# Aplicação MeuJogo, desenvolvido por Dione W. Evangelista
Projeto criado no Trabalho Prático de Banco de Dados 2. 

Matéria ministrada pelo Professor Bruno Rabello, pela Faculdade Federal de Ouro Preto (UFOP) - Campos João Monlevade
2021-Dez

Seguir passos abaixo para instalação das ferramentas necessárias para execução do projeto.

Este projeto foi inicializado com [Create React App] (https://github.com/facebook/create-react-app).

--------------------------------------------------------------------------------------------------------------------------

## Tecnologias que serão utilizadas na concepção do projeto e suas utilidades:
•	CSS 3 e HTML 5 (para criar o design site)
•	React (para implementar as funcionalidades front-end da aplicação)
•	Redux (para gerenciar os estados da aplicação)
•	NodeJs (para criar o back-end escalável)
•	Mongoose (para criar a conexão entre o Mongodb e a aplicação nodejs)
•	JSON Web Tokens (Para criar a autenticações dos usuários)
•	Bcrypt.js (Para encriptar as senhas no banco de dados)
•	MongoDB with Compass (Banco de dados + GUI)

--------------------------------------------------------------------------------------------------------------------------

## Ferramentas essenciais para funcionamento da aplicação: 
**Node.js, Editor de Texto, MongoDB**


Necessário iniciar o BACK-END através do comando  **npm start (pelo terminal, na pasta principal)**.

Para verificarmos que o servidor está ativo podemos consultar no navegador através do endereço: http://localhost:5000/

O mesmo exibirá a informação: Server is ready

Posteriormente para inserção dos dados de maneira prática no banco de dados,  utilizar o comando no navegador:
http://localhost:5000/api/users/seed


http://localhost:5000/api/users/seed


Os dados dos usuários base e dos produtos base contidos no arquivo data.js serão inseridos no banco de dados (Código detalhado nas linhas: 10 a 17 no arquivo userRouter.js e 15 a 22 no arquivo productRouter.js

Após isto podemos iniciar o app react atraves do comando: **npm start (pelo terminal, na pasta frontend)**.

--------------------------------------------------------------------------------------------------------------------------
## Sobre o React

No diretório do projeto, você pode executar, na pasta frontend:

### `npm start`

Executa o aplicativo no modo de desenvolvimento. \
Abra [http: // localhost: 3000] (http: // localhost: 3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições. \
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de teste no modo de observação interativo. \
Consulte a seção sobre [testes em execução] (https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`. \
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. \
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação] (https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `npm run eject`

** Nota: esta é uma operação unilateral. Depois de `ejetar`, você não pode mais voltar! **

Se não estiver satisfeito com a ferramenta de construção e as opções de configuração, você pode `ejetar` a qualquer momento. Este comando removerá a dependência de compilação única de seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas irão apontar para os scripts copiados para que você possa ajustá-los. Neste ponto, você está sozinho.

Você não precisa usar `ejetar`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para ela.

## Saber mais

Você pode saber mais na [documentação do aplicativo Criar React] (https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, verifique a [documentação do React] (https://reactjs.org/)
