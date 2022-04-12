import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidMount() {
    const index = localStorage.getItem(LS_KEY);
    if (index !== null) {
      this.setState({
        publicationIndex: Number(index),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }

  changeIndex = value => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const numberOfItems = items.length;
    const currentItem = items[publicationIndex];
    const isFirstItem = publicationIndex === 0;
    const isLastItem = publicationIndex === items.length - 1;

    return (
      <div>
        <Controls
          onForward={() => this.changeIndex(1)}
          onBack={() => this.changeIndex(-1)}
          prevDisabled={isFirstItem}
          nextDisabled={isLastItem}
        />
        <Progress current={publicationIndex + 1} total={numberOfItems} />
        <Publication item={currentItem} />
      </div>
    );
  }
}
