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
    setPage(page)
  };

  // const handleSort = (column, sortDirection) => {
  //   setSortColumn(column.name);
  //   setSortColumnDirection(sortDirection);
  // };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    fetchData();
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
      name: "สาขาวิชา",
      selector: (row) => row["Student.program"],
      sortable: true,
      width: "150px",
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
      name: "",
      selector: (row) => row["Student.id"],
      // sortable: true,
      cell: (row) => (
        <div className="flex space-x-2">
          {" "}
          <div>
            <button
              className="w-20 text-white btn btn-red"
              onClick={(e) => {
                handleReturn(row.id);
              }}
            >
              ส่งคืน
            </button>
          </div>
          <div>
            <button
              className="w-20  text-white btn btn-green"
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
  }, [page, sortColumn, sortColumnDirection, perPage, dispatch]);

  useEffect(() => {});

  return (
    <>
      <div className="container mx-auto px-4 wrapper">
        <h3 class="mt-10 text-center font-medium leading-tight text-4xl  text-sky-600">
          ข้อมูลฝึกประสบการณ์วิชาชีพรอการยืนยัน
        </h3>
        <hr className="mt-3 mb-10" />

        <div class="grid justify-center">
          <div class="mb-3 xl:w-96">
            <div class="input-group relative flex flex-row items-stretch w-full mb-4">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="รหัสนักศึกษา"
                aria-label="Search"
                onChange={handleSearchChange}
                aria-describedby="button-addon3"
              />
              <div
                onClick={handleSearchSubmit}
                class="btn cursor-pointer inline-block px-6 py-2 pointer-cursor border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                id="button-addon3"
              >
                ค้นหา
              </div>
            </div>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={internshipPending?.data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={internshipPending?.total}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          // onSort={handleSort}
        />
      </div>
      <Outlet />
    </>
  );
};

export default InternshipPendingConfirms;
