'use strict';

/**
 * current-project router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::current-project.current-project');
