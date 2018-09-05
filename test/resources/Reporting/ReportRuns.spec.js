'use strict';

var stripe = require('../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Reporting', function () {
  describe('ReportRuns Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.reporting.reportRuns.retrieve('frr_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_runs/frr_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.reporting.reportRuns.create({
          parameters: {
            connected_account: 'acct_123',
          },
          report_type: 'activity.summary.1',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/reporting/report_runs',
          headers: {},
          data: {
            parameters: {
              connected_account: 'acct_123',
            },
            report_type: 'activity.summary.1',
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.reporting.reportRuns.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_runs',
          headers: {},
          data: {},
        });
      });
    });
  });
});