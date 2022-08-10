import { WrapperRepos } from "../Layout/repos";
import useGithub from '../../hooks/githubHooks';

function Starred() {

    const { githubState } = useGithub();

    return (
        <WrapperRepos>
            {(githubState.loading === false) && githubState.starred.map((starred, index) =>
                <div className="layout-inside" key={index}>
                    <li>
                        {starred.name}
                    </li>
                    <p>
                        Full Name:
                    </p>
                    <a href={`https://github.com/${starred.full_name}`} target="_blank" rel="noreferrer">
                        {starred.full_name}
                    </a>
                </div>
            )}
        </WrapperRepos>
    );
};


export default Starred;