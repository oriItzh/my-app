export function HeroBanner() {
  return (
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
  <div className="text-center md:text-left space-y-4">
    <h1 className="text-4xl md:text-5xl font-bold">Play Poker Anytime, Anywhere</h1>
    <p className="text-lg">Join thousands of players. No downloads needed.</p>
    <div className="flex gap-4 justify-center md:justify-start">
      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">
        Play Now
      </button>
      <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
        Learn How to Play
      </button>
    </div>
  </div>
  <img
    src="/images/hero-poker-table.png"
    alt="Poker table"
    className="w-full max-w-md rounded-xl shadow-lg"
  />
</div>

  );
}
