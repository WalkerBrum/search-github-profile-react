import { Header, Profile, Nav, Repositories } from './components';
import GithubProvider from './providers/githubProvider';


function App() {
  return (
    <GithubProvider>
        <Header />
        <Profile />
        <Nav />
        <Repositories />
    </GithubProvider>
  );
}

export default App;
