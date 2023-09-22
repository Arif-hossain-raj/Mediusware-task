import React, {useEffect, useState} from 'react';
import Modal1 from "./Modal1";
import Modal2 from "./Modal2.jsx";


const Problem2 = ({
                      Contactdata
                  }) => {

const data = Contactdata;


    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <div className="button1" onClick={handleShow}>
                        <button  className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    </div>
                    <div className="button1" onClick={handleShow2}>
                        <button className="btn btn-lg btn-outline-warning" type="button">US Contacts</button>

                    </div>


                </div>

            </div>

            <Modal1  data={data} show={show} handleClose={handleClose}/>
            <Modal2 show={show2} handleClose={handleClose2}/>

        </div>


    );



};

export default Problem2;