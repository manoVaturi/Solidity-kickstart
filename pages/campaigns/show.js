import React, { Component } from 'react';
import Layout from '../../components/Layout';
import campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const instance = campaign(props.query.address);
    const summary = await instance.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumCotribution: summary[0],
      balance: summary[1],
      requestsNum: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumCotribution,
      requestsNum,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        description:
          'The manager who created this campaign and can create reqeusts to withdraw money',
        meta: 'Address of The Manager',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumCotribution,
        description:
          'You must to contribute a least this much of wei to become an approver.',
        meta: 'Minimum Cotribution',
        style: { overflowWrap: 'break-word' },
      },

      {
        header: requestsNum,
        description:
          'A request tries to withdraw money from the Campaign. Request must be approved by approvers ',
        meta: 'Number of Requests',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: approversCount,
        description:
          'Number of peaple who have already contributed to campaign',
        meta: 'Number of Approvers',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        description:
          'The balance is how much money this campaig has left to spend',
        meta: 'Campaign Balance (ether)',
        style: { overflowWrap: 'break-word' },
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
            <Button primary style={{ marginTop: '20px' }}>
              View Requests
            </Button>
          </a>
        </Link>
      </Layout>
    );
  }
}
export default CampaignShow;
