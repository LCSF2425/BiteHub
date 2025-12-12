import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-sm mx-auto mt-10 shadow p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Login Required</h2>

        <button
          onClick={() => {
            login();
            navigate("/cart");
          }}
          className="bg-orange-500 text-white w-full py-2 rounded"
        >
          Continue as Guest
        </button>
      </div>
    </Layout>
  );
}
