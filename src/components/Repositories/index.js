import { WrapperRepos } from "./styled";
import useGithub from '../../hooks/githubHooks';

function Repositories() {

    const { githubState } = useGithub();

    return (
        <WrapperRepos>
            {githubState.repositories.map((repos, index) =>
                <div className="layout-inside" key={index}>
                    <li>
                        {repos.name}
                    </li>
                    <p>
                        Full Name:
                    </p>
                    <a href={`https://github.com/${repos.full_name}`} target="_blank" rel="noreferrer">
                        {repos.full_name}
                    </a>
                </div>
            )}
        </WrapperRepos>
    );
};


export default Repositories;