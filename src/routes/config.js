import * as ROUTES from './constant'
import Dashboard from '../pages/Dashboard/index'
import Detail from '../pages/Detail/index'
import { Navigate } from 'react-router-dom'
// import { useCookies } from 'react-cookie'

// const RouterGuard = (props) => {
//   const logined = useCookies()
//   if (!logined) return <Navigate to={ROUTES.LOGIN} replace={true} />

//   return props.children
// }

const routes = [
  {
    path: ROUTES.DASHBOARD,
    element: (
      // <RouterGuard>
      <Dashboard />
      // </RouterGuard>
    ),
    caseSensitive: true,
  },
  {
    path: `${ROUTES.DETAIL}/:id`,
    element: <Detail />,
  },
]

export default routes
