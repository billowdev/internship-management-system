import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const LoginUpdate = () => {
  const { id, role } = useParams();
  useEffect(() => {
    console.log(id, role);
  }, []);

  const studentSection = (
    <div>
      <h1>แก้ไขข้อมูลผู้ใช้ : นักศึกษา</h1>
    </div>
  );
  const directorSection = (
    <div>
      <h1>แก้ไขข้อมูลผู้ใช้ : คณะกรรมการฝึกประสบการณ์วิชาชีพ</h1>
    </div>
  );
  const adminSection = (
    <div>
      <h1>แก้ไขข้อมูลผู้ใช้ : ผู้ดูแลระบบ</h1>
    </div>
  );
  return (
    <>
      {role === "student" ? (
        <div>
          <h1>แก้ไข {role}</h1>
          {studentSection}
        </div>
      ) : (
        <></>
      )}
      {role === "admin" ? (
        <div>
          <h1>แก้ไข {role}</h1>
          {adminSection}
        </div>
      ) : (
        <></>
      )}
      {role === "director" ? (
        <div>
          <h1>แก้ไข {role}</h1>
          {directorSection}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginUpdate;
