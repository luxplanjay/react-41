import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Reader } from './Reader';
import items from '../publications.json';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Reader items={items} />
      </>
    );
  }
}
