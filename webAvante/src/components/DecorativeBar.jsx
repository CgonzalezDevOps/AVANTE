function DecorativeBar() {
  const colors = [
    'bg-amber-400',
    'bg-green-400',
    'bg-violet-400',
    'bg-orange-400',
    'bg-lime-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-sky-400',
    'bg-pink-400',
    'bg-blue-400',
  ];

  return (
    <div className="w-full h-2 flex">
      {Array.from({ length: Math.ceil(window.innerWidth / 200) }).flatMap((_, i) =>
        colors.map((color, index) => (
          <div key={`${i}-${index}`} className={`h-full w-10 ${color}`}></div>
        ))
      )}
    </div>
  );
}

export default DecorativeBar;