import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTAlogoOne src="./images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Adipisicing pariatur laborum consectetur ipsum ipsum cillum excepteur et exercitation dolore. 
                    Est deserunt quis ullamco mollit magna reprehenderit eiusmod duis nulla esse. 
                    Fugiat consectetur ipsum dolore tempor fugiat nostrud anim eu. Nostrud consequat laborum ad ut consectetur voluptate veniam qui 
                    sit culpa eiusmod eiusmod cillum. Cupidatat in cillum consequat do incididunt cupidatat sunt.
                </Description>
                <CTAlogoTwo src="./images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;   
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
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
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    

`
const CTAlogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    :hover {
        background: #0483ee;
`
const Description = styled.div`
        font-size: 11px;
        letter-spacing: 1.5px;
        text-align: center;
        line-height: 1.5;
`
const CTAlogoTwo = styled.img`

`