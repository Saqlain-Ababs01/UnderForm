// import React from "react";
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
// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "white", label: "White", checked: false },
//       { value: "beige", label: "Beige", checked: false },
//       { value: "blue", label: "Blue", checked: true },
//       { value: "brown", label: "Brown", checked: false },
//       { value: "green", label: "Green", checked: false },
//       { value: "purple", label: "Purple", checked: false },
//     ],
//   },
//   {
//     id: "category",
//     name: "Category",
//     options: [
//       { value: "new-arrivals", label: "New Arrivals", checked: false },
//       { value: "sale", label: "Sale", checked: false },
//       { value: "travel", label: "Travel", checked: true },
//       { value: "organization", label: "Organization", checked: false },
//       { value: "accessories", label: "Accessories", checked: false },
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

// const Filters = () => {
//   return (
//     <div>
//       <Dialog
//         open={mobileFiltersOpen}
//         onClose={setMobileFiltersOpen}
//         className="relative z-40 lg:hidden"
//       >
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//         />

//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel
//             transition
//             className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
//           >
//             <div className="flex items-center justify-between px-4">
//               <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//               <button
//                 type="button"
//                 onClick={() => setMobileFiltersOpen(false)}
//                 className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>

//             {/* Filters */}
//             <form className="mt-4 border-t border-gray-200">
//               <h3 className="sr-only">Categories</h3>

//               {filters.map((section) => (
//                 <Disclosure
//                   key={section.id}
//                   as="div"
//                   className="border-t border-gray-200 px-4 py-6"
//                 >
//                   <h3 className="-mx-2 -my-3 flow-root">
//                     <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                       <span className="font-medium text-gray-900">
//                         {section.name}
//                       </span>
//                       <span className="ml-6 flex items-center">
//                         <PlusIcon
//                           aria-hidden="true"
//                           className="size-5 group-data-[open]:hidden"
//                         />
//                         <MinusIcon
//                           aria-hidden="true"
//                           className="size-5 [.group:not([data-open])_&]:hidden"
//                         />
//                       </span>
//                     </DisclosureButton>
//                   </h3>
//                   <DisclosurePanel className="pt-6">
//                     <div className="space-y-6">
//                       {section.options.map((option, optionIdx) => (
//                         <div key={option.value} className="flex items-center">
//                           <input
//                             defaultValue={option.value}
//                             defaultChecked={option.checked}
//                             id={`filter-mobile-${section.id}-${optionIdx}`}
//                             name={`${section.id}[]`}
//                             type="checkbox"
//                             className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                           />
//                           <label
//                             htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                             className="ml-3 min-w-0 flex-1 text-gray-500"
//                           >
//                             {option.label}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </DisclosurePanel>
//                 </Disclosure>
//               ))}
//             </form>
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default Filters;
