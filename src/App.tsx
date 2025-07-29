import { UserButton } from './components/user-button';
import { User } from './components/user';
import { Button } from './components/Button';

function App() {
  const handleLogin = () => {
    console.log('로그인 버튼 클릭됨');
  };

  const handleCancel = () => {
    console.log('취소 버튼 클릭됨');
  };

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
      <form className='space-y-4'>
        <input
          type='text'
          placeholder='Username'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <div className='flex space-x-3'>
          <Button type='submit' onClick={handleLogin}>
            Login
          </Button>
          <Button variant='secondary' onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>

      <div className='mt-8 space-y-4'>
        <User />
        <UserButton />
      </div>

      <div className='mt-6 flex space-x-2'>
        <Button variant='danger' onClick={() => alert('위험한 작업!')}>
          Delete
        </Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </div>
  );
}

export default App;
