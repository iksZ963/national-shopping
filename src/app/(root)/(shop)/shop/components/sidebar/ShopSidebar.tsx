"use client"
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PriceRange from "./PriceRange";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  "Rods", "Cement", "Corrugated Tin Sheets", "Stone & Sand", 
  "Hardware", "Grocery", "Cosmetics", "Mobile Phones", 
  "Electrical Items", "Electronics", "Furniture", "Motorcycles",
  "Garments", "Fish Feed", "Poultry Feed", "Cattle Feed",
  "Ceramics", "Tiles", "Tires", "Lubricants",
  "Bicycles", "Glass", "Housing", "Land Development",
  "Expatriate Network"
];

const filters = [
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "sale", label: "Sale" },
  { id: "travel", label: "Travel" },
  { id: "organization", label: "Organization" },
  { id: "accessories", label: "Accessories" }
];

const ShopSidebar = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 8);

  return (
    <Card className="hidden lg:block p-6 w-72 space-y-6">
      {/* Categories Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          {categories.length > 8 && (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-primary hover:text-primary/80 text-xs"
              onClick={() => setShowAllCategories(!showAllCategories)}
            >
              {showAllCategories ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Show More
                </>
              )}
            </Button>
          )}
        </div>
        
        <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
          {visibleCategories.map((category, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <span className="truncate">{category}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Filters Section */}
      <Accordion 
        type="multiple" 
        defaultValue={["category"]}
        className="space-y-4"
      >
        <AccordionItem value="category" className="border-b-0">
          <AccordionTrigger className="py-2 hover:no-underline text-gray-900">
            <span className="text-sm font-medium">Filters</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <div className="space-y-3">
              {filters.map((filter) => (
                <div key={filter.id} className="flex items-center space-x-3">
                  <Checkbox id={filter.id} />
                  <label
                    htmlFor={filter.id}
                    className="text-sm text-gray-700 cursor-pointer leading-none"
                  >
                    {filter.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Price Range Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
        <PriceRange />
      </div>
    </Card>
  );
};

export default ShopSidebar;