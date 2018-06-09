import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
  render () {
    return (
      <div>
        <StripeCheckout
          name='Emaily'
          description='5.00 USD for 5 emaily credits.'
          amount={500}
          token={token => console.log('token', token)}
          stripeKey={process.env.REACT_APP_PUB_KEY}
        >
          <button className='btn'>Add Credits!</button>
        </StripeCheckout>
      </div>
    )
  }
}

export default Payments
