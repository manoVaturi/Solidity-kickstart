import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods
      .approveRequest(this.props.id)
      .send({ from: accounts[0] });
  };
  onFinalize = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods
      .finalizeRequest(this.props.id)
      .send({ from: accounts[0] });
  };

  render() {
    const { id, request, approversCount } = this.props;
    const readyToFinalize =
      request.approvalsCount > approversCount / 2;

    return (
      <Table.Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{request.description}</Table.Cell>
        <Table.Cell>
          {web3.utils.fromWei(request.value, 'ether')}
        </Table.Cell>
        <Table.Cell>{request.recipient}</Table.Cell>
        <Table.Cell>{`${request.approvalsCount}/${approversCount}`}</Table.Cell>
        <Table.Cell>
          {request.complete ? null : (
            <Button color="green" onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Table.Cell>
        <Table.Cell>
          {request.complete ? null : (
            <Button color="red" onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default RequestRow;
