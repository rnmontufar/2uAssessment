import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppSidebarToggler } from '@coreui/react';

const propTypes = {
    children: PropTypes.node,
};
const defaultProps = {};

class DefaultHeader extends Component {
    render() {
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppSidebarToggler className="d-md-down-none" display="lg" />
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav direction="down">
                        <DropdownToggle nav>
                            <img src={'../../assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/*<AppAsideToggler className="d-lg-none" mobile />*/}
            </React.Fragment>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
