import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-slate-200 shadow-md fixed top-0 left-0 right-0 z-10'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Pador</span>
            <span className='text-slate-700'>Farms</span>
          </h1>
        </Link>
        <ul className='flex gap-4 items-center'>
          {!currentUser && (
            <Link to='/signup'>
              <li className='hidden sm:inline text-slate-700 hover:underline'>
                SignUp
              </li>
            </Link>
          )}
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to="/profile" className="flex items-center">
            {currentUser ? (
              <>
                <img
                  src={currentUser.avatar}
                  alt="profile"
                  className="rounded-full h-8 w-8 mr-2"
                />
                <li className="text-slate-700 hover:underline">SignOut</li>
              </>
            ) : (
              <li className="text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
