import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider"

function useGithub() {
    const { githubState, getUser,  getUserRepos, getUsername } = useContext(GithubContext);

    return { githubState, getUser, getUserRepos, getUsername }
}

export default useGithub;