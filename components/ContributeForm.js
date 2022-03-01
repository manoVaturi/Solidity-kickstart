import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    loading: false,
    errorMessage: '',
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();

      await campaign.methods.contribure().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether'),
      });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ loading: false, value: '' });

    Router.replaceRoute(`/campaigns/${this.props.address}`);
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        error={!!this.state.errorMessage}
      >
        <Form.Field>
          <label>Contribute to this campaign!</label>
          <Input
            value={this.state.value}
            onChange={(event) =>
              this.setState({ value: event.target.value })
            }
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Button loading={this.state.loading} primary>
          Contribute!
        </Button>
        <Message
          error
          header="Oops!"
          content={this.state.errorMessage}
        />
      </Form>
    );
  }
}

export default ContributeForm;
