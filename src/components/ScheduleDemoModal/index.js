import styled from 'styled-components'
import React from 'react'
import Modal from 'react-modal'

export default class ScheduleDemoModal extends React.Component {
  render() {
    const { isOpen } = this.props
    return (
      <Modal isOpen={isOpen}>
        <h1>Basic Modal Example</h1>
      </Modal>
    )
  }
}
