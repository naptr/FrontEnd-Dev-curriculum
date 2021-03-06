import React from 'react';

class DrillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 'property value'
    }
  }

  method() {
    console.log(this.state.property);
  }

  render() {
    return (
      <div>
        <h1>Ashiap</h1>
      </div>
    )
  }
}

export default DrillComponent;
