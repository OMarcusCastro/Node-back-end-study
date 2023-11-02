"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//trazer a lib
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
// GET, POST, PUT, DELETE
app.get('/hello', function () {
    return 'Hello World';
});
app.listen({
    port: 3333,
}).then(function () {
    console.log('HTTP Runnig!');
});
