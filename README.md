# [URL Deploy BackEnd](https://api-copy-write.herokuapp.com/)

## Acerca de 
Esta api es para una prueba tecnica, en donde se pide un unico endpoint el cual recive un texto y lo devuleve de forma inversa y dice si es o no un [palindromo](https://es.wikipedia.org/wiki/Pal%C3%ADndromo).

## Para empezar
```bash
npm install
```
Se instalaran algunas librerias para empezar: [express](https://expressjs.com/es/), [cors](https://www.npmjs.com/package/cors), [dotenv](https://www.npmjs.com/package/dotenv).
Si quisieras desarrollar hay algunas adicionales como: [nodemon](https://www.npmjs.com/package/nodemon), [chai](https://www.chaijs.com/), [mocha](https://mochajs.org/), [supertest](https://www.npmjs.com/package/supertest).

Para correr el modo dev tienes que ejecutar (cuando haces cambios en los archivos automaticamente se ven los cambios reflejados):
```bash
npm run dev
```

Para los test:
```bash
npm test
```

## URL deploy https://api-copy-write.herokuapp.com/
Remplazar http://localhost:3001/ por https://api-copy-write.herokuapp.com/

## Endpoints
GET /iecho

```bash
curl -v -X GET "http://localhost:3001/iecho" -H "accept:application/json"
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1:3001...
* Connected to localhost (::1) port 3001 (#0)
> GET /iecho HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.74.0
> accept:application/json
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
< Access-Control-Allow-Methods: GET
< Content-Type: application/json; charset=utf-8
< Content-Length: 19
< ETag: W/"13-/ig203f/evdylbGpofCLDctHxvE"
< Date: Tue, 26 Jul 2022 19:17:26 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"error":"no text"}
```
GET /iecho?text=
```bash
$ curl -v -X GET "http://localhost:3001/iecho?text=" -H "accept:application/json"
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1:3001...
* Connected to localhost (::1) port 3001 (#0)
> GET /iecho?text= HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.74.0
> accept:application/json
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
< Access-Control-Allow-Methods: GET
< Content-Type: application/json; charset=utf-8
< Content-Length: 19
< ETag: W/"13-/ig203f/evdylbGpofCLDctHxvE"
< Date: Tue, 26 Jul 2022 19:20:13 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"error":"no text"}
```

GET /iecho?text=ana
```bash
$ curl -v -X GET "http://localhost:3001/iecho?text=ana" -H "accept:application/json"
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1:3001...
* Connected to localhost (::1) port 3001 (#0)
> GET /iecho?text=ana HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.74.0
> accept:application/json
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
< Access-Control-Allow-Methods: GET
< Content-Type: application/json; charset=utf-8
< Content-Length: 32
< ETag: W/"20-IrCw6Gx0CnaDGgUo/IWk+5d4H4k"
< Date: Tue, 26 Jul 2022 19:21:34 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"text":"ana","palindrome":true}
```

GET /iecho?text=rojo
```bash
$ curl -v -X GET "http://localhost:3001/iecho?text=rojo" -H "accept:application/json"
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1:3001...
* Connected to localhost (::1) port 3001 (#0)
> GET /iecho?text=rojo HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.74.0
> accept:application/json
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
< Access-Control-Allow-Methods: GET
< Content-Type: application/json; charset=utf-8
< Content-Length: 34
< ETag: W/"22-to1BtSA6o8vpyxEnx9U1rb+9kI8"
< Date: Tue, 26 Jul 2022 19:23:30 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"text":"ojor","palindrome":false}
```

Si se hace una peticion a un endpoint que no existe entonces
```bash
$ curl -v -X GET "http://localhost:3001/" -H "accept:application/json"
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1:3001...
* Connected to localhost (::1) port 3001 (#0)
> GET / HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.74.0
> accept:application/json
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
< Access-Control-Allow-Methods: GET
< Content-Type: application/json; charset=utf-8
< Content-Length: 28
< ETag: W/"1c-8PNhi5C+sxyTVpD91tXXmdPWMYM"
< Date: Tue, 26 Jul 2022 19:24:16 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"error":"unknown endpoint"}
```