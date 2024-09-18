'use strict';

/**
 * audience-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audience-member.audience-member');
