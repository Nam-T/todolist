import React from 'react';
import Content from './content'

const Header = () => (
  <div className="header"></div>
);

const Body = () => (
  <div className="body">
    <Navigate />
    <Content />
  </div>
);

const Navigate = () => (
  <div className= "navigate"></div>
)

class Homepage extends React.Component {
  render() {
    return (
      <div className='Homepage'>
        <Header />
        <Body />
      </div>
    );
  }

}

export default Homepage;
