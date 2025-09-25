import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { expressMiddleware } from '@apollo/server/express4'


const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
})

app.use(express.json())
app.use('/graphql',expressMiddleware(server))



app.listen(2404, () => {
    console.log('Example app listening on port 3000!')
})





//apollo server setup
