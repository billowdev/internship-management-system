import { useNavigate } from "react-router-dom";


const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (


    <div className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-gray-200
    to-gray-100
  ">
  <div className="px-40 py-20 bg-white rounded-md shadow-xl">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-sky-600 text-9xl">403</h1>
      <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span className="text-red-500">Unauthorized!</span> Permission denied
      </h6>
      <p className="mb-8 text-center text-gray-500 md:text-lg">
      คุณไม่มีสิทธิ์ในการเข้าถึงหน้านี้
      </p>
      <p className="mb-8 text-center text-gray-500 md:text-lg">
      You do not have access to the requested page.
      </p>
      <button className="px-6 py-2 text-sm font-semibold text-sky-800 bg-blue-100" onClick={goBack}>Go Back</button>
    </div>
  </div>
</div>

  );
};

export default Unauthorized;
