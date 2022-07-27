import useGithub from '../../hooks/githubHooks';
import StatusCount from '../StatusCount';
import * as Styled from './styled';

function Profile() {

    const { githubState } = useGithub();
    const { WrapperProfile, WrapperImage, WrapperData, WrapperUserGeneric } = Styled; 
    // console.log(githubState);

    return (
        <WrapperProfile>
            <WrapperImage>
                <img src={githubState.user.avatar} alt="Foto do perfil"/>
            </WrapperImage>
            <WrapperData>
                <h3>{githubState.user.name}</h3>
                <WrapperUserGeneric>
                    <p>Username:</p>
                    <a
                        href={githubState.user.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {githubState.user.login}
                    </a>
                </WrapperUserGeneric>
                <WrapperUserGeneric>
                    <p>Location: </p>
                    <span>{githubState.user.location}</span>
                </WrapperUserGeneric>
                <WrapperUserGeneric>
                    <p>Blog: </p>
                    <a
                        href={githubState.user.blog}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {githubState.user.blog}
                    </a>
                </WrapperUserGeneric>
                <StatusCount />
            </WrapperData>
        </WrapperProfile>
    )
}

export default Profile;