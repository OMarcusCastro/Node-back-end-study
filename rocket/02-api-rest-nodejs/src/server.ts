//trazer a lib
import fastify  from "fastify";

const app = fastify()

// GET, POST, PUT, DELETE

app.get('/hello',()=>{
    return 'Hello World'
})


app.listen({
    port:3333,
}).then(()=>{
    console.log('HTTP Runnig!')
})