import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          Bitehub
        </Link>
        <Link
          to="/cart"
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Cart
        </Link>
      </header>

      <main className="max-w-7xl mx-auto p-4">{children}</main>
    </>
  );
}
