'use strict';

/**
 * rundown service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rundown.rundown');
