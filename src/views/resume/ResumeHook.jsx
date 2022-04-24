import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "../../helpers/Persist";

const Resumehook = () => {
  const dispatch = useDispatch();
  
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    setStudentData(loadState("profile"));
  }, []);

  return { studentData };
};

export default Resumehook;
