import React from "react";
import {Form, InputGroup,Col, FormControl, Button} from "react-bootstrap";
import ExistingTags from "./ExistingTags/existingTags";

const tags = (props) => {

    return(
        <div className="manage-tags-page col-lg-6 col-md-8">
            <Form onSubmit={(e)=>
            {props.handleCreate(e.target.name.value)}}>

                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Tag
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            name="name"
                            placeholder="Create new tag"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2 btn-light">
                            Create
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            <ExistingTags handleEdit={props.handleEdit} handleDelete={props.handleDelete} tags={props.tags}/>
        </div>

    );
}


export default tags;
