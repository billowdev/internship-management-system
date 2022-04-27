import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "../../../redux/actions/admin/login";
import { getLogin } from "../../../redux/selectors/admin/login";
import { Link, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

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
    // {
    //   name: "id",
    //   selector: (row) => row.id,
    //   sortable: true,
    //   width: "280px",
    // },
    {
      name: "username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "roles",
      selector: (row) => row.roles,
      sortable: true,
    },
    {
      name: "is_active",
      selector: (row) => row.is_active,
      sortable: true,
    },
    {
      name: "controllers",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <div className="flex space-x-3">
          <Link
            to={{
              pathname: `/admin/manage/login/update/${row.roles}/${row.id}`,
            }}
          >
            <button className="w-26 text-white btn btn-sky">แก้ไขข้อมูล</button>
          </Link>
          <div>
            {/* <button
              className="w-26 text-white btn btn-red"
              onClick={(e) => {
                handleDelete(row.username, row.roles);
              }}
            >
              ลบ
            </button> */}
          </div>
        </div>
      ),
    },
  ];

  const handleDelete = (id, roles) => {
    let role;
    if (roles === "student") {
      role = "นักศึกษา";
    } else if (roles === "director") {
      role = "คณะกรรมการ";
    } else if (roles === "admin") {
      role = "ผู้ดูแลระบบ";
    }
    Swal.fire({
      title: "ลบข้อมูล?",
      text: `คุณต้องการลบไอดี ${id} ซึ่งเป็น ${role} ใช่หรือไม่?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div className="py-16 px-32">
      <div className="container mx-auto px-4 wrapper">
        <h3 class="text-center font-medium leading-tight text-4xl mt-0 mb-5 text-sky-600">
          จัดการข้อมูลสมาชิกทั้งหมด
        </h3>

        <div className="flex items-end justify-end">
          <Link to="/admin/manage/login/add">
            {" "}
            <button className="items-end w-26 text-white btn btn-sky">
              เพิ่มสมาชิก
            </button>
          </Link>
        </div>
        <DataTable
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
      <Outlet />
    </div>
  );
};

export default Login;
