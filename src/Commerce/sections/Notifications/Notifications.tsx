import { SnackbarProvider } from 'notistack';

import { notifications } from '@/Commerce/config';

import Notifier from './Notifier';

function Notifications() {
  return (
    <SnackbarProvider maxSnack={notifications.maxSnack}>
      <Notifier />
    </SnackbarProvider>
  );
}

export default Notifications;
