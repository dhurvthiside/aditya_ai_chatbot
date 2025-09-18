import LegitLogin from "./components/LegitLogin";
import HiddenPhish from "./components/HiddenPhish";
import Explanation from "./components/Explanation";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">
        Autofill Vulnerability Demo
      </h1>

      {/* Legitimate login form */}
      <LegitLogin />

      {/* Hidden malicious form */}
      <HiddenPhish />

      {/* Explanation Section */}
      <Explanation />
    </div>
  );
}
