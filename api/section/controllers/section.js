'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
function sortBySorting(a, b) {
  return a['sorting'] - b['sorting'];
}


module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.section.search(ctx.query);
    } else {
      entities = await strapi.services.section.find(ctx.query);
    }

    return entities.map(entity => {
      let chapters = entity['chapters']
      chapters.sort(sortBySorting)

      entity['chapters'] = chapters
      return  entity
    }
    )
  },
};

