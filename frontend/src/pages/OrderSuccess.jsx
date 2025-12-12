import Layout from "../components/Layout";

export default function OrderSuccess() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-green-600">🎉 Yay! Order Placed</h1>
        <p className="mt-4 text-lg">Your delicious food is being prepared and will be delivered soon.</p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920340.png"
          className="w-40 mx-auto mt-6 animate-bounce"
        />

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </Layout>
  );
}
