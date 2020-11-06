# Documentação das rotas de usuario

## Criar usuário

Url: `POST: /meeting`

headers:
```
{
	"Content-Type": application/json,
}
```

Body:
```
{
	"date": DATE,
}
```

## Recuperar próximo encontro

Url: `GET: /meeting`

headers:
```
{
	"Content-Type": application/json,
}
```

## Atualizar usuários

Url: `PATCH: /meeting/:id`

headers:
```
{
	"Content-Type": application/json,
}
```

Body:
```
{
	"date": DATE,
}
```

## Deletar usuários

Url: `DELETE: /meeting/:id`

headers:
```
{
	"Content-Type": application/json,
}
```