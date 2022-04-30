import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { loadState } from "../../../helpers/Persist";
import {
  confirmInternship,
  loadInternshipDetail,
  returnInternship,
  unConfirmInternship,
} from "../../../redux/actions/director/internship";
import { getInternshipDetail } from "../../../redux/selectors/director/internship";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const InternshipsViews = () => {
  const dispatch = useDispatch();
  const { id, status } = useParams();
  const navigate = useNavigate();

  let internshipDetail = useSelector(getInternshipDetail);

  const handleConfirm = (id) => {
    Swal.fire({
      title: "อนุมัติ ?",
      text: `แบบฟอร์มจะถูกเปลี่ยนสถานะเป็น "ยืนยันแล้ว"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(confirmInternship(id));
        navigate("/director/internship/confirm");
      }
    });
  };

  const handleUnConfirm = (id) => {
    Swal.fire({
      title: "พิจารณาใหม่ ?",
      text: `แบบฟอร์มจะถูกเปลี่ยนสถานะเป็น "รอการยืนยัน"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(unConfirmInternship(id));
        navigate("/director/internship/confirm");
      }
    });
  };
  const handleReturn = (id) => {
    Swal.fire({
      title: "ส่งคืน?",
      text: `แบบฟอร์มจะถูกส่งคืนนักศึกษา`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(returnInternship(id));
        if (status === "pending") {
          navigate("/director/internship/pending");
        } else {
          navigate("/director/internship/confirm");
        }
      }
    });
  };

  useEffect(() => {
    dispatch(loadInternshipDetail(id));
  }, [dispatch]);

  const Sender = (
    <div>
      {/* =========================== sender intern splace information  =========================== */}
      <div className="mt-2 px-7">
        <p className="text-xl font-semibold leading-tight text-gray-800">
          ข้อมูลผู้เสนอ
        </p>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              ชื่อ
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              placeholder="-"
              defaultValue={internshipDetail?.student?.first_name}
              disabled
            />
            <p className="mt-3 text-xs leading-3 text-gray-600"></p>
          </div>
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              นามสุกล
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              placeholder="-"
              defaultValue={internshipDetail?.student?.last_name}
              disabled
            />
            <p className="mt-3 text-xs leading-3 text-gray-600"></p>
          </div>
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              รหัสนักศึกษา
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              placeholder="-"
              defaultValue={internshipDetail?.student?.id}
              disabled
            />
          </div>
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              เบอร์โทรศัพท์
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              placeholder="-"
              defaultValue={internshipDetail?.student?.phone}
              disabled
            />
          </div>
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              email
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              placeholder="-"
              type="email"
              id="email"
              disabled
              defaultValue={internshipDetail?.student?.email}
            />
          </div>
          {/* {SelectProgram} */}
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              สาขาวิชา
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              type="text"
              id="program"
              disabled
              defaultValue={internshipDetail?.student?.program}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const InternshipInformation = (
    <div className="mt-10 px-7">
      <p className="text-xl font-semibold leading-tight text-gray-800">
        ข้อมูลสถานที่ฝึกงาน
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อหน่วยงาน
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="-"
            disabled
            defaultValue={internshipDetail?.Companies?.company?.name}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ภูมิภาค
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={internshipDetail?.Companies?.company?.type}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 sm2:grid-cols-1 lg:grid-cols-2 md:grid-cols-4 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            กิจกรรมหลักของหน่วยงาน
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={internshipDetail?.Companies?.company?.activities}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เสนอหนังสือต่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={internshipDetail?.Companies?.company?.propose_to}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 sm2:grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ติดต่อสถานที่ฝึกงานกับ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail &&
              internshipDetail?.Companies?.company?.contact_person_name
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำแหน่ง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.Companies?.company?.contact_person_position
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เบอร์ติดต่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={internshipDetail?.Companies?.company?.phone}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-4 gap-7 mt-3 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.Companies?.companyAddress?.house_number
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail && internshipDetail["Company.Address.road"]
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.Companies?.companyAddress?.sub_district
            }
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-4 gap-7 mt-3 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={internshipDetail?.Companies?.companyAddress?.district}
          />
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={internshipDetail?.Companies?.companyAddress?.province}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.Companies?.companyAddress?.post_code
            }
          />
        </div>
      </div>
    </div>
  );

  const coInternshipStudents = (
    <div className="mt-10 px-7">
      <p className="text-xl font-semibold leading-tight text-gray-800">
        พร้อมด้วยนักศึกษา
      </p>
      {/* =========================== 1 Person  =========================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            1.ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.firstPerson?.first_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.firstPerson?.last_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสนักศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.firstPerson?.student_id
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เบอร์โทรศัพท์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.firstPerson?.phone
            }
          />
        </div>
      </div>
      {/* =========================== 2 erson  =========================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            2.ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.secondPerson?.first_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.secondPerson?.last_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสนักศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.secondPerson?.student_id
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เบอร์โทรศัพท์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.secondPerson?.phone
            }
          />
        </div>
      </div>
      {/* =========================== 3 Person  =========================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            3.ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.thirdPerson?.first_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.thirdPerson?.last_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสนักศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.thirdPerson?.student_id
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เบอร์โทรศัพท์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.thirdPerson?.phone
            }
          />
        </div>
      </div>
      {/* =========================== 4 Person  =========================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            4.ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.fourthPerson?.first_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.fourthPerson?.last_name
            }
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสนักศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.fourthPerson?.student_id
            }
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เบอร์โทรศัพท์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="-"
            defaultValue={
              internshipDetail?.CoStudentInternships?.fourthPerson?.phone
            }
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="2xl:px-56 xl:px-48 lg:px-36">
        <div className="flex flex-no-wrap items-center">
          <div className="w-full ">
            <div className="px-2">
              <h3 class="mt-10 text-center font-medium leading-tight text-4xl  text-sky-600">
                แบบฟอร์มฝึกประสบการณ์วิชาชีพ
              </h3>
              <form>
                <div className="bg-white rounded shadow mt-7 py-7">
                  {/* end */}
                  {/* นักศึกษาผู้ส่งข้อมูลแบบฟอร์ม */}
                  {Sender}
                  {/* ข้อมูลสถานที่ฝึกงาน */}
                  {InternshipInformation}
                  {/* นักศึกษาฝึกประสบการร่วม */}
                  {coInternshipStudents}
                </div>
              </form>

              <div className="mt-10 mb-10 flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                {status === "pending" ? (
                  <>
                    <button
                      onClick={(e) => {
                        handleReturn(internshipDetail?.Internships?.id);
                      }}
                      className="btn bg-red-400 hover:bg-red-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                    >
                      ส่งคืน
                    </button>

                    <button
                      onClick={(e) => {
                        handleConfirm(internshipDetail?.Internships?.id);
                      }}
                      className="btn btn-green transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                    >
                      อนุมัติ
                    </button>

                    <Link to="/director/internship/pending">
                      <button className="btn btn-sky rounded  transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[144px]  w-32 ">
                        กลับ
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        handleReturn(internshipDetail?.Internships?.id);
                      }}
                      className="btn btn-red transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-24"
                    >
                      ส่งคืน
                    </button>
                    <button
                      onClick={(e) => {
                        handleUnConfirm(internshipDetail?.Internships?.id);
                      }}
                      className="btn bg-yellow-400 hover:bg-yellow-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                    >
                      พิจารณาใหม่
                    </button>

                    <Link to="/director/internship/confirm">
                      <button className="btn btn-sky rounded  transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[144px]  w-32 ">
                        กลับ
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipsViews;
