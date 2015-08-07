/// <reference path="../typings/bundle.d.ts" />

import * as React from 'react';
import {Button, Modal, Nav, NavItem} from 'react-bootstrap';

export interface IClSigninState { showModal: boolean }
export interface IClSigninProps {}

export class ClSignin extends React.Component<IClSigninProps, IClSigninState> {

    state: IClSigninState;

    constructor() {
        super();
        this.state = { showModal: false };
        this.componentDidOpen = this.componentDidOpen.bind(this);
        this.componentDidClose = this.componentDidClose.bind(this);
    }

    componentDidOpen(): void {
        this.setState({ showModal: true });
    }

    componentDidClose(): void {
        this.setState({ showModal: false });
    }

    render(): JSX.Element {
        return (
            <Nav navbar right>
                <NavItem onClick={this.componentDidOpen}>Sign In</NavItem>
                <Modal show={this.state.showModal} onHide={this.componentDidClose}>
                    <Modal.Body>
                        <h2>Please Sign In</h2>
                        <h4>Text in a modal</h4>
                        <Button onClick={this.componentDidClose}
                                className="btn btn-warning btn-block">
                            <i className="fa fa-lock"></i>
                            Sign In
                        </Button>
                    </Modal.Body>
                </Modal>
            </Nav>
        );
    }
}
