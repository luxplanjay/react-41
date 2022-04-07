import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';
// import { LoginForm } from './LoginForm/LoginForm';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <LoginForm /> */}
        <ProductReviewForm />
      </>
    );
  }
}
