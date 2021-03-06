import React from 'react';

export function Navbar() {
  return (
    <div>
      <h1>Ini Navigation Bar</h1>
    </div>
  );
}

export class MainContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Ini Main Content</h2>
      </div>
    );
  }
}


export var paragraph = <p>Ini Paragraph</p>;
