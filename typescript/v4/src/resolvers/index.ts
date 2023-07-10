const resolvers = {
  Query: {
    user: async (_: any) => ({ id: '1', name: 'user' }),
  },
}

export default resolvers
