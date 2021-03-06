// check generated/prisma.graphql, find Mutations,
// to see which function is available to be used in "ctx.db.mutation" or "ctx.db.query"
const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
        // title: args.title (other alternative)
        // description: args.description (other alternative)
      }
    }, info)
    return item
  },

  updateItem(parent, args, ctx, info) {
    const updates = { ...args }
    delete updates.id
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    },info
    )
  }
};

module.exports = mutations;
