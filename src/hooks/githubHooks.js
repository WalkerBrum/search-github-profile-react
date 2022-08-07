import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider"

function useGithub() {
    const { githubState, getUser,  getUserRepos, getUserStarred, getUsername } = useContext(GithubContext);

    return { githubState, getUser, getUserRepos, getUserStarred, getUsername }
}

export default useGithub;