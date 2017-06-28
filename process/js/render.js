// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var _ = require('lodash');
var fs = eRequire('fs');
var savedData = JSON.parse(fs.readFileSync(dataLocation));

var electron = eRequire('electron');
var ipc = electron.ipcRenderer;

var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      savedData: savedData
    }
  },
  componentDidMount: function() {},
  componentWillUnmount: function() {},
  componentDidUpdate: function(prevProps, prevState) {},
  render: function() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Electron Starter</h1>
        </div>
        <p>
          This is a quick start boilerplate for Electron + React.
        </p>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Saved Data</h3>
          </div>
          <div className="panel-body">
            {this.state.savedData.data}
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('main')
);

