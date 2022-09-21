import React, {Component, useState} from "react";
import {Button, Col, Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";

class Tag extends Component{

    state = {
        inputValue: ''
    }
    componentDidMount() {
        this.setState({inputValue: this.props.tag.name})
    }

    handleChange = (event) =>{
        this.setState({inputValue: event.target.value})
    }

    render() {
        return(
            <div>
                <Form.Row className="align-items-center">
                    <Col xs="auto">

                        <Form.Control
                            className="mb-2"
                            value={this.state.inputValue}
                            onChange={(e) =>
                            {this.handleChange(e)}}/>
                    </Col>
                    <Col xs="auto">
                        <Button type="button" className="mb-2 btn-light" onClick={()=>{this.props.handleEdit(this.props.tag.id, this.state.inputValue)}}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button type="button" className="mb-2 btn-light" onClick={()=>{this.props.handleDelete(this.props.tag.id)}}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </Col>

                </Form.Row>
            </div>
        );
    }
}

export default Tag;
