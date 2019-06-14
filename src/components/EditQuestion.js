import React from "react";
import { Grid, Form, Input, Button, TextArea } from "semantic-ui-react";

class UpdatePost extends React.Component {

  render() {

    return (
      <Grid.Column width={12}>
        <Form>
          <Form.Field
            name="title"
            control={Input}
            label="Update Title"
            placeholder="Update Title..."
          />

          <Form.Field
            name="body"
            control={TextArea}
            label="Update Question"
            placeholder="Update Question..."
          />

          <Form.Field
            name="answer"
            control={TextArea}
            label="Update Answer"
            placeholder="Update Answer..."
          />
          <Button color="blue" >
            Update Question!
          </Button>
        </Form>
      </Grid.Column>
    );
  }
}


export default UpdatePost;
