
import { FaSignOutAlt } from "react-icons/fa";
import styled from "styled-components";


export const Container = styled.header`
width: 100vw;
position: fixed;
height: 60px;
background-color: var(--primary);
top: 0;



display: flex;
align-items: center;
justify-content: space-between;

> img {
    width: 120px;
    margin-left: 10px;
}

> input {
 width: 754px;
 height: 50px;
 border: none;
 font-size: 22px;
 padding-left: 10px;
}

`;

export const IconSignOut = styled(FaSignOutAlt)`
color: white;
margin-right: 10px;
font-size: 25px;

cursor: pointer;

:hover{
    transform: scale(1.1) rotate(360deg);
    transition: .2s;
}
`;
