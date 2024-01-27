import React, { useState, useEffect } from "react";
import styles from "./table.module.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { BaseUrl } from "../../services";

function Tabledata() {
  const [tableDatas, setTableDatas] = useState([{"id":"null","name":"null","quantity":"null","price":"null"}]);
  const [paginationModel, setPaginationModel] = useState({ pageSize: 4, page: 0 })

  const getTableData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/table`);
      setTableDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTableData();
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
