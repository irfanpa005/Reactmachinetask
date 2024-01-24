import React, { useState, useEffect } from "react";
import styles from "./table.module.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function Tabledata() {
  const [tableDatas, setTableDatas] = useState([]);
  const [paginationModel, setPaginationModel] = useState({ pageSize: 4, page: 0 })

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/table`).then((response) => {
      setTableDatas(response.data);
      console.log(response.data);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "Id", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "quantity", headerName: "Quantity", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
  ];

  return (
    <div className={styles.tableContainer}>
      <DataGrid
        rows={tableDatas}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}

export default Tabledata;
