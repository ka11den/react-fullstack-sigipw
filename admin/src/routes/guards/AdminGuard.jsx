import AdminRoutes from '../admin'
import {Redirect} from 'react-router-dom'

export default function AdminGuard({isAdmin}) {
  if (isAdmin) {
    return <AdminRoutes />
  } else {
    return <Redirect to={'/login'} />
  }
}