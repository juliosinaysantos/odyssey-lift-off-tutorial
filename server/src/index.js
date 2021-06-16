import { ApolloServer } from 'apollo-server'

import typeDefs from './schema.js'
import resolvers from './resolvers.js'
import TrackAPI from './datasources/track-api.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    trackAPI: new TrackAPI(),
  })
})

server.listen().then(({url}) => {
  console.log(`🚀 Server is running at ${url}`)
})
