import React from 'react'
import { connect } from 'react-redux'

class MainOverlay extends React.Component {
  render () {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.title.value
})

export default connect(mapStateToProps)(MainOverlay)
