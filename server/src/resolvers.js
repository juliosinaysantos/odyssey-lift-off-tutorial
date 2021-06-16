const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // signature: (parent, args, context, info)
    tracksForHome(_, __, { dataSources }) {
      return dataSources.trackAPI.getTracksForHome()
    }
  },
  Track: {
    author(parent, _, { dataSources }) {
      const { authorId } = parent
      return dataSources.trackAPI.getAuthor(authorId)
    }
  }
}

export default resolvers
