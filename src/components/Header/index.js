import useGithub from "../../hooks/githubHooks";
import { Wrapper } from "./styled";
import { useState } from 'react';

function Header() {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submit = () => {
        if (!usernameForSearch) return;

        return getUser(usernameForSearch);
    }

    return (
        <Wrapper>
            <input 
                type="text" 
                placeholder="Pesquisar perfil"
                onChange={(event) => setUsernameForSearch(event.target.value)} />
            <button 
                onClick={submit} 
                username={usernameForSearch}>
                    Buscar
            </button>
        </Wrapper>
    )
}

export default Header;