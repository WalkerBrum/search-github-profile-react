import styled from 'styled-components';

export const WrapperStatusCount = styled.div`
    display: flex;
    flex-wrap: wrap;
    

    p {
        margin: 20px 20px 5px 20px;
        font-weight: bold;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 450px) {
        justify-content: center;
    }
`

