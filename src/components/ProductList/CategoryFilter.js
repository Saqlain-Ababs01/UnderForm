// import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import ProductCatalogs from "./ProducCatalogs";
// import Pagination from "./Pagination";
// import { useDispatch } from "react-redux";
// import { fetchAllFilterProductsAsync } from "../../features/ProductList/ProductListSlice";

// const sortOptions = [
//   { name: "Best Rating", sort: "rating", order: "desc", current: false },
//   { name: "Price: Low to High", sort: "price", order:"asc" ,current: false },
//   { name: "Price: High to Low", sort: "price", order: "desc", current: false },
// ];

// const filters = [
//   {
//     id: "category",
//     name: "Category",
//     options: [
//       { value: "beauty", label: "Beauty" },
//       { value: "fragrances", label: "Fragrances" },
//       { value: "furniture", label: "Furniture" },
//       { value: "groceries", label: "Groceries" },
//     ],
//   },
//   {
//     id: "size",
//     name: "Size",
//     options: [
//       { value: "2l", label: "2L", checked: false },
//       { value: "6l", label: "6L", checked: false },
//       { value: "12l", label: "12L", checked: false },
//       { value: "18l", label: "18L", checked: false },
//       { value: "20l", label: "20L", checked: false },
//       { value: "40l", label: "40L", checked: true },
//     ],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function CategoryFilters() {
//   const dispatch = useDispatch();
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({});

//   const handleFilterSelect = (e, section, option) => {
//     let NewFilter = { ...selectedFilters, [section.id]: option.value };
//     setSelectedFilters(filters)
//     dispatch(fetchAllFilterProductsAsync(NewFilter));
//   };
//  const handleSort = (e, option) => {
//     let NewFilter = { ...selectedFilters, _sort: option.sort , _order: option.order};
//     setSelectedFilters(filters);
//     console.log("slected sort", filters);
//     dispatch(fetchAllFilterProductsAsync(NewFilter));
//   };
//   return (
//     <div className="bg-white">
//       <div>
//         {/* Mobile filter dialog */}
//         <Dialog
//           open={mobileFiltersOpen}
//           onClose={setMobileFiltersOpen}
//           className="relative z-40 lg:hidden"
//         >
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//           />

//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel
//               transition
//               className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
//             >
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon aria-hidden="true" className="size-6" />
//                 </button>
//               </div>

//               {/* Filters */}
//               <form className="mt-4 border-t border-gray-200">
//                 <h3 className="sr-only">Categories</h3>

//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-t border-gray-200 px-4 py-6"
//                   >
//                     <h3 className="-mx-2 -my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <PlusIcon
//                             aria-hidden="true"
//                             className="size-5 group-data-[open]:hidden"
//                           />
//                           <MinusIcon
//                             aria-hidden="true"
//                             className="size-5 [.group:not([data-open])_&]:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-6">
//                         {section.options.map((option, optionIdx) => (
//                           <div key={option.value} className="flex items-center">
//                             <input
//                               defaultValue={option.value}
//                               defaultChecked={option.checked}
//                               id={`filter-mobile-${section.id}-${optionIdx}`}
//                               onChange={(e) =>
//                                 handleFilterSelect(e, section, option)
//                               }
//                               name={`${section.id}[]`}
//                               type="checkbox"
//                               className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                             />
//                             <label
//                               htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                               className="ml-3 min-w-0 flex-1 text-gray-500"
//                             >
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               New Arrivals
//             </h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                   <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                     Sort
//                     <ChevronDownIcon
//                       aria-hidden="true"
//                       className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
//                     />
//                   </MenuButton>
//                 </div>

//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                 >
//                   <div className="py-1">
//                     {sortOptions.map((option) => (
//                       <MenuItem key={option.name}>
//                         <p
//                           href={option.href}
//                           onClick={(e)=>handleSort(e, option)}
//                           className={classNames(
//                             option.current
//                               ? "font-medium text-gray-900"
//                               : "text-gray-500",
//                             "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                           )}
//                         >
//                           {option.name}
//                         </p>
//                       </MenuItem>
//                     ))}
//                   </div>
//                 </MenuItems>
//               </Menu>

//               <button
//                 type="button"
//                 className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
//               >
//                 <span className="sr-only">View grid</span>
//                 <Squares2X2Icon aria-hidden="true" className="size-5" />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setMobileFiltersOpen(true)}
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon aria-hidden="true" className="size-5" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pb-24 pt-6">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//               {/* Filters */}
//               <form className="hidden lg:block">
//                 <h3 className="sr-only">Categories</h3>

//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-b border-gray-200 py-6"
//                   >
//                     <h3 className="-my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <PlusIcon
//                             aria-hidden="true"
//                             className="size-5 group-data-[open]:hidden"
//                           />
//                           <MinusIcon
//                             aria-hidden="true"
//                             className="size-5 [.group:not([data-open])_&]:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-4">
//                         {section.options.map((option, optionIdx) => (
//                           <div key={option.value} className="flex items-center">
//                             <input
//                               defaultValue={option.value}
//                               defaultChecked={option.checked}
//                               id={`filter-${section.id}-${optionIdx}`}
//                               name={`${section.id}[]`}
//                               type="checkbox"
//                               onChange={(e) =>
//                                 handleFilterSelect(e, section, option)
//                               }
//                               className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                             />
//                             <label
//                               htmlFor={`filter-${section.id}-${optionIdx}`}
//                               className="ml-3 text-sm text-gray-600"
//                             >
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>

//               <div className="lg:col-span-3">
//                 <ProductCatalogs />
//                 <Pagination />
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllFilterProductsAsync } from "../../features/ProductList/ProductListSlice";
import MobileFilterDialog from "./MobileFilterDialog";
import DesktopFilters from "./DeskTopFilters";
import SortMenu from "./SortFilter";
import ProductGrid from "./ProductGrid";
import { FunnelIcon } from "@heroicons/react/20/solid";

export default function CategoryFilters() {
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedSort, setSelectedSort] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  const [totalResults, setTotalResults] = useState(60);

  const handleFilterSelect = (e, sectionId, optionValue) => {
    console.log(e.target.checked);
    const newCategoryFilters = { ...selectedFilters };
    if (e.target.checked) {
      if (newCategoryFilters[sectionId]) {
        newCategoryFilters[sectionId].push(optionValue);
      } else {
        newCategoryFilters[sectionId] = [optionValue];
      }
    } else {
      const index = newCategoryFilters[sectionId].findIndex(
        (val) => val === optionValue
      );
      newCategoryFilters[sectionId].splice(index, 1);
    }
    setSelectedFilters(newCategoryFilters);
  };

  const handleSort = (sort, order) => {
    const newSortFilters = { _sort: sort, _order: order };
    setSelectedSort(newSortFilters);
  };
  console.log("selectedSort", selectedSort);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    const pagination = {page: currentPage, limit: resultsPerPage}
    dispatch(
      fetchAllFilterProductsAsync({
        filter: selectedFilters,
        sort: selectedSort,
        pagination
      })
    );
  }, [dispatch, selectedFilters, selectedSort, currentPage, resultsPerPage]);

  return (
    <div className="bg-white">
      <div>
        <MobileFilterDialog
          open={mobileFiltersOpen}
          setOpen={setMobileFiltersOpen}
          handleFilterSelect={handleFilterSelect}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <SortMenu handleSort={handleSort} />
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <DesktopFilters handleFilterSelect={handleFilterSelect} />
              <ProductGrid
                currentPage={currentPage}
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                handlePageChange={handlePageChange}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
