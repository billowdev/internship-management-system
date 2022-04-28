import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { loadState } from "../../../helpers/Persist";
import {
  confirmInternship,
  loadInternshipDetail,
  returnInternship,
} from "../../../redux/actions/director/internship";
import { getInternshipDetail } from "../../../redux/selectors/director/internship";
import { Link } from "react-router-dom";

const InternshipsViews = () => {
  const dispatch = useDispatch();
  const { id, status } = useParams();
  let internshipDetail = useSelector(getInternshipDetail);
  // internshipDetail = internshipDetail?.resp
  // const [internshipDetail, setInternshipDetail] = useState(
  //   loadState("internship-detail")
  // );
  const [coStudent, setCoStudent] = useState([]);
  const [company, setCompany] = useState([]);
  const [companyAddress, setCompanyAddress] = useState([]);
  const [internship, setInternship] = useState([]);
  const [hometownAddr, setHometownAddr] = useState([]);
  const [presentAddr, setPresentAddr] = useState([]);
  const [student, setStudent] = useState([]);

  const handleConfirm = (id) => {
    dispatch(confirmInternship(id));
  };
  const handleReturn = (id) => {
    dispatch(returnInternship(id));
  };
  useEffect(() => {
    dispatch(loadInternshipDetail(id));
  }, [dispatch]);

  useEffect(() => {
    // // let internshipDetail = loadState("internship-detail");
    // setCoStudent(internshipDetail?.CoStudentInternships);
    // setCompany(internshipDetail?.Companies?.company);
    // setCompanyAddress(internshipDetail?.Companies?.companyAddress);
    // setInternship(internshipDetail?.Internships);
    // setHometownAddr(internshipDetail?.hometownAddr);
    // setPresentAddr(internshipDetail?.presentAddr);
    // setStudent(internshipDetail?.student);
    // console.log(internshipDetail);
  }, []);

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
              placeholder="ชื่อ-นามสุกล"
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
              placeholder="ชื่อ-นามสุกล"
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
              placeholder="รหัสนักศึกษา"
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
              placeholder="เบอร์โทรศัพท์"
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
              placeholder="exsample@gmail.com"
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
            placeholder="บริษัท โค้ดทูแพนด้า จำกัด"
            disabled
            defaultValue={internshipDetail?.Companies?.company?.name}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถูมิภาค
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            disabled
            placeholder="บริษัท โค้ดทูแพนด้า จำกัด"
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
            placeholder="งานที่เกี่ยวข้อง"
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
            placeholder="หัวหน้าฝ่ายบุคคล"
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
            placeholder="ผู้ติดต่อ"
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
            placeholder="ตำแหน่ง"
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
            placeholder="รหัสไปรษณีย์"
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
            placeholder="ชื่อ"
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
            placeholder="ชื่อ-นามสุกล"
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
            placeholder="รหัสนักศึกษา"
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
            placeholder="เบอร์โทรศัพท์"
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
            placeholder="ชื่อ"
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
            placeholder="ชื่อ-นามสุกล"
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
            placeholder="รหัสนักศึกษา"
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
            placeholder="เบอร์โทรศัพท์"
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
            placeholder="ชื่อ"
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
            placeholder="ชื่อ-นามสุกล"
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
            placeholder="รหัสนักศึกษา"
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
            placeholder="เบอร์โทรศัพท์"
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
            placeholder="ชื่อ"
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
            placeholder="ชื่อ-นามสุกล"
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
            placeholder="รหัสนักศึกษา"
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
            placeholder="เบอร์โทรศัพท์"
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
                    <Link to="/director/internship/pending">
                      <button className="btn btn-cancel rounded transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[144px]  w-full ">
                        กลับ
                      </button>
                    </Link>
                    <Link to="/director/internship/pending">
                      <button className="btn btn-sky transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                        ส่งคืน
                      </button>
                    </Link>
                    <Link to="/director/internship/pending">
                      <button
                        onClick={(e) => {
                          handleConfirm(internshipDetail?.Internships?.id);
                        }}
                        className="btn btn-green transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                      >
                        อนุมัติ
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/director/internship/confirm">
                      <button className="btn btn-cancel rounded transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[144px]  w-full ">
                        กลับ
                      </button>
                    </Link>
                    <Link to="/director/internship/confirm">
                      <button
                        onClick={(e) => {
                          handleReturn(internshipDetail?.Internships?.id);
                        }}
                        className="btn btn-sky transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                      >
                        พิจารณาใหม่
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
