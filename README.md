# frontend-with-make

example for building frontend with Make


## develop

```
% make watch
```

for

* running local server with [http-server](https://github.com/indexzero/http-server), which host `./` as document root (default port: 8080)
* running RESTful API server with [json-server](https://github.com/typicode/json-server), which store data to `db.json` (default port: 3000)


you can run each task above separately with

* `make run-dev-server`
* `make run-api-mock-server`

for more details, see `Makefile`


## build

```
% make build
```

output `bundle.js` / `bundle.css` into `dist` directory
