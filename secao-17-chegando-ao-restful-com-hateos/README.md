# API de Game

Esta API é utilizada para trablhar com games

## Endpoints GET

### /games

Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no BD

**Parametros**: Não nenhum parametro para esta rota

**Respostas**:

1. OK: 200 - Caso essa resposta aconteça você vai receber a listagem de todos os games

Exemplo de resultado:

```
[
  {
    "id": 11,
    "title": "Call of duty MW",
    "year": 2019,
    "price": 60
  },
  {
    "id": 22,
    "title": "Sea of Thieves",
    "year": 2018,
    "price": 40
  },
  {
    "id": 33,
    "title": "Minecraft",
    "year": 2012,
    "price": 20
  }
]
```

2. Falha na autenticação: 401 - Caso essa resposta aconteça, isso significa que ocorreu alguma falha durante o processo de autenticação da requisição.

2.1 Motivos de falhas: Token inválido; Token expirado.

```
{
  "err": "Token Inválido"
}
```

## Endpoints POST

### /auth

Esse endpoint é responsável por fazer o processo de login

**Parametros**:

`email` do usuario cadatrado

`password` do usuário respectivo.

```
{
  "email": "pablo@email",
  "password": "JS<3"
}
```

**Respostas**:

1. OK: 200 - Caso essa resposta aconteça você vai receber o token para fazer o login

Exemplo de resultado:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYWJsb0BlbWFpbCIsImlhdCI6MTY4MTgzMzU5MiwiZXhwIjoxNjgyMDA2MzkyfQ.-sLBU6-_YAzFesFykvc_8c3B_CWoT4pdW0mTKgMtOxk"
}
```

2. Falha na autenticação: 401 - Caso essa resposta aconteça, isso significa que ocorreu alguma falha durante o processo de autenticação da requisição.

2.1 Motivos de falhas: Email ou Senha incorreta.

```
{
  "err": "Credencial inválida"
}
```

**OBS:** O token expira em 1 hora, porém você poderá alterar no arquivo `.env` na variável `TIMETOKEN`
