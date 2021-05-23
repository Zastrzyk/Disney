import React from 'react'
import styled from 'styled-components'

const Movies = () => {
    return (
        <Container>
            <h4>Recomended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/disney-plus_everything-coming_social_97471cc5.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/disney-plus_everything-coming_social_97471cc5.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/disney-plus_everything-coming_social_97471cc5.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/disney-plus_everything-coming_social_97471cc5.jpeg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`
    
`
const Content = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        width: 100%;
        heigh: 100%;
        object-fit: cover;
    }

`