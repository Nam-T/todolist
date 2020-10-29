import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        <ContentHeader />
        <ContentView />
      </div>
    );
  }

}

class ContentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="content-header">
        <h1>
          <span>Today</span>
          <small>{this.state.date.toDateString()}</small>
        </h1>
      </div>
    );
  }
}

class ContentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    const overdue = ['Test conversion aggregate cho 3 report', 'Tạo todolist cho react base']
    const today = ['Yahoo display ads gender', 'Phân tích axlsx và rubyxl']
    return (
      <div className="content-view">
        <Section title="Overdue" list={overdue}/>
        <Section title={this.state.date.toDateString()} list={today} />
      </div>
    );
  }
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.list = props.list;
  }

  render() {
    const list_item = this.list.map((item) =>
      <ListItem value = {item}/>
    )
    return (
      <div className="section">
        <h2>{this.title}</h2>
        <ul>
          {list_item}
        </ul>
      </div>
    );
  }
}

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      <div>{value}</div>
      <button>
        <div className="checkbox-circle">
          
        </div>
      </button>
    </li>
  );
}

export default Content;
