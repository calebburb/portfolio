import React, { Component } from 'react'
import '../css/App.css'
//comment
class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expandedCard: false
    }
    this.toggleExpandedCard = this.toggleExpandedCard.bind(this)
  }

  toggleExpandedCard () {
    this.setState({ expandedCard: !this.state.expandedCard })
  }

  render () {
    return (
      <div
        className='card'
        className={`${this.state.expandedCard ? 'expanded-card' : 'card'}`}
        id={this.props.id}
        onClick={() => {
          this.toggleExpandedCard()
        }}
      >
        <a href={'#' + this.props.id}>
          <h1>{this.props.title}</h1>
        </a>

      </div>
    )
  }
}

export default Card
