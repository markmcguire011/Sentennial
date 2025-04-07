import Link from "next/link";

type Props = {
  seriesId: string;
  seriesTitle: string;
  position: number;
  total: number;
};

export default function SeriesBadge({
  seriesId,
  seriesTitle,
  position,
  total,
}: Props) {
  return (
    <Link
      href={`/series/${seriesId}`}
      className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-brand-color/10 text-brand-color hover:bg-brand-color/20 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
      <span>
        Part {position} of {total} in{" "}
        <span className="font-medium">{seriesTitle}</span>
      </span>
    </Link>
  );
}
