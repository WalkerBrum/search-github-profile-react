import * as Styled from './styled';
import useGithub from '../../hooks/githubHooks';

function StatusCount() {
    
    const { githubState } = useGithub();
    const { WrapperStatusCount } = Styled;

    return (
        <WrapperStatusCount>
            <div>
                <p>Followers</p>
                <span>{githubState.user.followers}</span>
            </div>
            <div>
                <p>Following</p>
                <span>{githubState.user.following}</span>
            </div>
            <div>
                <p>Gists</p>
                <span>{githubState.user.public_gists}</span>
            </div>  
            <div>
                <p>Repos</p>
                <span>{githubState.user.public_repos}</span>
            </div>
        </WrapperStatusCount>
    )
}

export default StatusCount;