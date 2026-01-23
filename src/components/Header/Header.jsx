import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon/index.js";
import UnstyledButton from "../UnstyledButton/index.js";
import VisuallyHidden from "../VisuallyHidden/index.js";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </DesktopNav>
                <Filler />
                <MobileActions>
                    <UnstyledButton>
                        <Icon
                            id="shopping-bag"
                            strokeWidth={2}
                            size={24}
                            color="var(--gray-900)"
                        />
                        <VisuallyHidden>Shopping Bag</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon
                            id="search"
                            strokeWidth={2}
                            size={24}
                            color="var(--gray-900)"
                        />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon
                            id="menu"
                            strokeWidth={2}
                            size={24}
                            color="var(--gray-900)"
                        />
                        <VisuallyHidden>Menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileActions>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    border-bottom: 1px solid var(--gray-300);
    overflow-x: auto;

    @media ${QUERIES.tablet} {
        border-top: 4px solid var(--gray-900);
        justify-content: space-between;
        align-items: center;
    }

    @media ${QUERIES.mobile} {
        padding-inline: 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(
        1rem,
        9.2vw - 4.5rem,
        3.5rem
    );
    margin: 0 48px;
    
    @media ${QUERIES.tablet} {
        display: none;
    }
}
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tablet} {
        flex: revert;
    }
`;

const Filler = styled.div`
    flex: 1;

    @media ${QUERIES.tablet} {
        display: none;
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--gray-900);
    font-weight: var(--fw-medium);

    &:first-of-type {
        color: var(--secondary);
    }
`;

const MobileActions = styled.div`
    display: none;

    @media ${QUERIES.tablet} {
        display: flex;
        gap: 32px;
    }

    @media ${QUERIES.mobile} {
        display: flex;
        gap: 16px;
    }
`;

export default Header;
