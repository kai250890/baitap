import React, {Component} from "react";
import {Button,Modal,Form} from 'react-bootstrap';

interface State {
    setShow: boolean,
    id?: number,
    name?: string,
    price?: number,
    desc?: string
}
class FormComponent extends Component<any, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            setShow: false
        };
    }

    handleClose = () => {
        this.setState({
            setShow: false
        });
    }
    handleShow = () => {
        this.setState({
            setShow: true
        });
    }

    onChange = (event: {target: {name: any, value: any}}) =>  {
        this.setState({[event.target.name]: event.target.value} as Pick<State, keyof State>)
    }
    render() {
        return(
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Tạo mới
                </Button>

                <Modal show={this.state.setShow} onHide={this.handleClose}>
                    <Form>
                        <Modal.Header>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Tên</Form.Label>
                                <Form.Control onChange={this.onChange} name="name" type="text" placeholder="Tên" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Giá</Form.Label>
                                <Form.Control onChange={this.onChange} name="price" type="number" placeholder="Giá" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDesc">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control onChange={this.onChange} name="desc" as="textarea" rows={3} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default FormComponent;
