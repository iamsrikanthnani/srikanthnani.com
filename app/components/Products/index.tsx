/*
Products Component
- This component represents the products section of the application.
- It displays a list of products with animations based on scroll.

Dependencies:
- react
- framer-motion

Props:
None

Add/change/delete products:
==> data/products.ts

Usage Example:
<Products />

Author: github.com/iamsrikanthnani
*/

"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import {
  ProductsDescription,
  ProductsEndText,
  ProductsList,
  ProductsTitle,
} from "@/data/products";
import Card from "../Projects/Card";

const Products = () => {
  const targetRef = useRef(null); // Ref for target element
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform x position based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-84%"]);

  return (
    <div id="products" className="w-screen  ">
      {/* desktop view */}
      <section
        ref={targetRef}
        className="hidden md:block lg:block relative h-[300vh] bg-[#020202]"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Map through products list and render each product card */}
          <motion.div style={{ x }} className="flex gap-8 items-center">
            <div className="w-[500px] pl-[3rem]">
              <p className="text-left font-bold text-5xl sm:text-5xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
                {ProductsTitle}
              </p>

              <p className="text-white opacity-50 w-[400px] mt-3">
                {ProductsDescription}
              </p>
            </div>
            {ProductsList.map((card, index) => {
              return <Card card={card} key={card.name} index={index} />;
            })}
            <p
              className="font-bold text-4xl sm:text-5xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none  pl-16"
              style={{ textAlign: "center", width: "500px" }}
            >
              {ProductsEndText}
            </p>
          </motion.div>
        </div>
      </section>
      {/* mobile view */}
      <section className="block pt-8 h-auto sm:block md:hidden lg:hidden relative bg-[#141516]">
        <p className="font-bold pl-4 text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
          {ProductsTitle}
        </p>
        <p className="text-white opacity-50 mt-3 pl-4">{ProductsDescription}</p>
        <div className="flex flex-col items-center m-4 sm:m-4">
          {/* Map through products list and render each product card */}
          {ProductsList.map((card, index) => {
            return <Card card={card} key={card.name} index={index} />;
          })}
          <p
            className="font-bold text-3xl sm:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none pb-16 pt-8"
            style={{ textAlign: "center", width: "300px" }}
          >
            {ProductsEndText}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
