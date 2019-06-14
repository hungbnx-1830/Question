import React from "react";

import { Grid, Form, Input, Button, TextArea } from "semantic-ui-react";

class AddQuestion extends React.Component {

  render() {
    return (
      <Grid.Column width={12}>
        <Form>
          <Form.Field
            name="title"
            control={Input}
            label="Title"
            placeholder="Title..."
          />

          <Form.Field
            name="body"
            control={TextArea}
            label="Question"
            placeholder="Question..."
          />

          <Form.Field
            name="answer"
            control={TextArea}
            label="Answer"
            placeholder="Answer..."
          />
          <Button color="red">
            Submit !
          </Button>
        </Form>
      </Grid.Column>
    );
  }
}

export default AddQuestion;
