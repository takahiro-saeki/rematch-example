import React, { Component } from 'react';
import uuid from 'uuid';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { request, postFetch } from '../../api/request';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount = async() => {
    const fetch = await request();
    await this.props.add(fetch)
  }
  
  render() {
    return (
      <div>
        <Header title="rematch example"/>
        <div onClick={() => console.log(this.props.todo)}>check</div>
        {this.props.todo.map(item => <div key={item.id}>{item.title}</div>)}
        <div onClick={this.props.post}>post!</div>
      </div>
    )
  }
}

const mapState = ({ todo }) => ({ todo })

const mapDispatch = ({ todo: { add, post }}) => ({
  add: item => add(item),
  post: async () => {
    const fetch = await postFetch();
    return post(fetch)
  }
})

export default connect(mapState, mapDispatch)(App)