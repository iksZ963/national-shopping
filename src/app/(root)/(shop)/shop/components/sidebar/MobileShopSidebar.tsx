import { Card } from "@/components/ui/card";
import React from "react";

const MobileShopSidebar = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between px-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        </div>

        {/* <!-- Filters --> */}
        <form className="mt-4 border-t border-gray-200 overflow-y-auto max-h-[90vh]">
          <h3 className="sr-only">Categories</h3>
          {/* <ul role="list" className="px-2 py-3 font-medium text-gray-900">
            <li>
              <a href="#" className="block px-2 py-3">
                Totes
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Backpacks
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Travel Bags
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Hip Bags
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Laptop Sleeves
              </a>
            </li>
          </ul> */}
          <ul role="list" className="px-2 py-3 font-medium text-gray-900">
            <li>
              <a href="#" className="block px-2 py-3">
                Rods
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Cement
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Corrugated Tin Sheets
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Stone & Sand
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Hardware
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Grocery
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Cosmetics
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Mobile Phones
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Electrical Items
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Motorcycles
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Garments
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Fish Feed
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Poultry Feed
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Cattle Feed
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Ceramics
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Tiles
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Tires
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Lubricants
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Bicycles
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Glass
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Housing
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Land Development
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-3">
                Expatriate Network
              </a>
            </li>
          </ul>

          {/* <div className="border-t border-gray-200 px-4 py-6"> */}
          {/* <h3 className="-mx-2 -my-3 flow-root">
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">Color</span>
                <span className="ml-6 flex items-center">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3> */}
          {/* <!-- Filter section, show/hide based on section state. --> */}
          {/* <div className="pt-6" id="filter-section-mobile-0">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    id="filter-mobile-color-0"
                    name="color[]"
                    value="white"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-color-0"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    White
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-color-1"
                    name="color[]"
                    value="beige"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-color-1"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Beige
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-color-2"
                    name="color[]"
                    value="blue"
                    type="checkbox"
                    checked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-color-2"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Blue
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-color-3"
                    name="color[]"
                    value="brown"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-color-3"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Brown
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-color-4"
                    name="color[]"
                    value="green"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-color-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Green
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-color-5"
                    name="color[]"
                    value="purple"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-color-5"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Purple
                  </label>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="border-t border-gray-200 px-4 py-6">
            <h3 className="-mx-2 -my-3 flow-root">
              {/* <!-- Expand/collapse section button --> */}
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-1"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">Category</span>
                <span className="ml-6 flex items-center">
                  {/* <!-- Expand icon, show/hide based on section open state. --> */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            {/* <!-- Filter section, show/hide based on section state. --> */}
            <div className="pt-6" id="filter-section-mobile-1">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-0"
                    name="category[]"
                    value="new-arrivals"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-category-0"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Shop
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-1"
                    name="category[]"
                    value="sale"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-category-1"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Sale
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-2"
                    name="category[]"
                    value="travel"
                    type="checkbox"
                    checked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-category-2"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Travel
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-3"
                    name="category[]"
                    value="organization"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-category-3"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Organization
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="accessories"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Accessories
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="border-t border-gray-200 px-4 py-6"> */}
          {/* <h3 className="-mx-2 -my-3 flow-root">
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-2"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">Size</span>
                <span className="ml-6 flex items-center">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3> */}
          {/* <!-- Filter section, show/hide based on section state. --> */}
          {/* <div className="pt-6" id="filter-section-mobile-2">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    id="filter-mobile-size-0"
                    name="size[]"
                    value="2l"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-size-0"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    2L
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-size-1"
                    name="size[]"
                    value="6l"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-size-1"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    6L
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-size-2"
                    name="size[]"
                    value="12l"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-size-2"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    12L
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-size-3"
                    name="size[]"
                    value="18l"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-size-3"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    18L
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-size-4"
                    name="size[]"
                    value="20l"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-size-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    20L
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-size-5"
                    name="size[]"
                    value="40l"
                    type="checkbox"
                    checked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-mobile-size-5"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    40L
                  </label>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default MobileShopSidebar;
