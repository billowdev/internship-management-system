import {useEffect, useState} from "react";

function Resume() {
  useEffect(() => {

  })
 
  const [name, setName] = useState("Akkarapon Phikulsri");
  const [studentId, setStudentId] = useState("63102105112");
  const [program, setProgram] = useState("วิทยาการคอมพิวเตอร์");
  const [phone, setPhone] = useState("0983213212");

  const [internCompanyName, setInternCompanyName] = useState(
    "บริษัท โค้ดทูแพนด้า จำกัด"
  );
  const [intermType, setintermType] = useState("ตะวันออกเฉียงเหนือ");
  const [internWork, setInternWork] = useState("developer");
  const [internContactWith, setInternContactWith] = useState("lacakp");
  const [internContactWithPosition, setInternContactWithPosition] =
    useState("HR");
  const [internContactWithPhone, setInternContactWithPhone] = useState("0983271231");
  const [internProposeTo, setInternProposeTo] = useState("หัวหน้างานฝ่ายบุคคล");
  const [internPhone, setInternPhone] = useState("0983271232");
  const [internNumber, setInternNumber] = useState("111");
  const [internRoad, setInternRoad] = useState("12");
  const [internSubDistrict, setInternSubDistrict] = useState("ธาตุเชิงชุม");
  const [internDistrict, setInternDistrict] = useState("เมือง");
  const [internProvince, setInternProvince] = useState("สกลนคร");
  const [internPostCode, setInternPostCode] = useState("47000");

  // ---- Drop Down Meny for company branch or region ---
  const showDropDownMenu = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext = (el) => {
    const targetText = el.target.innerText;
    setintermType(targetText);
    document.getElementById("drop-down-content-setter").innerText = targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");
  };
  // ---- Drop Down Meny for company branch or region ---

  // ---- Drop Down Meny for fild of study ---
  const showDropDownMenuProgram = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  
  const swaptextProgram = (el) => {
    const targetText = el.target.innerText;
    setProgram(targetText);
    document.getElementById("drop-down-content-setter-program").innerText = targetText;
    document.getElementById("drop-down-div-program").classList.toggle("hidden");
  };
  // ---- end  Drop Down Meny for fild of study ----

  // const showDropDownMenuOne = (el) => {
  //   el.target.parentElement.children[1].classList.toggle("hidden");
  // };
  // function swaptextone(el) {
  //   const targetText = el.target.innerText;
  //   document.getElementById("drop-down-content-setter-one").innerText =
  //     targetText;
  //   document.getElementById("drop-down-div-one").classList.toggle("hidden");
  // }

  const handleSave = (e) => {
    e.preventDefault()
    const senderData = { name, studentId, program, phone };
    const internData = {
      intermType,
      internWork,
      internContactWith,
      internContactWithPosition,
      internContactWithPhone,
      internProposeTo,
      internPhone,
      internNumber,
      internRoad,
      internSubDistrict,
      internDistrict,
      internProvince,
      internPostCode,
    };
    console.log(internData, senderData);
  };

  return (
    <>
 <div className="2xl:px-56 xl:px-48 lg:px-36">
        <div className="flex flex-no-wrap items-center">
          <div className="w-full ">
            <div className="py-4 px-2">
              <form onSubmit={(e)=>handleSave(e)}>
              <div className="bg-white rounded shadow mt-7 py-7">
                {/* end */}

                {/* =========================== sender intern splace information  =========================== */}
                <div className="mt-10 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    1. ข้อมูลส่วนตัว
                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        ชื่อ - นามสุกล
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ชื่อ-นามสุกล"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        required
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
                        defaultValue={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        วันเดือนปีเกิด
                      </p>
                     <h1>
                       [ใช้ Date Picker]
                     </h1>
                      {/* <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เบอร์โทรศัพท์"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      /> */}
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        สาขาวิชา
                      </p>
                      {/*-Dropdown*/}
                      <div className="relative top-1 ">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <button
                            onClick={showDropDownMenuProgram}
                            className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
                          >
                            <span
                              className="pr-4 text-sm font-medium text-gray-600"
                              id="drop-down-content-setter-program"
                            >
                              วิทยาการคอมพิวเตอร์
                            </span>
                            <svg
                              id="rotate"
                              className="absolute z-10 cursor-pointer right-5"
                              width={10}
                              height={6}
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 0.75L5 5.25L9.5 0.75"
                                stroke="#4B5563"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          <div
                            className="absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                            id="drop-down-div-program"
                          >
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextProgram}
                            >
                              วิทยาการคอมพิวเตอร์
                            </p>

                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextProgram}
                            >
                              เทคโนโลยีสารสนเทศ
                            </p>
                          </div>
                        </div>
                        {/* end */}
                      </div>
                      {/* end */}
                    </div>
                  </div>
                </div>

                {/* =========================== intern splace information  =========================== */}
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
                        defaultValue={internCompanyName}
                        onChange={(e) => setInternCompanyName(e.target.value)}
                      />
                      <p className="mt-3 text-xs leading-3 text-gray-600"></p>
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        สังกัดภาค
                      </p>
                      {/*-Dropdown*/}
                      <div className="relative top-1 ">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <button
                            onClick={showDropDownMenu}
                            className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
                          >
                            <span
                              className="pr-4 text-sm font-medium text-gray-600"
                              id="drop-down-content-setter"
                            >
                              รัฐบาล
                            </span>
                            <svg
                              id="rotate"
                              className="absolute z-10 cursor-pointer right-5"
                              width={10}
                              height={6}
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 0.75L5 5.25L9.5 0.75"
                                stroke="#4B5563"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <div
                            className="absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                            id="drop-down-div"
                          >
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptext}
                            >
                              เอกชน
                            </p>

                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptext}
                            >
                              รัฐวิสาหกิจ
                            </p>
                          
                          </div>
                        </div>
                        {/* end */}
                      </div>
                      {/* end */}
                    </div>
                  </div>

                  <div className="grid w-full grid-cols-1 sm2:grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        กิจกรรมหลักของหน่วยงานที่เกี่ยวข้องกับคอมพิวเตอร์
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="งานที่เกี่ยวข้อง"
                        defaultValue={internWork}
                        onChange={(e) => setInternWork(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        ติดต่อสถานที่ฝึกงานกับ
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ผู้ติดต่อ"
                        defaultValue={internContactWith}
                        onChange={(e) => setInternContactWith(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        ตำแหน่ง
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ตำแหน่ง"
                        defaultValue={internContactWithPosition}
                        onChange={(e) =>
                          setInternContactWithPosition(e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        เบอร์ติดต่อ
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เบอร์ติดต่อ"
                        defaultValue={internPhone}
                        onChange={(e) => setInternContactWithPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        การเสนอหนังสือความอนุเคราะห์ต้องเสนอต่อ
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="หัวหน้าฝ่ายบุคคล"
                        defaultValue={internProposeTo}
                        onChange={(e) => setInternProposeTo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-7 mt-3 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        เลขที่
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เลขที่"
                        defaultValue={internNumber}
                        onChange={(e) => setInternNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        ถนน
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ตำแหน่ง"
                        defaultValue={internRoad}
                        onChange={(e) => setInternRoad(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        ตำบล
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ตำบล"
                        defaultValue={internSubDistrict}
                        onChange={(e) => setInternSubDistrict(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        อำเภอ
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="อำเภอ"
                        defaultValue={internDistrict}
                        onChange={(e) => setInternDistrict(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-7 mt-3 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        จังหวัด
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="จังหวัด"
                        defaultValue={internProvince}
                        onChange={(e) => setInternProvince(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        รหัสไปรษณีย์
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="รหัสไปรษณีย์"
                        defaultValue={internPostCode}
                        onChange={(e) => setInternPostCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* =========================== intern with other student information  =========================== */}
                <div className="mt-10 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    พร้อมด้วยนักศึกษา
                  </p>
                  {/* =========================== 1 Person  =========================== */}
                  <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        1.ชื่อ-นามสกุล
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ชื่อ-นามสุกล"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
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
                        defaultValue={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        เบอร์โทรศัพท์
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เบอร์โทรศัพท์"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* =========================== 2 erson  =========================== */}
                  <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        2.ชื่อ-นามสกุล
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ชื่อ-นามสุกล"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
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
                        defaultValue={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        เบอร์โทรศัพท์
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เบอร์โทรศัพท์"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* =========================== 3 Person  =========================== */}
                  <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        3.ชื่อ-นามสกุล
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ชื่อ-นามสุกล"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
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
                        defaultValue={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        เบอร์โทรศัพท์
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เบอร์โทรศัพท์"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* =========================== 4 Person  =========================== */}
                  <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        4.ชื่อ-นามสกุล
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="ชื่อ-นามสุกล"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
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
                        defaultValue={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        เบอร์โทรศัพท์
                      </p>
                      <input
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="เบอร์โทรศัพท์"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <hr className="h-[1px] bg-gray-100 my-14" />
                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                  <button className="btn btn-cancel rounded transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[95px]  w-full ">
                    Cancel
                  </button>
                  <button
                    // onClick={(e) => {
                    //   handleSave();
                    // }}
                    id="submit"
                    type="submit"
                    className="btn btn-sky transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                  >
                    Save Changes
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Resume;
