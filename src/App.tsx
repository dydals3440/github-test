import { User } from './components/user';

function App() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
      <User />
    </div>
  );
}

export default App;
