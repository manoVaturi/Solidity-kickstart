import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods
      .getDeployedCampaigns()
      .call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((campaign) => {
      return {
        header: campaign,
        description: (
          <Link route={`/campaigns/${campaign}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaings</h3>

          <Link route="/campaigns/new">
            <a>
              <Button floated="right" primary>
                <Icon name="add circle" />
                Create Campaign
              </Button>
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
