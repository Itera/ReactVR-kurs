import React from 'react';

let timer;

// A simple textbox overlay that takes over the screen and displays some text.
// The component will get its props via the DOMOverlayModule and use those to render
// the content.
class StickyHeader extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <div className="container">
        <div className="content">
          <div className="score">{score} p</div>
        </div>
      </div>
    );
  }
};

export default StickyHeader;
