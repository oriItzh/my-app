export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">SheepBluff</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">How to Play</a>
          <a href="#" className="hover:text-blue-400">Tournaments</a>
          <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
