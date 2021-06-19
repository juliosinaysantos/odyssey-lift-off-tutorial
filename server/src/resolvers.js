const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // signature: (parent, args, context, info)
    tracksForHome(_, __, { dataSources }) {
      return dataSources.trackAPI.getTracksForHome()
    },
    // get a single track by ID, for the track page
    track(_, { id }, { dataSources }) {
      return dataSources.trackAPI.getTrack(id)
    },
  },
  Track: {
    author(parent, _, { dataSources }) {
      const { authorId } = parent
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules({ id }, _, { dataSources }) {
      return dataSources.trackAPI.getTrackModules(id)
    },
  }
}

export default resolvers
