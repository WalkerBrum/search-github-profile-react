import { Header, Profile, Nav } from './components';
import GithubProvider from './providers/githubProvider';


function App() {
  return (
    <GithubProvider>
        <Header />
        <Profile />
        <Nav />
    </GithubProvider>
  );
}

export default App;
