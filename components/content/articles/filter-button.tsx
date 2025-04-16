import clsx from "clsx";

type Props = {
  category: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function FilterButton({ category, isSelected, onClick }: Props) {
  // Get slug for mapping
  const categorySlug = category.toLowerCase().replace(" ", "-");

  // Color mapping
  const colorMap: Record<
    string,
    { bg: string; hover: string; active: string; text: string }
  > = {
    history: {
      bg: "bg-history",
      hover: "hover:bg-history/40",
      active: "active:bg-history/90",
      text: "text-white",
    },
    "computer-science": {
      bg: "bg-computer-science",
      hover: "hover:bg-computer-science/40",
      active: "active:bg-computer-science/90",
      text: "text-white",
    },
    philosophy: {
      bg: "bg-philosophy",
      hover: "hover:bg-philosophy/40",
      active: "active:bg-philosophy/90",
      text: "text-white",
    },
    architecture: {
      bg: "bg-architecture",
      hover: "hover:bg-architecture/40",
      active: "active:bg-architecture/90",
      text: "text-white",
    },
    psychology: {
      bg: "bg-psychology",
      hover: "hover:bg-psychology/40",
      active: "active:bg-psychology/90",
      text: "text-white",
    },
  };

  const colors = colorMap[categorySlug] || {
    bg: "bg-gray-800",
    hover: "hover:bg-gray-700",
    active: "active:bg-gray-900",
    text: "text-white",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative py-2 px-4 rounded-full font-normal transition-all duration-200 text-md",
        "transform active:scale-95",
        {
          "bg-white text-brand-dark opacity-75": !isSelected,
          [colors.hover]: !isSelected,
          "shadow-md": !isSelected,

          [colors.bg]: isSelected,
          [colors.text]: isSelected,
          "shadow-inner": isSelected,
        }
      )}
    >
      {category}
    </button>
  );
}
