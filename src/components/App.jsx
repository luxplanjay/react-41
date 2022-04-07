import { GlobalStyle } from './GlobalStyle';
import { AppBar } from './AppBar/AppBar';
import { Component } from 'react';

const user = {
  username: 'Дядя Ваня',
  isOnline: true,
  points: { total: 700, required: 200 },
};

export class App extends Component {
  state = {
    isAppbarOpen: false,
  };

  openAppBar = () => this.setState({ isAppbarOpen: true });
  closeAppBar = () => this.setState({ isAppbarOpen: false });

  render() {
    const { isAppbarOpen } = this.state;
    return (
      <div>
        <GlobalStyle />
        {!isAppbarOpen && (
          <button type="button" onClick={this.openAppBar}>
            Открыть
          </button>
        )}

        {isAppbarOpen && <AppBar user={user} onClose={this.closeAppBar} />}
      </div>
    );
  }
}
