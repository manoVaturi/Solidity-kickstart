import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Table, Button } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods
      .getRequestCount()
      .call();
    const summary = await campaign.methods.getSummary().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    return { address, requests, summary, requestCount };
  }
  renderRow() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.summary[3]}
        />
      );
    });
  }

  render() {
    return (
      <Layout>
        <h3>Request List</h3>

        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button
              primary
              floated="right"
              style={{ marginBottom: '10px' }}
            >
              Add Requests
            </Button>
          </a>
        </Link>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRow()}</Table.Body>
        </Table>
        <div>Found {this.props.requestCount} requests.</div>
      </Layout>
    );
  }
}

export default RequestIndex;
