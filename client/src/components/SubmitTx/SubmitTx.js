
import React, { Component } from 'react';
import { Header, Grid, Segment, Button, Checkbox, Form } from 'semantic-ui-react'

export default class SubmitTx extends React.Component {

  render() {
    return (
      <Grid container textAlign='left'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' dividing>
              Submit MT103 Transaction
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column width={1} />
          <Grid.Column width={6} >
            <Segment size='large' raised>
            <Form>
              <Form.Field>
                <input placeholder='Tx Ref Number...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Operation Code...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Date...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Currency...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Amount...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Sender...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Receiver...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Ordering Customer...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Beneficiary Customer...' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Details of Charges...' />
              </Form.Field>
              {/*<Button type='submit'>Generate Tx</Button>*/}
              <Button type='submit'>Submit Tx</Button>
            </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}  />
        </Grid.Row>
      </Grid>
    )
  }
}