import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { GiCoffeeCup } from "react-icons/gi";
import { BsBell } from 'react-icons/bs';
import Avatar from 'react-avatar';

class TopMenu extends React.Component {

    getLogo() {
        return <div className="d-flex align-items-center logo">
            <GiCoffeeCup className="mr-1 text-secondary" />
            <span className="text-primary">interview</span>
            <span className="text-secondary">mocha</span>
        </div>
    }

    getMyTest() {
        return <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                MY TESTS
        </DropdownToggle>
            <DropdownMenu left="true">
                <DropdownItem>
                    Option 1
          </DropdownItem>
                <DropdownItem>
                    Option 2
          </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
          </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    }

    getSkillLibrary() {
        return <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                SKILL LIBRARY
        </DropdownToggle>
            <DropdownMenu left="true">
                <DropdownItem>
                    Option 1
          </DropdownItem>
                <DropdownItem>
                    Option 2
          </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
          </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    }

    getSettings() {
        return <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                SETTINGS
        </DropdownToggle>
            <DropdownMenu left="true">
                <DropdownItem>
                    Option 1
          </DropdownItem>
                <DropdownItem>
                    Option 2
          </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
          </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    }

    getBellIcon() {
        return <div className="bell-icon mr-2">
            <BsBell size={15} />
        </div>
    }

    getAvatar() {
        return <Avatar className="cursor-pointer" round={true} name="Karun Shende" size={30} />
    }

    getAnalytics(){
        return <span className="position-relative">
            ANALYTICS
            <span className="alert alert-info border-0 position-absolute text-dark" style={{top:-20, right: 0}}  role="alert">
                BETA
            </span>
        </span>
    }

    render() {
        return (
            <div className="top-menu-container fixed-top">
                <Navbar color="white" light expand="md" className="top-menu">
                    <NavbarBrand href="/">{this.getLogo()}</NavbarBrand>
                    <Nav className="ml-4 mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">CANDIDATES</NavLink>
                        </NavItem>
                        {this.getMyTest()}
                        {this.getSkillLibrary()}
                        <NavItem>
                            <NavLink href="/">MY QUESTIONS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">{this.getAnalytics()}</NavLink>
                        </NavItem>
                        {this.getSettings()}
                    </Nav>
                    {this.getBellIcon()}
                    {this.getAvatar()}
                </Navbar>
            </div>
        )
    }
}

export default TopMenu
