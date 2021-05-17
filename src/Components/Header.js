import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return ( <
        Nav >
        <
        Logo src = "/images/logo.svg" / >
        <
        NavMenu >
        <
        a >
        <
        img src = "/images/home-icon.svg" / >
        <
        span > HOME < /span> <
        /a>

        <
        a >
        <
        img src = "/images/search-icon.svg" / >
        <
        span > SEARCH < /span> <
        /a>

        <
        a >
        <
        img src = "/images/watchlist-icon.svg" / >
        <
        span > WATCHLIST < /span> <
        /a>

        <
        a >
        <
        img src = "/images/original-icon.svg" / >
        <
        span > ORIGINAL < /span> <
        /a>

        <
        a >
        <
        img src = "/images/movie-icon.svg" / >
        <
        span > MOVIES < /span> <
        /a> <
        /NavMenu> <
        UserImg src = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" / >
        <
        /Nav>

    )
}

export default Header

const Nav = styled.nav `
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img `
    width: 80px;
`
const NavMenu = styled.div `
    display: flex;
    flex: 1;
    margin-flex: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;

            &:after {
                content: "";
                height: 2px;
            }
        }
    }

`

const UserImg = styled.img `
    width: 48px;
    height: 48px;
    cursor: pointer;
`