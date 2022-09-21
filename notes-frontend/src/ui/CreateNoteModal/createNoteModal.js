import React from "react";
import {Badge, Button, Col, Form, Modal} from "react-bootstrap";

const createModal = (props) =>{
    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Control type="text" placeholder="Enter note title" />
                    </Form.Group>
                    <Form.Group controlId="content">
                        <Form.Control as="textarea" placeholder="Enter note content" rows="3" />
                    </Form.Group>

                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Group controlId="tag">
                                <Form.Control as="select" defaultValue="Choose...">
                                    {props.tags.map(tag=>
                                        (<option id={tag.id} key={tag.id}>{tag.name}</option>))}
                                </Form.Control>
                            </Form.Group>

                        </Col>
                        <Col xs="auto">
                            <Button variant={"primary"} onClick={props.handleSelectTag} style={{marginBottom: '1rem'}}>Add</Button>
                        </Col>

                    </Form.Row>
                    <div>
                        {props.selectedTags.map(selectedTag => (
                            <Badge key={selectedTag.id} id={selectedTag.id} onClick={(e) => {props.handleDeleteSelectTag(e)}} className="mr-2 p-2" variant="primary">#{selectedTag.name}</Badge>
                        ))}
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleCreateNote}>
                    Create Note
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default createModal;
