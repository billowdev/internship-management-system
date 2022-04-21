import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "../../../application/actions/admin/login";
import { getLogin } from "../../../application/selectors/admin/login";

const Login = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(getLogin);

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortColumnDirection, setSortColumnDirection] = useState("");
  const [search, setSearch] = useState("");

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const handleSort = (column, sortDirection) => {
    setSortColumn(column.name);
    setSortColumnDirection(sortDirection);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  const fetchData = async () => {
    setLoading(true);
    var url = `?page=${page}&per_page=${perPage}&delay=1`;
    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    dispatch(loadLogin(url));
    setLoading(false);
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "280px",
    },
    {
      name: "username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "permission",
      selector: (row) => row.permission,
      sortable: true,
    },
    {
      name: "controllers",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <div>
          <div></div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto px-4 wrapper">
        <h3 class="text-center font-medium leading-tight text-4xl mt-0 mb-5 text-sky-600">จัดการข้อมูลสมาชิกทั้งหมด</h3>
        <DataTable
          //   title="MineImages"
          columns={columns}
          data={loginData?.data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={loginData?.totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          onSort={handleSort}
        />
      </div>
    </>
  );
};

export default Login;
