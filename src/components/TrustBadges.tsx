export default function TrustBadges() {
  const badges = [
    { icon: '🏅', label: 'ISO Certified', sub: 'Quality Management' },
    { icon: '🏥', label: 'JCI Accredited', sub: 'International Healthcare' },
    { icon: '👤', label: '5,000+ Patients', sub: 'Successfully Treated' },
    { icon: '⭐', label: 'Google 4.9★', sub: 'Verified Reviews' },
    { icon: '👨‍⚕️', label: 'Board Certified', sub: 'Surgeons' },
    { icon: '🌍', label: '40+ Countries', sub: 'Patients Worldwide' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
        >
          <span className="text-3xl mb-2">{badge.icon}</span>
          <p className="font-bold text-gray-900 text-sm">{badge.label}</p>
          <p className="text-gray-500 text-xs mt-0.5">{badge.sub}</p>
        </div>
      ))}
    </div>
  );
}
