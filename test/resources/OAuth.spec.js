'use strict';

var stripe = require('../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('OAuth', function() {
  describe('authorize', function() {
    describe('when a default client_id is not set', function() {
      beforeEach(function() {
        stripe.setClientId('');
      });

      describe('with an explicitly provided client_id', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl({client_id: '123abc'});

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?client_id=123abc&response_type=code&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });
      })
    });

    describe('when a default client_id is set', function() {
      beforeEach(function() {
        stripe.setClientId('default_client_id');
      });

      describe('when required parameters are not provided', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl();

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=default_client_id&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });

        it('Generates the correct URL with state provided', function() {
          var url = stripe.oAuth.authorizeUrl({state: 'some_state'});

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?state=some_state&response_type=code&client_id=default_client_id&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });
      });

      describe('for non-Express account', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
            }
          );

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=123abc&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });

        it('Generates the correct URL with state provided', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
            }
          );

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=123abc&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });
      });

      describe('for Express account', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
            },
            {
              express: true,
            }
          );

          var expectedUrl = 'https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=123abc&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });

        it('Generates the correct URL with state provided', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
              state: 'some_state',
            },
            {
              express: true,
            }
          );

          var expectedUrl = 'https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=123abc&scope=read_write&state=some_state';

          expect(url).to.equal(expectedUrl);
        });
      });
    });
  });

  describe('token', function() {
    it('Sends the correct request', function() {
      stripe.oAuth.token({
        code: '123abc',
        grant_type: 'authorization_code'
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        host: 'connect.stripe.com',
        url: '/oauth/token',
        headers: {},
        data: {
          code: '123abc',
          grant_type: 'authorization_code'
        },
      });
    });
  });

  describe('deauthorize', function() {
    beforeEach(function() {
      stripe.setClientId('default_client_id');
    });

    it('Sends the correct request without explicit client_id', function() {
      stripe.oAuth.deauthorize({
        stripe_user_id: 'some_user_id',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        host: 'connect.stripe.com',
        url: '/oauth/deauthorize',
        headers: {},
        data: {
          client_id: stripe.getClientId(),
          stripe_user_id: 'some_user_id'
        },
      });
    });

    it('Sends the correct request with explicit client_id', function() {
      stripe.oAuth.deauthorize({
        stripe_user_id: 'some_user_id',
        client_id: '123abc',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        host: 'connect.stripe.com',
        url: '/oauth/deauthorize',
        headers: {},
        data: {
          client_id: '123abc',
          stripe_user_id: 'some_user_id'
        },
      });
    });
  });
});
