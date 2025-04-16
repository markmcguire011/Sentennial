import PaginationArrow from "@/components/ui/pagination-arrow";

type Props = {
  currentPage: number;
  totalPages: number;
  createPageURL: (pageNumber: number | string) => string;
};

export default function Pagination({
  currentPage,
  totalPages,
  createPageURL,
}: Props) {
  return (
    <div className="flex justify-between pb-10">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}
