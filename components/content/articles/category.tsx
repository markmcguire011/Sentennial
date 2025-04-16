import clsx from "clsx";

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
      style={{ backgroundColor: bg, opacity: 0.5 }}
      className={clsx(
        "text-l font-normal rounded-full px-3 py-1",
        bg === "#9dc8db" && "text-blue-500",
        bg === "#ddaee4" && "text-purple-500",
        bg === "#f1adaf" && "text-red-500",
        bg === "#ffda89" && "text-yellow-500",
        bg === "#9ad4bc" && "text-green-500"
      )}
    >
      {name}
    </h1>
  );
}
