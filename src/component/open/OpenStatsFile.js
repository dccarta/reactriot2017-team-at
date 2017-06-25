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
          <button onClick={() => this.fileInput.click()}>
            Open
          </button>
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
  loadStatsFileText: (text) => dispatch(StatsActions.loadStatsFileText(text))
})

const mapStateToProps = (state) => ({
  isLoaded: Object.keys(state.stats).length > 0
})

export default connect(mapStateToProps, mapDispatchToProps)(OpenStatsFile)
