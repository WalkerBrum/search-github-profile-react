import api from '../services/api';
import { createContext, useState, useCallback } from "react";


export const GithubContext = createContext({
    username: '',
    loading: false,
    user: {},
    repositories: [],
    starred: []
});

function GithubProvider({ children }) {
    const [githubState, setGithubState] = useState({
        username: '',
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            html_url: undefined,
            name: undefined,
            company: undefined,
            blog: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
        },
        repositories: [],
        starred: []
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            username: username,
            loading: true,
        }));

        api.get(`users/${username}`)
        .then(({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    html_url: data.html_url,
                    name: data.name,
                    company: data.company,
                    blog: data.blog,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_repos: data.public_repos,
                    public_gists: data.public_gists,
                },
            }));
        })
        .finally(() => {
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        });
    };

    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`)
        .then(({ data }) => {
            console.log("data: " + JSON.stringify(data));
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        });     
    };

    const getUsername = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            username: username
        }))
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUsername : useCallback((username) => getUsername(username), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubProvider;