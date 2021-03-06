import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return null
      case false:
        return <a href='/auth/google'>Login with Google</a>
      default:
        return [
          <li key='1'><Payments /></li>,
          <li key='2' style={{margin: '0px 10px 0px 10px'}}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='3'><a href='/api/logout'>Logout</a></li>
        ]
    }
  }

  render () {
    // console.log('auth:', this.props)
    return (
      <nav>

        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} className='left brand-logo'>Emaily</Link>
          <ul id='nav-mobile' className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header)
