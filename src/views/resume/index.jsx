import React from "react";
import ResumeHook from "./ResumeHook";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Index = () => {
  const { handleFormSave } = ResumeHook();
  const {
    firstName,
    setFirstName,
    setLastName,
    lastName,
    phone,
    setPhone,

    idCard,
    setIdCard,
    religion,
    setReligion,
    birthDate,
    setBirthDate,
    fatherName,
    setFatherName,
    fatherJob,
    setFatherJob,
    motherName,
    setMotherName,
    motherJob,
    setMotherJob,

    hometownHouseNumber,
    setHometownHouseNumber,
    hometownRoad,
    setHometownRoad,
    hometownSubDistrict,
    setHometownSubDistrict,
    hometownDistrict,
    setHometownDistrict,
    hometownProvince,
    setHometownProvince,
    hometownPostCode,
    setHometownPostCode,

    presentHouseNumber,
    setPresentHouseNumber,
    presentRoad,
    setPresentRoad,
    presentSubDistrict,
    setPresentSubDistrict,
    presentDistrict,
    setPresentDistrict,
    presentProvince,
    setPresentProvince,
    presentPostCode,
    setPresentPostCode,

    educationData1,
    setEducationData1,
    educationData2,
    setEducationData2,
    educationData3,
    setEducationData3,

    handleEducation1FormChange,
    handleEducation2FormChange,
    handleEducation3FormChange,
  } = ResumeHook();

  const privateData = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        1. ข้อมูลส่วนตัว
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อ"
            defaultValue={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อ-นามสุกล"
            defaultValue={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสประจำตัวประชาชน
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสประจำตัวประชาชน"
            defaultValue={idCard}
            onChange={(e) => {
              setIdCard(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            วันเดือนปีเกิด
          </p>
          <DatePicker
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="Select date"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ศาสนา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ศาสนา"
            defaultValue={religion}
            onChange={(e) => {
              setReligion(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อบิดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อบิดา"
            defaultValue={fatherName}
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อาชีพบิดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อาชีพบิดา"
            defaultValue={fatherJob}
            onChange={(e) => {
              setFatherJob(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อมารดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อมารดา"
            defaultValue={motherName}
            onChange={(e) => {
              setMotherName(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อาชีพมารดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อาชีพมารดา"
            defaultValue={motherJob}
            onChange={(e) => {
              setMotherJob(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            โทร
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="โทร"
            defaultValue={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const hometownDataSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        2. ภูมิลำเนาเดิม
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            บ้านเลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={hometownHouseNumber}
            onChange={(e) => {
              setHometownHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={hometownRoad}
            onChange={(e) => {
              setHometownRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล / แขวง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={hometownSubDistrict}
            onChange={(e) => {
              setHometownSubDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อำเภอ"
            defaultValue={hometownDistrict}
            onChange={(e) => {
              setHometownDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="จังหวัด"
            defaultValue={hometownProvince}
            onChange={(e) => {
              setHometownProvince(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={hometownPostCode}
            onChange={(e) => {
              setHometownPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const presentDataSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        3. ที่อยู่ปัจจุบัน
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            บ้านเลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentRoad}
            onChange={(e) => {
              setPresentRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล / แขวง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentSubDistrict}
            onChange={(e) => {
              setPresentSubDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อำเภอ"
            defaultValue={presentDistrict}
            onChange={(e) => {
              setPresentDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="จังหวัด"
            defaultValue={presentProvince}
            onChange={(e) => {
              setPresentProvince(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );

  const educationSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        4. ประวัติการศึกษา
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ระดับการศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อสถานศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อสถานศึกษา"
            defaultValue={educationData1?.academy}
            onChange={handleEducation1FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เกรดเฉลี่ย
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.gpa}
            onChange={handleEducation1FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ระดับการศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData2?.level}
            onChange={handleEducation2FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อสถานศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อสถานศึกษา"
            defaultValue={educationData2?.academy}
            onChange={handleEducation2FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เกรดเฉลี่ย
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData2?.gpa}
            onChange={handleEducation2FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ระดับการศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData3?.level}
            onChange={handleEducation3FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อสถานศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อสถานศึกษา"
            defaultValue={educationData3?.academy}
            onChange={handleEducation3FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เกรดเฉลี่ย
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData3?.gpa}
            onChange={handleEducation3FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const experienceSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        5 ประสบการณ์ทำงาน
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ข้อมูลการทำงาน ประสบการณ์ทำงาน
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );

  const gpaSection = (
    <div className="mt-10 px-7">
      <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ปัจจุบันศึกษาชั้นปีที่ 4 เกรดเฉลี่ยปัจจุบัน
          </p>
          <input
            className="w-24 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            หัวข้อโครงงานวิทยาการคอมพิวเตอร์ / โครงงานเทคโนโลยีสารสนเทศเรื่อง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const skillSection = (
    <div className="mt-10 px-7">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 mt-7 ">
        <p className="text-lg font-semibold leading-tight text-gray-800">
          6. ความสามารถพิเศษ
        </p>
        <p className="text-lg font-semibold leading-tight text-gray-800 sm0:hidden  md:grid">
          7. ความสนใจพิเศษในด้านการขอรับการฝึกงานจากหน่วยงาน
        </p>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ข้อมูลการทำงาน ประสบการณ์ทำงาน
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <p className="text-lg font-semibold leading-tight text-gray-800 lg:hidden md:hidden">
          7. ความสนใจพิเศษในด้านการขอรับการฝึกงานจากหน่วยงาน
        </p>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ข้อมูลการทำงาน ประสบการณ์ทำงาน
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const interestSection = <div className="mt-10 px-7"></div>;

  const contactPersonSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        8. บุคคลที่สามารถติดต่อได้
      </p>
        
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 "> 
      <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ความสัมพันธุ์กับนักศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            บ้านเลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentRoad}
            onChange={(e) => {
              setPresentRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล / แขวง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentSubDistrict}
            onChange={(e) => {
              setPresentSubDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อำเภอ"
            defaultValue={presentDistrict}
            onChange={(e) => {
              setPresentDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="จังหวัด"
            defaultValue={presentProvince}
            onChange={(e) => {
              setPresentProvince(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
      <div>
          <p className="text-base font-medium leading-none text-gray-800">
            โทร
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="โทร"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="2xl:px-56 xl:px-48 lg:px-36">
        <div className="flex flex-no-wrap items-center">
          <div className="w-full ">
            <div className="py-4 px-2">
              <form onSubmit={(e) => handleFormSave(e)}>
                <div className="bg-white rounded shadow mt-7 py-7">
                  {/* end */}
                  {/* ข้อมูลส่วนตัว */}
                  {privateData}
                  {/* ภูมิลำเนา */}
                  {hometownDataSection}
                  {/* ที่อยู่ปัจจุบัน */}
                  {presentDataSection}
                  {/* ประวัติการศึกษา */}
                  {educationSection}
                  {/* ประสบการณ์การทำงาน */}
                  {experienceSection}
                  {/* ข้อมูลผลการเรียน */}
                  {gpaSection}
                  {/* ความสามารถพิเศษ */}
                  {skillSection}
                  {/* ความสนใจ */}
                  {interestSection}
                  {/* บุคคลที่สามารถติดต่อได้ */}
                  {contactPersonSection}

                  <hr className="h-[1px] bg-gray-100 my-14" />
                  <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                    <button className="btn btn-cancel rounded transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[95px]  w-full ">
                      Cancel
                    </button>

                    <button
                      // onClick={(e) => {
                      //   handleFormSave(e);
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
};

export default Index;
