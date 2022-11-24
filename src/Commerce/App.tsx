import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/Commerce/error-handling';
import AppErrorBoundaryFallback from '@/Commerce/error-handling/fallbacks/App';
import Pages from '@/Commerce/routes/Pages';
import Header from '@/Commerce/sections/Header';
import HotKeys from '@/Commerce/sections/HotKeys';
import Notifications from '@/Commerce/sections/Notifications';
//import SW from '@/Commerce/sections/SW';
import Sidebar from '@/Commerce/sections/Sidebar';
//import ReloadPrompt from './swAutoVite/ReloadPrompt'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      {/*  <ReloadPrompt /> */}
      {/* <SW /> */}
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
