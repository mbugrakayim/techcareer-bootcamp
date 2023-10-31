import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    await axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteClick = (id) => async () => {
    await axios
      .delete(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "unitPrice", headerName: "unitPrice", width: 150 },
    { field: "unitsInStock", headerName: "unitsInStock", width: 150 },
    {
      field: "delete",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    name: product.name,
    unitPrice: product.unitPrice,
    unitsInStock: product.unitsInStock,
  }));

  return (
    <>
      <Box
        sx={{
          height: "600px",
          width: "100%",
          "& .red": {
            backgroundColor: "red",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getCellClassName={(params) => {
            return params.row.unitsInStock === 0 ? "red" : "";
          }}
        />
      </Box>
    </>
  );
}

export default App;
