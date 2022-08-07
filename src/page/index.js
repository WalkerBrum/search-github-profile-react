import  { Header, Profile, Nav, Repositories, Starred, Footer } from '../components';
import useGithub from '../hooks/githubHooks';

function Page() {

    const { githubState } = useGithub();
    
    return (
        <div>
            <Header />
            {githubState.hasUser ?
              (<Profile />)
                :
              (<h1>Pesquise um perfil do Github</h1>)
            }
            {githubState.hasUser ?
              (<Nav />)
              :
              (<div />)
            }
            {githubState.loading ?
              (<Repositories />)
                :
              (<Starred />)
            }
            <Footer />
        </div>  
    )
}

export default Page;