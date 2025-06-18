import React from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
function ProductDiletes({ product }: { product: Product }) {
  const { name, company, description, price, image } = product;
  return (
    <>
      <section className="pb-24 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <div className="flex flex-col justify-between">
              <div className="relative h-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
                  priority
                  className="w-full rounded object-cover"
                />
              </div>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <div className="flex justify-between ">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {name}
                </h1>
                <div className="flex items-center gap-2 mt-2 sm:mt-0"></div>
              </div>
              <h4 className="text-xl text-neutral-content font-bold mt-2 dark:text-white">
                {company}
              </h4>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="mt-3 text-xl dark:text-white">{price}</p>
              </div>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  type="button"
                  className="flex md:mb-0 mb-4 items-center mt-5 md:mt-0 justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to favorites
                </button>
              </div>
              <div className="form-control w-full max-w-xs mt-5">
                <label className="label" htmlFor="quantity">
                  <h4 className="text-md font-medium -tracking-wider capitalize">
                    quantity
                  </h4>
                </label>
                <select
                  className="select dark:bg-gray-800 dark:text-white"
                  id="quantity"
                ></select>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <div className="payment">
                <div className="flex flex-wrap items-center gap-7">
                  <h5 className="max-md:text-base text-xl font-bold dark:text-white">
                    Payment:
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDiletes;
