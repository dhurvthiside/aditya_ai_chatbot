export default function Explanation() {
  return (
    <div className="max-w-2xl bg-yellow-50 p-6 rounded-2xl shadow-lg text-gray-800 space-y-3">
      <h2 className="text-lg font-bold text-yellow-700">How This Works</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>The legit form is what users see and expect.</li>
        <li>
          The hidden form is styled off-screen or invisible, but many password
          managers still autofill it.
        </li>
        <li>
          In real-world attacks, this hidden form would capture and exfiltrate
          saved credentials.
        </li>
        <li>
          Mitigation: Use password managers that warn before autofill and
          implement Content Security Policies.
        </li>
      </ul>
    </div>
  );
}
