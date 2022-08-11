import styled from 'styled-components';

export const WrapperFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    background: black;
    color: white;
    padding: 40px;
    height: 34.4vh;

    h3 {
        margin-top: 20px;
    }
`

export const WrapperButtons = styled.div`
    display: flex;
    gap: 10px;
    margin: 20px;

    button {
        cursor: pointer;
        width: 100px;
        height: 35px;
        border-radius: 10px;
        font-size: 1rem;
        background-color: green;
        font-weight: bold;
        transition: 0.5s ease-in-out;
        border: none;
    }

    button:hover {
        transition: 0.5s ease-in-out;
        background-color: chartreuse;
        box-shadow: chartreuse 0px 0px 15px 0px;
    }
`