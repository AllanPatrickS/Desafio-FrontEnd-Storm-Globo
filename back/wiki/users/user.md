# Documentação das rotas de usuario

## Criar usuário

Url: `POST: /user`

headers:
```
{
	"Content-Type": application/json,
}
```

Body:
```
{
	"username": String,
	"email": String,
	"rules": Number,
	"status": Boolean
}
```

## Recuperar ultima atualização de usuário

Url: `GET: /user/lastupdate`

headers:
```
{
	"Content-Type": application/json,
}
```

## Recuperar usuários

Url: `GET: ['/user/:page', '/user/:page/:query']`

headers:
```
{
	"Content-Type": application/json,
}
```

## Atualizar usuários

Url: `PATCH: /user/:id`

headers:
```
{
	"Content-Type": application/json,
}
```

Body:
```
{
	"username": String,
	"email": String,
	"rules": Number,
	"status": Boolean
}
```

## Deletar usuários

Url: `DELETE: /user/:id`

headers:
```
{
	"Content-Type": application/json,
}
```