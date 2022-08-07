import GithubProvider from './providers/githubProvider';
import Page from './page';

function App() {
  
  return (
    <GithubProvider>
        <Page />       
    </GithubProvider>
  );
}

export default App;
