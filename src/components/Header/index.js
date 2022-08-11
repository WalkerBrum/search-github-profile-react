import useGithub from "../../hooks/githubHooks";
import { Wrapper } from "./styled";
import { useState } from 'react';

function Header() {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submit = (event) => {
        event.preventDefault();

        if (!usernameForSearch) return;

        getUser(usernameForSearch);
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Pesquisar perfil"
                    onSubmit={submit}
                    onChange={(event) => setUsernameForSearch(event.target.value)} />
            </form>
            <button onClick={submit}>
                    Buscar
            </button>
        </Wrapper>
    )
}

export default Header;