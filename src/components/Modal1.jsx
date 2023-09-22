import React from 'react';
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Row} from "react-bootstrap";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Popup = ({
                   show,
                   handleClose,
                   item,
                   data,
               }) => {

    const popupData = data;
    console.log(popupData)


    return (

        <StyledModal>
            <Modal
                show={show}
                item={item}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="gph_modal"
            >
                <Modal.Header closeButton>
                    <Container>
                        <Row>
                            <Col md={12}>
                                All Contact
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <SimpleBar className="main_scroll" style={{height: '100vh'}}>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <h1>{popupData}</h1>
                            </Row>
                        </Container>
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledModal>

    )
};


const StyledModal = styled.div`

  .modal-dialog {
    margin: 0;
  }

  h4 {
    letter-spacing: 1.5px;
  }



`;


export default Popup;
