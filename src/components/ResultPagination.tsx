import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

function ResultPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const nextPage = () => handlePageChange(currentPage + 1);
  const prevPage = () => handlePageChange(currentPage - 1);


  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={prevPage}>Previous</PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePageChange(1)}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextPage}>Next</PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default ResultPagination;
