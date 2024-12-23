import ProductCatalogs from "./ProducCatalogs";
import Pagination from "./Pagination";

export default function ProductGrid({
  currentPage,
  totalResults,
  resultsPerPage,
  handlePageChange,
}) {
  return (
    <div className="lg:col-span-3">
      <ProductCatalogs />
      <Pagination
        currentPage={currentPage}
        totalResults={totalResults}
        resultsPerPage={resultsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
