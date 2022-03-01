import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Form, Button, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

class RequestForm extends Component {
  state = {
    description: '',
    value: '',
    Recipient: '',
    errorMessage: '',
    loading: false,
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(
          description,
          web3.utils.toWei(value, 'ether'),
          recipient
        )
        .send({
          from: accounts[0],
        });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form
          onSubmit={this.onSubmit}
          error={!!this.state.errorMessage}
        >
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="Description of Request"
              onChange={(event) => {
                this.setState({
                  description: event.target.value,
                  errorMessage: '',
                });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Amount of Ether</label>
            <input
              placeholder="Ether"
              onChange={(event) => {
                this.setState({
                  value: event.target.value,
                  errorMessage: '',
                });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <input
              placeholder="Address of Recipient"
              onChange={(event) => {
                this.setState({
                  recipient: event.target.value,
                  errorMessage: '',
                });
              }}
            />
          </Form.Field>
          <Button primary loading={this.state.loading}>
            Create
          </Button>
          <Message
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
        </Form>
      </Layout>
    );
  }
}

export default RequestForm;
