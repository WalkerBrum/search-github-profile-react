import { WrapperFooter, WrapperButtons } from "./styled";


function Footer() {

    return (
        <WrapperFooter>
            <h3>2022 - Busque Perfil Github</h3>
            <p>Desenvolvido com React e JavaScript por Walker Lobato</p>
            <WrapperButtons>
                <a href="https://github.com/WalkerBrum/search-github-profile-react" target="_blank" rel="noreferrer">
                    <button>Github</button>
                </a>
                <a href="https://www.linkedin.com/in/walkerlobato/" target="_blank" rel="noreferrer">
                    <button>Likedin</button>
                </a>
            </WrapperButtons>
        </WrapperFooter>
    )
}

export default Footer;