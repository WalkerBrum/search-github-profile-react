import styled from 'styled-components';

export const WrapperRepos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px;
    gap: 30px;
    line-height: 1.6rem;
    

    .layout-inside {
        width: 400px;
        height: 150px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 10px;
    }

    li {
        list-style: none;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: #1258d7;
        font-weight: bold;
        transition: 0.5s ease-in-out;
    }

    a:hover {
        color: blue;
        border-radius: 5px;
        transition: 0.5s ease-in-out;
    }
`