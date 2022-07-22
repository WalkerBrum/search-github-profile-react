import { Header, Profile } from './components';
import GithubProvider from './providers/githubProvider';


function App() {
  return (
    <GithubProvider>
        <Header />
        <Profile />
    </GithubProvider>
  );
}

export default App;
