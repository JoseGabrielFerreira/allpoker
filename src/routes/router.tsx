import { createBrowserRouter } from 'react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import Home, { SUBTITLE as HOME_SUBTITLE } from '@/pages/Home'
import NewSession, {
  SUBTITLE as NEW_SESSION_SUBTITLE,
  TITLE as NEW_SESSION_TITLE,
} from '@/pages/NewSession'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { subtitle: HOME_SUBTITLE },
      },
      {
        path: 'session/new',
        element: <NewSession />,
        handle: {
          title: NEW_SESSION_TITLE,
          subtitle: NEW_SESSION_SUBTITLE,
        },
      },
    ],
  },
])
