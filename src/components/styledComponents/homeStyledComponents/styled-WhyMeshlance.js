import styled from "styled-components";
//import { BUTTON } from '../../NavigationBar'


// STYLED COMPONENTS
export const CONTAINER = styled.div`
    border: 1px solid inherit;
`
export const ROW = styled.div`
    border: 1px solid inherit;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-content: center;
`
export const HERO_SECTION_2 = styled.div`
    border: 1px solid inherit;
    display: flex;
    justify-content: center;
    align-content: center;

    @media (max-width: 999px) {
        flex-direction: column-reverse;
    }
`
export const HERO_TEXT_3 = styled.h3`
    font-size: 34px;
    border: 1px solid inherit;

    @media (max-width: 499px) {
        font-size: 26px;
    }
    @media (max-width: 379px) {
        font-size: 22px;
    }
`
