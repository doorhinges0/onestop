import React, { Component } from 'react'
import Checkbox from '../common/input/Checkbox'
import { titleCaseKeyword } from "../utils/keywordUtils"

const styleContainer = {
  display: 'flex',
}

const styleCheckbox = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '0.616em',
}

const styleTerm = {
  width: '100%',
  color: '#FFF'
}

export default class Facet extends Component {
  render() {
    return (
        <div style={{...styleContainer, ...this.props.style}}>
          <div style={styleCheckbox}>
            <Checkbox
                checked={this.props.selected}
                value={{term: this.props.term, category: this.props.category}}
                onChange={this.props.onChange}
            />
          </div>
          <div style={styleTerm}>
            {titleCaseKeyword(this.props.term)} ({this.props.count})
          </div>
        </div>
    )
  }
}
