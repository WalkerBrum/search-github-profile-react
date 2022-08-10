import styled from 'styled-components';

export const WrapperProfile = styled.div`
    display: flex;
    margin: 20px;

    @media (max-width: 640px) {
        display: block;
        margin: 10px;
    }
`

export const WrapperImage = styled.div`
    margin: 10px 20px 10px 10px;
    border: solid 1px black;
    padding: 10px;
    width: 17%;

    img {
        border-radius: 50%;
        height: 200px;
    }

    @media (max-width: 640px) {
        display: flex;
        width: 95%;
        justify-content: center;
    }
`

export const WrapperData = styled.div`
    margin: 10px 30px 10px 10px;
    border: solid 1px black;
    width: 83%;
    padding: 10px 20px;
    line-height: 1.6rem;

    h3 {
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-size: 1.6rem;
    }

    @media (max-width: 640px) {
        width: 95%;
    }
`

export const WrapperUserGeneric = styled.div`
    display:flex;
    
    p {
        font-weight: bold;
    }

    a {
        padding-left: 5px;
        text-decoration: none;
        color: blue;
    }

    span {
        padding-left: 5px;
    }
`