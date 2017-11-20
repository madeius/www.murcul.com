import styled from 'styled-components'
import React from 'react'
import Modal from 'react-modal'
import ScrollLock from 'react-scrolllock'
import https from 'https'
import querystring from 'querystring'

import Colors from './../../colors'

const modalBodyStyle = {
  content: {
    top: '30%',
    left: '50%',
    width: '335px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: Colors.primaryColor,
    color: 'white',
    fontFamily: 'Hind Madurai, sans-serif'
  }
}

const MainHeading = styled.h1``

const TextInput = styled.input`
  -webkit-appearance: none;
  background: #f6f6f6;
  border: 0.25px solid #acacac;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  font-size: 1.2em;
  padding: 10px;
  color: gray;
  margin-bottom: 10px;
`

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
`

export default class ScheduleDemoModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)

    this.state = {
      nameValue: '',
      emailValue: ''
    }
  }

  handleChangeEmail(e) {
    this.setState({
      emailValue: e.target.value
    })
  }

  handleChangeName(e) {
    this.setState({
      nameValue: e.target.value
    })
  }

  handleSubmit(e) {
    var postData = querystring.stringify({
      email: this.state.emailValue,
      name: this.state.nameValue
    })

    var options = {
      hostname: 'forms.hubspot.com',
      path: '/uploads/form/v2/3957039/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    }

    var request = https.request(options, function(response) {
      console.log('Status: ' + response.statusCode)
      console.log('Headers: ' + JSON.stringify(response.headers))
      response.setEncoding('utf8')
      response.on('data', function(chunk) {
        console.log('Body: ' + chunk)
      })
    })

    request.on('error', function(e) {
      console.log('Problem with request ' + e.message)
    })

    request.write(postData)
    request.end()
    e.preventDefault()
  }

  render() {
    const { isOpen } = this.props
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.props.onClose}
        shouldCloseOnOverlayClick={true}
        closeOnEscape={true}
        style={modalBodyStyle}
      >
        <center>
          <MainHeading>Schedule a demo</MainHeading>
          <h3>Your Challenges. Our Solutions</h3>
        </center>
        <p>Enter your details and we'll be in touch within a working day.</p>
        <form onSubmit={this.handleSubmit}>
          <div>Name:</div>
          <TextInput
            type="text"
            value={this.state.nameValue}
            onChange={this.handleChangeName}
            autoFocus
            required
          />
          <div>Email:</div>
          <TextInput
            type="email"
            value={this.state.emailValue}
            onChange={this.handleChangeEmail}
            required
          />
          <br />
          <SubmitButton type="submit" value="Submit" />
        </form>
        <ScrollLock />
      </Modal>
    )
  }
}
