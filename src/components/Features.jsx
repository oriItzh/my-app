import { FaUsers, FaTrophy, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

export function Features() {
  return (
<section className="py-16 px-4">
  <h3 className="text-3xl font-bold text-center text-white mb-12">Why Play With Us?</h3>
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <Feature icon={<FaUsers />} title="Play with Friends" text="Create private tables and invite your friends instantly." />
    <Feature icon={<FaTrophy />} title="Daily Tournaments" text="Compete in exciting tournaments every day." />
    <Feature icon={<FaShieldAlt />} title="Fair & Secure" text="Enjoy a safe and secure playing environment." />
    <Feature icon={<FaMobileAlt />} title="Multi-device Support" text="Play from desktop, tablet or mobile seamlessly." />
  </div>
</section>

  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
      <div className="text-4xl text-yellow-400 mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

