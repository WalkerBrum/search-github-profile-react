import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider"

function useGithub() {
    const { githubState, getUser } = useContext(GithubContext);

    return { githubState, getUser }
}

export default useGithub;