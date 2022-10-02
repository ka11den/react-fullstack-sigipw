import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../redux/userRedux'

export default function Sidebar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <div className="sidebar">      
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Панель Управление</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Быстрое меню</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Пользователи
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Продукты
              </li>
            </Link>
            <Link to="/orders" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Заказы
            </li>
            </Link>
          </ul>          
        </div>
        <button onClick={() => dispatch(logout(user))}>
          Выйти
        </button>
      </div>
    </div>
  );
}