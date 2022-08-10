import { WrapperNav } from "./styled";
import useGithub from "../../hooks/githubHooks";
import { useState } from 'react';


function Nav() {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [activeRepos, setActiveRepos ] = useState(false)
    const [activeStarred, setActiveStarred ] = useState(false)

    const setRepos = () => {
        const username = githubState.username;

        if (!(username.length > 0)) return;

        setActiveRepos(true);
        setActiveStarred(false);

        return getUserRepos(username);
    }

    const setStarred = () => {
        const username = githubState.username;

        if (!(username.length > 0)) return;

        setActiveRepos(false);
        setActiveStarred(true);

        return getUserStarred(username);
    }
    
    return (
        <WrapperNav>
            <div className={activeRepos && githubState.loading ? "button-click" :  "button-no-click"}>
                <button onClick={setRepos}>Repositories</button>                       
            </div>
            <div className={activeStarred && (githubState.loading === false) ? "button-click" :  "button-no-click"}>
                <button onClick={setStarred}>Starred</button>
            </div>
        </WrapperNav>
    )
}

export default Nav;