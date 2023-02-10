import { QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import NavigationBar from './components/NavigationBar';

export const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className={'bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 dark:text-white'}>
        <Routes />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  );
}

export default App;
