export default function LegitLogin() {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Legitimate Login</h2>
      <form action="/dashboard" method="POST" className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
