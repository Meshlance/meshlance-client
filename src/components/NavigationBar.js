import styled from 'styled-components'
//import { Link } from 'react-router-dom'


const NavigationBar = () => {

    return (
        <NAV>
            <ROW>
                <APP_TITLE>
                    <MOBILE_MENU> &#9776; </MOBILE_MENU>
                    <APP_TITLE_TEXT> Booklance </APP_TITLE_TEXT>
                </APP_TITLE>
                <NAV_LIST>
                        <LIST> Projects </LIST>
                        <LIST> Solutions </LIST>
                        <LIST> Pricing </LIST>
                        <LIST> Resources </LIST>
                        <BUTTON> book a project </BUTTON>
                        <BUTTON variant="outline"> login </BUTTON>
                </NAV_LIST>
            </ROW>
        </NAV>
    )
}

export default NavigationBar


// STYLED COMPONENTS
const NAV = styled.nav`
    border: 1px solid lightgray;
    height: calc(1rem + 8vh);
    position: fixed;
    width: 100%;
    max-width: 100%;
`
const ROW = styled.div`
    border: 1px solid inherit;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    top: 1rem;
`
const APP_TITLE = styled.div`
    border: 1px solid inherit;
    margin: 0 auto;
    padding: 0 5px;
    display: flex;
    position: absolute;
    left: 0;
`
// MENU BAR
const MOBILE_MENU = styled.div`
    border: 1px solid inherit;
    font-size: 1.5rem;
    font-weight: bolder;
    margin: 0 10px;

    @media only screen and (min-width: 790px) {
        display: none;
    }
`
const APP_TITLE_TEXT = styled.span`
    border: 1px solid inherit;
    margin: 2px 0 0 15px;
    font-size: 1.2rem;
    font-weight: bolder;
    text-transform: capitalize;
`
const NAV_LIST = styled.span`
    list-style-type: none;
    display: flex;
    border: 1px solid inherit;
    position: absolute;
    right: 0;

    // smartphones
    @media only screen and (max-width: 789px) {
        display: none;
    }
`
const LIST = styled.li`
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 500;
`
export const BUTTON = styled.button`
    border: 1px solid #17306D;
    border-radius: 10px;
    margin-right: 20px;
    padding: 10px;
    background: ${(props) => props.variant === "outline" ? "white" : "#17306D"};
    color: ${(props) => props.variant === "outline" ? "#17306D": "white"};
    text-transform: ${(props) => props.variant === "outline" ? "capitalize": "uppercase"};
    font-weight: ${(props) => props.variant === "outline" ? 500 : "bolder"};
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background: ${(props) => props.variant === "outline" ? "none" : "white"};
        color: #17306D};
        border: 1px solid #17306D;
    }
`




