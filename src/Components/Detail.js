import React from 'react'
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Controls>
                <PlayButtom>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButtom>
                <TrailerButtom>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButtom>
                <AddButtom>

                </AddButtom>
                <GroupWatchButtom>

                </GroupWatchButtom>

            </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom:  0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-widt: 200px;

    img {
        heigh: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
`

const PlayButtom = styled.div`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    padding: 0px 24px;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
`

const TrailerButtom = styled.div``

const AddButtom = styled.div``

const GroupWatchButtom = styled.div``