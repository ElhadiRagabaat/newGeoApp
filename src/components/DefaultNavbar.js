import React,{ useState } from 'react';
import '../pages/style.css'
import { Link,useHistory } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import Toure from 'pages/Toure';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const history = useHistory()

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Nosh- Culinary Solutions</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            {/* <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="description" size="2xl" />
                                &nbsp;Docs
                            </NavLink> */}
                               <Link to="/">
                            <NavLink
                                
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="home" size="2xl" />
                                &nbsp;Home
                            </NavLink>         
                            </Link>
                            <Link to="/login">
                            <NavLink
                                
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="login" size="2xl" />
                                &nbsp;Login
                            </NavLink>         
                            </Link>
                            <Link to="/contact">
                            <NavLink
                                
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="message" size="2xl" />
                                &nbsp;Contact Us
                            </NavLink>
                                       
                            </Link>

                            <Link to="/contact">
                            <NavLink
                                
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="group" size="2xl" />
                                &nbsp;About
                            </NavLink>
                                       
                            </Link>
                            
                            {/* <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="apps" size="2xl" />
                                &nbsp;Components
                            </NavLink> */}
                            {/* <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Templates
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Landing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div> */}
                            {/* <NavLink
                                // href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                                // target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                />
                                &nbsp;Github
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Issues
                            </NavLink> */}
                            <a
                                // href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                                // target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark"
                                    onClick={()=>history.push("/postNewPlace")}
                                >
                                    Post new Place
                                </Button>
                                
                            </a>
                            
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
         <div className="smallScreen">
            <Toure />
            </div>
        </Navbar>
    );
}
