import Link from "next/link";
import { Article } from "@/interfaces/article";
import { formatDate } from "@/lib/utils";
import SeriesBadge from "@/components/ui/series-badge";

type Props = {
  data: Article;
  seriesInfo?: {
    id: string;
    title: string;
    position: number;
    total: number;
  };
};

const colorList = {
  psychology: "#9dc8db",
  "computer-science": "#ddaee4",
  history: "#f1adaf",
  architecture: "#ffda89",
  philosophy: "#9ad4bc",
};

export default function ArticleButton({ data, seriesInfo }: Props) {
  return (
    <div>
      {seriesInfo && (
        <div className="mb-2">
          <SeriesBadge
            seriesId={seriesInfo.id}
            seriesTitle={seriesInfo.title}
            position={seriesInfo.position}
            total={seriesInfo.total}
          />
        </div>
      )}
      <Link
        href={`/articles/${data.slug}`}
        className="flex flex-col w-full items-center"
      >
        <div className="group bg-white flex flex-col justify-between rounded w-full shadow-sm hover:shadow-md border">
          <div className="flex justify-between px-6 pt-6">
            <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">
              {data.title}
            </h1>
            <svg
              className="md:flex hidden group-hover:fill-brand-color"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
            </svg>
          </div>
          <div className="flex px-6 pb-3 flex-row justify-between items-center">
            <h1 className="text-lg text-slate-400">{data.subtitle}</h1>
            <span className="font-mono text-sm text-slate-400 sm:flex hidden">
              {formatDate(data.date)}
            </span>
          </div>
          <div className="flex">
            {data.categories.map((category) => {
              const name = category.toLowerCase().replace(" ", "-");

              var color;

              for (const [attribute, value] of Object.entries(colorList)) {
                if (attribute === name) {
                  color = value;
                }
              }

              return (
                <div
                  key={data.slug + category}
                  style={{
                    backgroundColor: color,
                    opacity: 0.4,
                  }}
                  className="h-2 w-full "
                ></div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
