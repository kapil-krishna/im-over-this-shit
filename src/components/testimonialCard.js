import React, { useState } from "react";
import Img from "gatsby-image";
import Modal from "react-modal";
import "./testimonialModal.scss";

export default function TestimonialCard(props) {

    const [modalOpen, setModalOpen] = useState(false);

    function handleModalOpen() {
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    return (
        <div>
            
            <div className="testimonialCard" onClick={handleModalOpen}>
                <Img fluid={props.fluid}/>
                <div className="testimonialTitle">
                    <h2>{props.title}</h2>
                </div>
                <div
                    className="testimonialText"
                    dangerouslySetInnerHTML={{__html: props.excerpt}}>
                </div>
            </div>
                
            <Modal
                isOpen={modalOpen}
                onRequestClose={handleModalClose}
                className="testimonialModal">

                <div className="modalTestTitle">
                    <h2>{props.title}</h2>
                </div>
                <Img 
                    fluid={props.fluid}
                    className="modalTestImage"
                />
                <div
                    className="modalTestText"
                    dangerouslySetInnerHTML={{__html: props.html}}>
                </div>
                <button 
                    onClick={handleModalClose}>
                    Close Modal
                </button>
            </Modal>

        </div>
    )
}
