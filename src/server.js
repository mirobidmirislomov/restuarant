const express = require('express')
const app = express()
const PORT = process.env.PORT || 7070
const cors = require('cors')

app.use(cors())
app.use(express.json())

const { ApolloServer } = require('apollo-server-express')
const modules = require('./modules')

const server = new ApolloServer({
    modules
})

server.applyMiddleware({ app })

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}` + server.graphqlPath);
})