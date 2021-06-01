import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams} from "react-router-dom"
import db from "../firebase"
import { setMovies } from '../features/movie/movieSlice'

const Detail = () => {

    const { id } = useParams();
    const [ movie, setMovie ] = useState()
    
    useEffect(()=> {
        db.collection("movies")
        .doc(id)
        .get()
        .then(()=> {
            if(doc.exists){
                setMovie(doc.data())
            } else {

            }
        })
    }, [])

    

    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>           
          </Controls>
            <SubTitle>
                    2018  7m  Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                   Reprehenderit consequat mollit eu amet est do consequat dolore eu Lorem duis.
                   Elit tempor dolor voluptate enim ad proident ex eiusmod cupidatat fugiat amet eiusmod. 
                   Commodo aute incididunt ipsum ipsum laborum proident aliquip sit minim sunt excepteur laborum dolor enim. 
                   Do eu exercitation fugiat et aute est do do ad ullamco proident esse. Cillum velit esse veniam exercitation. 
                   Aliqua nisi est qui commodo laborum minim enim tempor est mollit. Veniam culpa tempor consequat sit. 
                   Laboris veniam voluptate aute officia exercitation voluptate reprehenderit ullamco aliqua excepteur Lorem tempor.
            </Description>
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
    align-items: center;
`

const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    padding: 0px 24px;
    margin-right: 22px;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    color: black;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb (249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
        background: rgb(0, 0, 0);       
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    olor: rgb(249, 249, 249);
`