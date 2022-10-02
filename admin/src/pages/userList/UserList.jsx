import './userList.css';
import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {userRows} from '../../dummyData';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/users/");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await userRequest.delete(`/users/${id}`);
      res.data && window.location.replace('/');
    } catch {}
  };

  const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'user',
      headerName: 'Пользователь',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt=""/>
            {params.row.username}
          </div>
        );
      },
    },
    {field: 'email', headerName: 'Email', width: 200},
    {
      field: 'status',
      headerName: 'Статус',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Транзакции',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Действия',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row._id}>
              <button className="userListEdit">Изменить</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}