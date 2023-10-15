import styled from "styled-components";
import { BUTTON } from '../../NavigationBar'


// styled components
export const CONTAINER = styled.div`
    border: 1px solid inherit;
    margin-top: 50px;
`
export const ROW = styled.div`
    border: 1px solid inherit;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-content: center;
`
export const HERO_SECTION = styled.div`
    border: 1px solid inherit;
    display: flex;
    justify-content: center;
    align-content: center;

    @media (max-width: 999px) {
        flex-direction: column;
    }
`
export const HERO_TEXT_BOX = styled.div`
    border: 1px solid inherit;
    padding: 50px;

    @media (max-width: 999px) {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-width: 1200px;
    }
`
export const HERO_TEXT = styled.h1`
    font-size: 48px;
    border: 1px solid inherit;

    @media (max-width: 999px) {
        text-align: center;
    }
    @media (max-width: 799px) {
        text-align: center;
        font-size: 40px;
    }
    @media (max-width: 599px) {
        text-align: center;
        font-size: 36px;
    }
    @media (max-width: 499px) {
        text-align: center;
        font-size: 30px;
    }
    @media (max-width: 379px) {
        text-align: center;
        font-size: 28px;
    }
`
export const BIO_BOX = styled.div`
    border: 1px solid inherit;
    margin: 40px 0;
`
export const BIO = styled.p`
    font-size: 1.3rem;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`
export const BUTTON_BOX = styled.div`
    border: 1px solid inherit;
    width: calc(15rem + 10vw);
    position: relative;
    margin-bottom: 1rem;

    @media (max-width: 499px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
`
export const SEE_PRICING = styled(BUTTON)`
    
    @media (min-width: 500px) {
        position: absolute;
        left: 0;
    }
`
export const BOOK_A_PROJECT = styled(BUTTON)`
    
    @media (min-width: 500px) {
        position: absolute;
        right: 0;
    }
`
export const HERO_CARD_BOARD = styled.div`
    border: 1px solid inherit;
    padding: 100px 0 200px 0;
    display: flex;
    justify-content: left;
    align-content: left;
    gap: calc(1rem + 2vw);

    @media (max-width: 999px) {
        padding: 2rem 0;
        justify-content: center;
        align-content: center;
        gap: calc(1rem + 2vw);
    }
    @media (max-width: 499px) {
        padding: 2rem 0;
        justify-content: center;
        align-content: center;
        gap: 1rem;
    }
    @media (max-width: 379px) {
        display: none;
        ${'' /* padding: 5px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem; */}
    }
`
export const PROJECT_CARD = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-right: 50px;

    @media (max-width: 999px) {
        margin-right: 0px;
    }
`
export const FIGURE = styled.figure`
    width: 30px;
    padding: 60px;
    margin: 0;  
    border: 1px solid gray;
    border-radius: 5px;
`
export const CARD_IMAGE = styled.img`
    width: 100%;
`
export const CARD_TEXT = styled.span`
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 400;
    text-align: center;
    padding: 10px;
`

