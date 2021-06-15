import { ApolloServer, MockList } from 'apollo-server'

import typeDefs from './schema.js'

const mocks = {
  Query: () => ({
    tracksForHome: () => new MockList([6, 9])
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6
  })
}

const server = new ApolloServer({ typeDefs, mocks })

server.listen().then(({url}) => {
  console.log(`🚀 Server is running at ${url}`)
})
