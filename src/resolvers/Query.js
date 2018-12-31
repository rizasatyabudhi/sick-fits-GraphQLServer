const { forwardTo } = require('prisma-binding')

const Query = {
  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items()
    return items
  },
  item: forwardTo('db') // alternative if the function has no modification from prisma.graphql
};

module.exports = Query;
