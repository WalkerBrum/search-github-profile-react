import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;

    input {
        width: 85%;
        height: 40px;
        border-radius: 10px;
        padding: 22px;
        border: solid 1px #ccc;
        font-size: 1.2rem;
    }

    button {
        width: 15%;
        height: 45px;
        background: rgb(228, 16, 93);
        color: white;
        border-radius: 10px;
        font-size: 1.2rem;
        border: none;
        margin: 0px 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
    }

    button:hover {
        transition: 0.5s ease-in-out;
        background-color: rgb(228, 16, 93);
        box-shadow: rgb(228 16 93) 0px 0px 15px 0px;
    }

    @media (max-width: 640px){
        margin: 20px 10px;

        input {
            width: 70%;
        }
    
        button {
            width: 30%;
            margin-left: 10px;
            margin-right: 0
        }  
    }
}`