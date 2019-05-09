'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'recipients',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  /**
   * Recipient: Card methods
   */

  createCard: stripeMethod({
    method: 'POST',
    path: '/{id}/cards',
    urlParams: ['id'],
  }),

  listCards: stripeMethod({
    method: 'GET',
    path: '/{id}/cards',
    urlParams: ['id'],
    methodType: 'list',
  }),

  retrieveCard: stripeMethod({
    method: 'GET',
    path: '/{recipientId}/cards/{cardId}',
    urlParams: ['recipientId', 'cardId'],
  }),

  updateCard: stripeMethod({
    method: 'POST',
    path: '/{recipientId}/cards/{cardId}',
    urlParams: ['recipientId', 'cardId'],
  }),

  deleteCard: stripeMethod({
    method: 'DELETE',
    path: '/{recipientId}/cards/{cardId}',
    urlParams: ['recipientId', 'cardId'],
  }),
});
