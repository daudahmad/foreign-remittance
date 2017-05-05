
import React, { Component } from 'react';
import { Header, Grid, Table, Message } from 'semantic-ui-react'

class AccountBalances extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let nvAccounts = this.props.nvAccounts;
    // let vostroAccounts = nvAccounts.vos
    // console.log(this.props.nvAccounts);
    return (
      <Grid container>
        <Grid.Row columns={1}>
          <Grid.Column textAlign='left'>
            <Header as='h2' dividing>
              {nvAccounts.owner} dashboard view:
            </Header>
          </Grid.Column>
        </Grid.Row>
        <br />
        <Grid.Row columns={2}>
          <Grid.Column textAlign='center'>
            <Header as='h3' dividing>VOSTRO ACCOUNTS (Others money held by {nvAccounts.owner})</Header>
            <Message floating size='big'>
              <Message.Header>
                {nvAccounts.vostro[0].accounts[0].holder} Account (held by {nvAccounts.owner})
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                ${nvAccounts.vostro[0].accounts[0].cashBalance} {nvAccounts.vostro[0].accounts[0].currency} 
              </Header>
            </Message> 
            <Message floating size='big'>
              <Message.Header>
                {nvAccounts.vostro[0].accounts[1].holder} Account (held by {nvAccounts.owner})
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                ${nvAccounts.vostro[0].accounts[1].cashBalance} {nvAccounts.vostro[0].accounts[1].currency} 
              </Header>
            </Message> 
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header as='h3' dividing>NOSTRO ACCOUNTS ({nvAccounts.owner} money held by other banks)</Header>
            <Message floating size='big'>
              <Message.Header>
                {nvAccounts.nostro[0].accounts[0].holder} Account (held by {nvAccounts.nostro[0].owner})
                {/*K2-USA Account (held by K2-AUS)*/}
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                ${nvAccounts.nostro[0].accounts[0].cashBalance} {nvAccounts.nostro[0].accounts[0].currency} 
                {/*$550,000 AUD*/}
              </Header>
            </Message> 
            <Message floating size='big'>
              <Message.Header>
                {nvAccounts.nostro[1].accounts[0].holder} Account (held by {nvAccounts.nostro[1].owner})
                {/*K2-USA Account (held by K2-UK)*/}
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                ${nvAccounts.nostro[1].accounts[0].cashBalance} {nvAccounts.nostro[0].accounts[0].currency} 
                {/*€400,000 EUR*/}
              </Header>
            </Message> 
          </Grid.Column>
        </Grid.Row>
        <br />
      </Grid>
    )
  }
}

class TransactionsRow extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.transaction)
    return (
      <Table.Row>
        <Table.Cell singleLine>{this.props.transaction.refNumber}</Table.Cell>
        <Table.Cell singleLine>{this.props.transaction.opCode}</Table.Cell>
        <Table.Cell singleLine>{this.props.transaction.vDate}</Table.Cell>
        <Table.Cell>{this.props.transaction.currency}</Table.Cell>
        <Table.Cell singleLine>{this.props.transaction.amount}</Table.Cell>
        <Table.Cell singleLine>{this.props.transaction.sender}</Table.Cell>
        <Table.Cell singleLine>{this.props.transaction.receiver}</Table.Cell>
        <Table.Cell>{this.props.transaction.ordcust}</Table.Cell>
        <Table.Cell>{this.props.transaction.benefcust}</Table.Cell>
        <Table.Cell>{this.props.transaction.detcharges}</Table.Cell>
        <Table.Cell>{this.props.transaction.statusMsg}</Table.Cell>
      </Table.Row>
    )
  }
}

class TransactionsTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let allTransactions = this.props.allTransactions;
    var transactionRows = []
    allTransactions.transactions.forEach((transaction) => {
      transactionRows.push(<TransactionsRow transaction={transaction} key={transaction.refNumber} />)
    });
    console.log(transactionRows)

    return (
      <Grid container>
        <Grid.Row columns={1}>
          <Grid.Column textAlign='left'>
            <Header as='h3' dividing>
             MT103 Transaction History 
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>Tx REF#</Table.HeaderCell>
                  <Table.HeaderCell>OP Code</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Currencey</Table.HeaderCell>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>Sender</Table.HeaderCell>
                  <Table.HeaderCell>Receiver</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Ord Cust</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Benef Cust</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Det Charges</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Tx Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {transactionRows}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nvAccounts: null,
      allTransactions: null,
      error: null 
    };
  }

  componentWillMount() {
    this.ws = new WebSocket('ws://localhost:3001')
    this.ws.onopen = e => {
      console.log("WS CONNECTED WITH BACKEND!")
      this.ws.send(JSON.stringify({ type: "get_nvaccounts_details" }))
      this.ws.send(JSON.stringify({ type: "get_transactions" }));
    }
    this.ws.onmessage = e => {
      console.log("WS message received from server")
      try {
        var data = JSON.parse(e.data); 
				console.log(data)
        if (data.msg === 'nvAccounts') {		
          // data.nvAccounts = JSON.parse(data.nvAccounts);
          this.setState({ nvAccounts: JSON.parse(data.nvAccounts) });
        }
        else if (data.msg === 'allTransactions') {
          this.setState({ allTransactions: JSON.parse(data.allTransactions) });
        }
      } catch (error) {
        console.log('ERROR', error);
      }
    }
    this.ws.onerror = e => {
      console.log('ERROR ', e)
      this.setState({ error: 'WebSocket error'})
    }
    this.ws.onclose = e => {
      !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
    }
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return (
      <div>
        {this.state.nvAccounts &&
          <AccountBalances nvAccounts={this.state.nvAccounts} />
        }
        {this.state.allTransactions &&
          <TransactionsTable allTransactions={this.state.allTransactions} />
        }
        {/*<TransactionsTable />*/}
        {/*Show empty table in case of no transactions*/}
      </div>
    )
  }
}

