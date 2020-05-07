'use strict';
const { getActive } = require('../../utlis/controller');
const {  removeCURDDates,removeFromAll, removeExtraOrganization } = require('../../utlis/removeattributes')
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    published: async ctx => {
        return  await getActive(ctx,'experience',[removeFromAll, removeCURDDates, removeExtraOrganization])
    }
};
