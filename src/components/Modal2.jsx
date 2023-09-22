import React from 'react';
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Row} from "react-bootstrap";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import reactHtmlParser from "react-html-parser";

const Popup = ({
                   show,
                   handleClose,
                   no_img,
                   item,
                   title,
                   description,
                   data,

               }) => {

    const popupData = data;


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
                                <h1>Modal02</h1>
                                {
                                    console.log('arif')

                                }
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
