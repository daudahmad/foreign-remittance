
import React, { Component } from 'react';
import { Header, Grid, Table, Message } from 'semantic-ui-react'

class AccountBalances extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid.Row columns={1}>
          <Grid.Column textAlign='left'>
            <Header as='h2' dividing>
              Dashboard
            </Header>
          </Grid.Column>
        </Grid.Row>
        <br />
        <Grid.Row columns={2}>
          <Grid.Column textAlign='center'>
            <Header as='h3' dividing>VOSTRO ACCOUNTS</Header>
            <Message floating size='big'>
              <Message.Header>
                K2-UK Account (held by K2-USA)
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                $500,000 USD
              </Header>
            </Message> 
            <Message floating size='big'>
              <Message.Header>
                K2-AUS Account (held by K2-USA)
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                $450,000 USD
              </Header>
            </Message> 
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header as='h3' dividing>NOSTRO ACCOUNTS</Header>
            <Message floating size='big'>
              <Message.Header>
                K2-USA Account (held by K2-AUS)
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                $550,000 AUD
              </Header>
            </Message> 
            <Message floating size='big'>
              <Message.Header>
                K2-USA Account (held by K2-UK)
              </Message.Header>
              <br />
              <Header as='h1' color='grey'>
                €400,000 EUR
              </Header>
            </Message> 
          </Grid.Column>
        </Grid.Row>
        <br />
      </Grid>
    )
  }
}

class TransactionsTable extends React.Component {

  render() {
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
            <Table celled padded container>
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
                <Table.Row>
                  <Table.Cell singleLine>NWVFZ3NY2HB4YJ</Table.Cell>
                  <Table.Cell>CRED</Table.Cell>
                  <Table.Cell singleLine>2017-04-29</Table.Cell>
                  <Table.Cell>USD</Table.Cell>
                  <Table.Cell singleLine>$260,000</Table.Cell>
                  <Table.Cell singleLine>K2-USA</Table.Cell>
                  <Table.Cell singleLine>K2-UK</Table.Cell>
                  <Table.Cell>Alice</Table.Cell>
                  <Table.Cell>Bob</Table.Cell>
                  <Table.Cell>OUR</Table.Cell>
                  <Table.Cell>Transaction Completed</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <AccountBalances />
        <TransactionsTable />
      </div>
    )
  }
}

