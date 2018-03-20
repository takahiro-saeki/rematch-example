import React, { Component } from 'react';
import uuid from 'uuid';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { request, postFetch, deleteFetch, editFetch } from '../../api/request';
import ChildItem from '../../components/ChildItem';
import { MainContainer, MainInput } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      param: ''
    }
  }
  
  componentDidMount = async() => {
    const fetch = await request();
    await this.props.add(fetch)
  }
  
  handleChange = e => {
    if(e.keyCode === 13) {
      this.props.post(uuid.v4(), this.state.param)
      this.setState({param: ''})
      return
    } 
    this.setState({param: e.target.value})
  }
  
  keyCheck
  
  render() {
    const { deletePost, editPost } = this.props;
    return (
      <div>
        <Header title="rematch example"/>
        <MainContainer>
          <div>
            <MainInput 
              type="text" 
              value={this.state.param} 
              onChange={this.handleChange} 
              onKeyDown={this.handleChange} 
              placeholder="why do you need ... ?"
            />
          </div>
          {this.props.todo.map(item => (
            <ChildItem 
              editPost={editPost}
              deletePost={deletePost} 
              title={item.title} 
              id={item.id}
              key={item.id}
            />
          ))}
        </MainContainer>
      </div>
    )
  }
}

const mapState = ({ todo }) => ({ todo })

const mapDispatch = ({ todo: { add, post, deletePost, editPost }}) => ({
  add: item => add(item),
  post: async (id, title) => {
    const fetch = await postFetch({id, title});
    return post(fetch)
  },
  deletePost: (id, title) => {
    const fetch = deleteFetch(id)
    return deletePost({id, title})
  },
  editPost: async(id, title) => {
    const fetch = await editFetch({id, title})
    return editPost(fetch)
  }
})

export default connect(mapState, mapDispatch)(App)