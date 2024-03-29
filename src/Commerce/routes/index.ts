import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import asyncComponentLoader from '@/Commerce/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/general/Welcome')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/demo/Page1')),
    path: '/page-1',
    title: 'Page 1',
    icon: GitHubIcon,
  },
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/demo/Page2')),
    path: '/page-2',
    title: 'Page 2',
    icon: AddTaskIcon,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/demo/Page3')),
    path: '/page-3',
    title: 'Page 3',
    icon: TerrainIcon,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/demo/Page4')),
    path: '/page-4',
    title: 'Page 4',
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/general/NotFound')),
    path: '*',
  },
  [Pages.Compras]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/orders/Compras/Compras')),
    path: '/mis-compras',
    title: 'Mis compras',
    icon: LocalMallIcon,
  },
  [Pages.Carrito]: {
    component: asyncComponentLoader(() => import('@/Commerce/pages/orders/ListaCarrito/ListaCarrito')),
    path: '/carrito',
    title: 'Carrito',
    icon: LocalGroceryStoreIcon,
  },
  // [Pages.Carrito]: {
  //   component: asyncComponentLoader(() => import('@/Commerce/components/orders/Checkout/Checkout')),
  //   path: '/carrito',
  //   title: 'Carrito',
  //   icon: LocalGroceryStoreIcon,
  // },
};

export default routes;
