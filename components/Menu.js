import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Patinha Solidária</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink href="/castracao"></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/telaMenu">Menu</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/denuncias"></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/cadastro">Cadastro</NavLink>
                            </NavItem>
                           

                            


                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu