[![Screenshot-20250506-102630.png](https://i.postimg.cc/WzMMXqcq/Screenshot-20250506-102630.png)](https://postimg.cc/Pv5pqxxd)




## Sobre o Projeto

dash finance é uma aplicação web para controle de finanças pessoais com landing page e dashboard. O projeto utiliza o Firebase para autenticação e armazenamento de dados.
<br/>

## Tecnologias

Lista de tecnologias utilizadas no projeto:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)

## Executando o projeto

1. Clone o repositório:

```bash
$ git clone https://github.com/airtonsena10/dashfinance
$ cd dashfinance
```

2. Crie um projeto no Firebase e ative o Firestore e Autenticação com Google.

- Permissões do Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    	allow read, write: if false;
    }

    match /financas/{email}/transacoes/{id} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
    
    match /usuarios/{email} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
  }
}
```




3. É preciso criar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_API_KEY=
```
Usar as credenciais do seu projeto no Firebase.

4. Dentro da pasta do projeto, execute os comandos abaixo:

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
O app estará disponível no endereço http://localhost:3000.


