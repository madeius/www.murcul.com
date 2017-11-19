import React, { Component } from "react";
import Button from '../Button'
import Modal from './index'

export default class ScheduleDemoButton extends Component {
    state = {
        isModalOpen: false
    }
    onOpenModal = () => {
        this.setState({ isModalOpen: true })
    }
    onCloseModal = () => {
        this.setState({ isModalOpen: false })
    }
    render () {
        return (
            <span>
                <Button onClick={this.onOpenModal}>Schedule Demo</Button>
                <Modal isOpen={this.state.isModalOpen} onClose={this.onCloseModal} />
            </span>
        )
    }
}