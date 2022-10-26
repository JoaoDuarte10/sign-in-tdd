# Description

<p>This project is basic example the SignIn use case using TDD.</p>

### Start Project

```js
npm install
npm run start:dev
```

### Example Request

```sh
curl --request POST \
  --url 'http://localhost:5000/sign-in' \
  --header 'Content-Type: application/json' \
  --data '{
	"user": "User1",
	"password": "123456"
}'
```

### Running Tests

```js
npm run test
```

### Running Tests With Coverage

```js
npm run test:coverage
```
---

## We invite you to implement more features and usage scenarios