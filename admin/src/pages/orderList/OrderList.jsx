import './userList.css';
import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {userRows} from '../../dummyData';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';

export default function OrderList() {
  const [data, setData] = useState(userRows);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders/");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  console.log(orders)

  const handleDelete = async (id) => {
    try {
      const res = await userRequest.delete(`/orders/${id}`);
      res.data && window.location.replace('/orders');
    } catch {}
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "order",
      headerName: "Дата",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">            
            {params.row.createdAt.slice(0,10)}
          </div>
        );
      },
    },
    { 
      field: "inStock",
      headerName: "Время",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">            
            {params.row.createdAt.slice(11,-5)}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Сумма",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListItem">            
            {params.row.amount} руб.
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Действие",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row.userId}>
              <button className="productListEdit">Изменить</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
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
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}