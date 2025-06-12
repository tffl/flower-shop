import { PaginationProps } from "../../types/types";
import { Button } from "../UI/Button/Button";
import './pagination.css'

export const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <Button
        className="pagination__btn pagination__btn-prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        prev
      </Button>
      <span>
        Страница {currentPage} из {totalPages}
      </span>
      <Button
        className="pagination__btn pagination__btn-next"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        next
      </Button>
    </div>
  );
};