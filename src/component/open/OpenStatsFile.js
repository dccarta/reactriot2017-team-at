import React from 'react'
import { connect } from 'react-redux'

import * as StatsActions from '../../actions/StatsActions'

class OpenStatsFile extends React.Component {

  constructor(props) {
    super(props)

    this.fileInput = null
  }

  _handleFileInputChange(changeEvent) {
    var file = changeEvent.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.onload = (e) => {
      var contents = e.target.result;
      this.props.loadStatsFileText(JSON.parse(contents));
    };
    reader.readAsText(file)
  }

  render() {
    return (
      <div>
        { this.props.isLoaded ? (
          <span>LOADED!</span>
        ) : (
          <div>
          <button onClick={() => this.fileInput.click()}>
            Open
          </button>
          <button onClick={this.props.loadDefaultData}>
            Use Default data
          </button>
          </div>
        )}
        <input ref={(ref) => this.fileInput = ref}
                onChange={(e) => this._handleFileInputChange(e)}
                type='file'
                hidden />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  loadStatsFileText: (text) => dispatch(StatsActions.loadStatsFileText(text)),
  loadDefaultData: () => fetch('sample-stats-main.json')
            .then(response => response.text())
            .then(text => JSON.parse(text))
            .then(json => dispatch(StatsActions.loadStatsFileText(json)))
})

const mapStateToProps = (state) => ({
  isLoaded: Object.keys(state.stats).length > 0
})

export default connect(mapStateToProps, mapDispatchToProps)(OpenStatsFile)

