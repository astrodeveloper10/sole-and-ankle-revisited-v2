import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/index.js";
import Icon from "../Icon/index.js";
import UnstyledButton from "../UnstyledButton/index.js";

const MobileMenu = ({ isOpen, onDismiss }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <CloseButton onClick={onDismiss}>
                        <Icon id="close" />
                        <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    </CloseButton>
                    <VisuallyHidden>
                        <Dialog.Title>Mobile navigation</Dialog.Title>
                        <Dialog.Description>
                            Mobile navigation
                        </Dialog.Description>
                    </VisuallyHidden>
                    <Filler />
                    <Nav>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                    </Nav>
                    <Footer>
                        <FooterLink href="/terms">
                            Terms and Conditions
                        </FooterLink>
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                        <FooterLink href="/contact">Contact Us</FooterLink>
                    </Footer>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 24px 32px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const NavLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: var(--gray-900);
    font-size: 1.125rem;
    font-weight: var(--fw-medium);

    &:first-of-type {
        color: var(--secondary);
    }
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    justify-content: flex-end;
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: var(--gray-700);
    font-size: 0.875rem;
    font-weight: var(--fw-medium);
`;

const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 10px;
    right: 0;
    padding: 16px;
`;

const Filler = styled.div`
    flex: 1;
`;

export default MobileMenu;
