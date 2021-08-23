import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       Happy coding
      </header>
    </div>
  );
}

export default withAuthenticator(App);
