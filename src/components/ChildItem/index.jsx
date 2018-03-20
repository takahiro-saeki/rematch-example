import React, { Component } from 'react';
import { Container, DeleteBtn, EditField, TextArea } from './style';

class ChildItem extends Component {
  static defaultProps = {
    title: '',
    id: ''
  }
  
  constructor(props) {
    super(props)
    this.state = {
      isForm: false,
      title: ''
    }
  }
  
  changeDefaultTitle = () => {
    this.setState({title: this.props.title})
  }
  
  componentDidMount() {
    this.changeDefaultTitle()
  }
  
  handleChange = () => {
    this.setState(state => ({isForm: !state.isForm}))
  }
  
  inputChange = e => {
    if(e.keyCode === 13) {
      const { title } = this.state;
      const { editPost, id } = this.props;
      editPost(id, title)
      this.setState(state => ({isForm: !state.isForm}))
      return 
    } 
    this.setState({title: e.target.value})
  }
  
  deleteItem = () => {
    const { deletePost, id, title } = this.props;
    this.props.deletePost(id, title)
  }
  
  render() {
    if(this.state.isForm === true) {
      return (
        <Container>
          <EditField 
            type="text" 
            value={this.state.title} 
            onChange={this.inputChange} 
            onKeyUp={this.inputChange} 
            onDoubleClick={this.handleChange}
          />
        </Container>
      )
    }
    return (
      <Container onDoubleClick={this.handleChange}>
        <TextArea>{this.props.title}</TextArea>
        <DeleteBtn onClick={this.deleteItem}>delete</DeleteBtn>
      </Container>
    )
  }
}

export default ChildItem;