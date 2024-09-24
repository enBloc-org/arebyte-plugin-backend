'use strict';

/**
 * current-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-project.current-project');
