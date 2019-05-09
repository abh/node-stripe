'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_schedules',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{id}/cancel',
    urlParams: ['id'],
  }),

  release: stripeMethod({
    method: 'POST',
    path: '/{id}/release',
    urlParams: ['id'],
  }),

  listRevisions: stripeMethod({
    method: 'GET',
    path: '/{scheduleId}/revisions',
    urlParams: ['scheduleId'],
    methodType: 'list',
  }),

  retrieveRevision: stripeMethod({
    method: 'GET',
    path: '/{scheduleId}/revisions/{revisionId}',
    urlParams: ['scheduleId', 'revisionId'],
  }),
});
