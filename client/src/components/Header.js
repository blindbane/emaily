import React, { Component } from 'react'
import {connect} from 'react-redux'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return null
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>
      default:
        return <a href='/api/logout'>Logout</a>
    }
  }
  render () {
    console.log('auth:', this.props)
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='left brand-logo'>Emaily</a>
          <ul id='nav-mobile' className='right'>
            <li><a>{this.renderContent()}</a></li>
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
