import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "../../../redux/actions/admin/login";
import { getLogin } from "../../../redux/selectors/admin/login";
import { Link, Outlet } from "react-router-dom";
import {
  confirmInternship,
  loadInternshipPending,
  returnInternship,
} from "../../../redux/actions/director/internship";
import { getInternshipPending } from "../../../redux/selectors/director/internship";

const InternshipPendingConfirms = () => {
  const dispatch = useDispatch();
  const internshipPending = useSelector(getInternshipPending);

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
    dispatch(loadInternshipPending(url));
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
      name: "รหัสนักศึกษา",
      selector: (row) => row["Student.id"],
      sortable: true,
    },
    {
      name: "ชื่อ",
      selector: (row) => row["Student.first_name"],
      sortable: true,
    },
    {
      name: "นามสกุล",
      selector: (row) => row["Student.last_name"],
      sortable: true,
    },
    {
      name: "ชื่อบริษัท",
      selector: (row) => row["Company.name"],
      sortable: true,
      width: "120px",
    },
    {
      name: "ประเภทบริษัท",
      selector: (row) => row["Company.type"],
      sortable: true,
      width: "120px",
    },
    {
      name: "controllers",
      selector: (row) => row["Student.id"],
      sortable: true,
      cell: (row) => (
        <div className="flex space-x-2">
          {" "}
          <div>
            <button
              className="w-18 text-white btn btn-red"
              onClick={(e) => {
                handleReturn(row.id);
              }}
            >
              ส่งคืน
            </button>
          </div>
          <div>
            <button
              className="w-18 text-white btn btn-green"
              onClick={(e) => {
                handleConfirm(row.id);
              }}
            >
              อนุมัติ
            </button>
          </div>
          <div>
            <Link to={`/director/internship/view/pending/${row["Student.id"]}`}>
              <button className="w-20 text-white btn btn-sky">ดู</button>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const handleReturn = (id) => {
  
    dispatch(returnInternship(id));
    fetchData();
  };
  const handleConfirm = (id) => {
    dispatch(confirmInternship(id));
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  useEffect(() => {
   
  });

  return (
    <>
      <div className="container mx-auto px-4 wrapper">
        <h3 class="mt-10 text-center font-medium leading-tight text-4xl  text-sky-600">
          ข้อมูลฝึกประสบการณ์วิชาชีพรอการยืนยัน
        </h3>
        <hr className="mt-3 mb-10" />
        <DataTable
          //   title="MineImages"
          columns={columns}
          data={internshipPending?.data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={internshipPending?.totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          onSort={handleSort}
        />
      </div>
      <Outlet />
    </>
  );
};

export default InternshipPendingConfirms;
