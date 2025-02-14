import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotted: false,
      className: null,
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    if (this.state.spotted === false) {
      this.spotted=true;
      if (this.props.type === "litter") {
        this.className="spotted-litter"
        this.props.score();
      } else {
        this.className="spotted-nature"
      }
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    return (
      <div className={`game-item ${this.className}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.onItemClicked}></img>
      </div>
    );
  }
}

export default GameItem;

              // <div className={`main-class ${this.state.isSelected ? 'selected':''}`}></div>

