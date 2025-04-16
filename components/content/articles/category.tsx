import clsx from "clsx";
import { categoryColors } from "@/lib/constants";

export default function Category({ name }: { name: string }) {
  const color = name.toLowerCase().replace(" ", "-");

  var bg;

  for (const [attribute, value] of Object.entries(categoryColors)) {
    if (attribute === color) {
      bg = value;
    }
  }

  return (
    <h1
      style={{ backgroundColor: bg }}
      className={clsx(
        "text-l text-black opacity-60 font-normal rounded-full px-3 py-1",
      )}
    >
      {name}
    </h1>
  );
}
