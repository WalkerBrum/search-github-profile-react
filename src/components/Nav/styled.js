import styled from 'styled-components';

export const WrapperNav = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 30px;

    .button-click {
        border: 1px solid green;
        padding: 15px 0px;
    }

    .button-no-click {
        padding: 15px 0px;
    }

    button {
        height: 45px;
        background: darkgreen;
        color: white;
        border-radius: 10px;
        font-size: 1.2rem;
        border: 1px solid gray;
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
    
        &:hover {
            background-color: green;
        }
   
`