export default function Confirmation() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
      <p>Your order has been successfully placed.</p>
      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded"
        onClick={() => window.location.href = "/menu"}
      >
        Back to Menu
      </button>
    </div>
  );
}
