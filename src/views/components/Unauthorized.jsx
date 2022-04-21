import { useNavigate } from "react-router-dom";


const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="wrapper text-center mt-36">
    
      <h1>Unauthorized</h1>
      <br />
      <p>คุณไม่มีสิทธิ์ในการเข้าถึงหน้านี้</p>
      <p>You do not have access to the requested page.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Go Back</button>
      </div>
    </section>
  );
};

export default Unauthorized;
