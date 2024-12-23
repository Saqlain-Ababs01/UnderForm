import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementAsync,
  selectAllProducts,
} from "../ProductListSlice";
import CategoryFilters from "../../../components/ProductList/CategoryFilter";
import { DivideIcon } from "@heroicons/react/24/outline";

export default function ProductList() {
  const count = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  return <CategoryFilters />;
}
