import React from 'react'
import { connect } from 'react-redux'

class MainOverlay extends React.Component {
  render () {
    return (
      <div>
        {this.props.title}
        <p>Choose a background: </p>
        <button onClick={this.props.clickBackgroundChangeButton.bind(this, 'dungeon') }>Dungeon</button>
        <button onClick={this.props.clickBackgroundChangeButton.bind(this, 'jungle') }>Jungle</button>
        <button onClick={this.props.clickBackgroundChangeButton.bind(this, 'cyber') }>Cyber</button>
      </div>
    )
  }
}

const clickBackgroundChangeButtonAction = (selectedBackground) => {
    return {type: 'SET_SELECTED_BACKGROUND', value: selectedBackground}
}

const mapStateToProps = (state) => ({
  title: state.title.value
})

const mapDispatchToProps = (dispatch) => {
  return {
    clickBackgroundChangeButton: selectedBackground => dispatch(clickBackgroundChangeButtonAction(selectedBackground))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainOverlay)
