import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import store from "../store";
import { UPDATE_QUESTION, DELETE_QUESTION } from "../actions/index";

import {Grid, Card, Header, Divider, Button, Modal, Icon} from "semantic-ui-react";


class QuestionList extends React.Component {
  state = {};

  handleUpdate = (title, body, answer, id) => {
    store.dispatch({
      type: UPDATE_QUESTION,
      payload: { title: title, body: body, answer:answer, id: id }
    });
  };

  handleDelete = id => {
    store.dispatch({ type: DELETE_QUESTION, payload: id });
  };

  render() {
    let listPosts = this.props.posts.filter(post => {
      return post.title.indexOf(this.props.search.toLowerCase()) !== -1;
    });
    return (
      <Grid.Column width={12}>
        {listPosts.map(e => (
          <Card fluid key={e.id}>
            <Card.Content>
              <Header color="red">{e.title}</Header>
              <Divider horizontal>Question</Divider>
              <Card.Description>{e.body}</Card.Description>
              <Divider hidden/>
              <Divider horizontal>Answer</Divider>
              <Card.Description>{e.answer}</Card.Description>
              <Divider hidden/>
              <Modal trigger={<Button color='red' icon='trash' content='Delete'/>} closeIcon basic={false} size='small'>
                <Header icon='archive' content='Bạn có muốn xoá câu hỏi này không !'/>
                <Modal.Actions>
                  <Button color='green'
                          inverted
                          onClick={this.handleDelete.bind(this, e.id)}
                  >
                    <Icon name='checkmark'/> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
              <Link to="/edit">
                <Button
                  color="blue"
                  inverted
                  onClick={this.handleUpdate.bind(this, e.title, e.body, e.answer, e.id)}
                >
                  Edit
                </Button>
              </Link>
            </Card.Content>
          </Card>
        ))}
      </Grid.Column>

    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    search: state.search,
    post: state.post
  };
}


export default connect(mapStateToProps)(QuestionList);
