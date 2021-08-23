import './App.css';
import { withAuthenticator, AmplifySignOut  } from '@aws-amplify/ui-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
       Happy coding
      </header>
    </div>
  );
}

export default withAuthenticator(App);
