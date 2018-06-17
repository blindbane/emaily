import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
  render () {
    return (
      <div>
        <StripeCheckout
          name='Emaily'
          description='5.00 USD for 5 emaily credits.'
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey='pk_test_AF1Q8SMAIv0DRLGWSDBSsU9e'
        >
          <button className='btn'>Add Credits!</button>
        </StripeCheckout>
      </div>
    )
  }
}

export default connect(null, actions)(Payments)
