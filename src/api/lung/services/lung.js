'use strict';

/**
 * lung service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lung.lung');
