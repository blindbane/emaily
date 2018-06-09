import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return null
      case false:
        return <a href='/auth/google'>Login with Google</a>
      default:
        return <a href='/api/logout'>Logout</a>
    }
  }

  render () {
    console.log('auth:', this.props)
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} clLinkssName='left brand-logo'>Emaily</Link>
          <ul id='nav-mobile' className='right'>
            <li>{this.renderContent()}</li>
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
