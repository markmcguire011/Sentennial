export default function Category({ name }: { name: string }) {
  const colorList = {
    psychology: "#9dc8db",
    "computer-science": "#ddaee4",
    history: "#f1adaf",
    architecture: "#ffda89",
    philosophy: "#9ad4bc",
  };

  const color = name.toLowerCase().replace(" ", "-");

  var bg;

  for (const [attribute, value] of Object.entries(colorList)) {
    if (attribute === color) {
      bg = value;
    }
  }

  return (
    <h1
      style={{ backgroundColor: bg }}
      className={`text-l opacity-75 rounded-full px-3 py-1`}
    >
      {name}
    </h1>
  );
}
