// Code ThemedDecoration Component Here
import React from 'react'

class ThemedParty extends React.Component {

  render () {
    const decorationChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
        {decorationChildren}
      </div>
    )
  }
}

export default ThemedParty
