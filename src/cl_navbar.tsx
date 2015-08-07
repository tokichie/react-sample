/// <reference path="../typings/bundle.d.ts" />

import * as React from 'react';
import {Navbar, CollapsibleNav, Nav, NavItem} from 'react-bootstrap';
import {ClSignin} from './cl_signin';

export interface IClNavbarState {

}
export interface IClNavbarProps {}

export class ClNavbar extends React.Component<IClNavbarProps, IClNavbarState> {

    state: IClNavbarState = {}

    constructor() {
        super();
    }

    render() {
       return (
           <Navbar brand='React-Bootstrap' toggleNavKey={0}>
            <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                <ClSignin />
            </CollapsibleNav>
           </Navbar>
       );
    }
}
