
import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'

export default class SubmitTx extends React.Component {

  render() {
    return (
      <Grid container textAlign='left' columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' dividing>
              Submit new MT103 Transaction
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}