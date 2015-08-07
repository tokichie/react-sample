/// <reference path="../typings/bundle.d.ts" />

import * as React from 'react';
import {Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';

export interface IModalTriggerState {
    showModal: boolean
}
export interface IModalTriggerProps {}

export class ClModal extends React.Component<IModalTriggerProps, IModalTriggerState> {

    state: IModalTriggerState;

    constructor(props: IModalTriggerProps) {
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close(): void {
        this.setState({showModal: false});
    }

    open(): void {
        this.setState({showModal: true});
    }

    render(): JSX.Element {
        let popover = <Popover title='popover'>very popover. such engagement</Popover>;
        let tooltip = <Tooltip>wow.</Tooltip>;
        return (
            <div>
                <p>Click to get the full Modal experience!</p>

        <Button
            bsStyle='primary'
        bsSize='large'
        onClick={this.open}
>
    Launch demo modal
</Button>

<Modal show={this.state.showModal} onHide={this.close}>
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
    <h4>Text in a modal</h4>
<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

<hr />

<h4>Overflowing text to show scroll behavior</h4>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
</Modal.Body>
<Modal.Footer>
    <Button onClick={this.close}>Close</Button>
</Modal.Footer>
</Modal>
</div>
    );
    }
}
