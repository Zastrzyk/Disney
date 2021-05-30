import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            Login
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;   
    height: calc(100vh - 70px);

    &:before {
        background-position: top;
        background-size: cover;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`