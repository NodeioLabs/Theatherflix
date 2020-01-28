var React = require("react");
var Nav = require("./Nav/Nav.jsx");
var MovieList = require("./MovieList/MovieList.jsx");
var About = require("./About/About.jsx");
var Upload = require("./Upload/Upload.jsx");
var Editing = require("./Editing/Editing.jsx");
var Editing = require("./credits/Credits.jsx");
//


var Main = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <Nav />
         
        <br />
        <MovieList />
      </div>
    );
  }
});

module.exports = Main;
