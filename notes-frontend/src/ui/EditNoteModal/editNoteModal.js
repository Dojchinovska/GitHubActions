import React from "react";
import {Badge, Button, Col, Form, Modal} from "react-bootstrap";

const editModal = (props) =>{
    return(
        <Modal show={props.showEdit} onHide={props.handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="titleEdit">
                        <Form.Control type="text" value={props.editNoteTitle} onChange={(e) =>
                        {props.handleChangeTitle(e)}} />
                    </Form.Group>
                    <Form.Group controlId="contentEdit">
                        <Form.Control as="textarea" value={props.editNoteContent} onChange={(e) =>
                        {props.handleChangeContent(e)}} rows="3" />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseEdit}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleEditNote}>
                    Edit Note
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default editModal;
