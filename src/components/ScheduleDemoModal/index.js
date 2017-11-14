import styled from "styled-components";
import React from "react";
import Modal from "react-modal";
import ScrollLock from "react-scrolllock";

import Colors from "./../../colors";

const modalBodyStyle = {
  content: {
    top: "30%",
    left: "50%",
    width: "335px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: Colors.primaryColor,
    color: "white"
  }
};

const MainHeading = styled.h1``;

const TextInput = styled.input`
  -webkit-appearance: none;
  background: #f6f6f6;
  border: 0.25px solid #acacac;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  height: 30px;
  font-size: 1.2em;
  padding-left: 10px;
  color: gray;
  margin-bottom: 10px;
`;

const SubmitButton = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: ${Colors.secondaryColor};
  height: 47px;
  border-radius: 8px;
  border-width: 0px;
  font-size: 1.2em;
  color: white;
  margin-top: 10px;
`;

export default class ScheduleDemoModal extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.props.closeModal}
        shouldCloseOnOverlayClick={true}
        closeOnEscape={true}
        style={modalBodyStyle}
      >
        <center>
          <MainHeading>Schedule a demo</MainHeading>
          <h3>Your Challenges. Our Solutions</h3>
        </center>
        <p>Enter your details and we'll be in touch within a working day.</p>
        <form>
          <div>Name:</div>
          <TextInput type="text" autoFocus required />
          <div>Email:</div>
          <TextInput type="email" required />
          <br />
          <SubmitButton type="submit" value="Submit" />
        </form>
        <ScrollLock />
      </Modal>
    );
  }
}
