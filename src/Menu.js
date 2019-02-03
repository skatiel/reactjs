import React from 'react';

export default class Menu extends React.Component {
  render () {
      const items = this.props.items.map ((items, index) => {
      return <li key={index}><a href={items.href}>{items.title}</a></li>
    });
    return <div>
        <h1>{this.props.titleMenu}</h1>
        {items}
    </div>;
  }
}