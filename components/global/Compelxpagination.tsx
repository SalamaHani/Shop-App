"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { metaData } from "@/utils/Type";
export default function Compelxpagination({
  Page,
  metadata,
}: {
  Page: number;
  metadata: metaData;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const { total, totalPage } = metadata;
  console.log(total, totalPage);
  const [Pag, setPage] = useState(searchParams.get("Page")?.toString() || "");
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("Page", value);
    } else {
      params.delete("Page");
    }
    replace(`/products?${params.toString()}`);
  });

  useEffect(() => {
    if (!searchParams.get("Page")) {
      setPage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("page")]);
  console.log(Pag);
  const addPageButton = ({
    pageNumber,
    activeClass,
  }: {
    pageNumber: number;
    activeClass: boolean;
  }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => {
          handleSearch(pageNumber.toString());
        }}
        className={`'flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:text-white' ${
          activeClass ? "bg-black dark:bg-gray-900 " : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: Page === 1 }));

    // dots
    if (Page > 3) {
      pageButtons.push(
        <button
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
          key="dots-1"
        >
          ...
        </button>
      );
    }

    // active/current page
    if (Page !== 1 && Page !== totalPage) {
      pageButtons.push(addPageButton({ pageNumber: Page, activeClass: true }));
    }
    // dots
    if (Page < totalPage - 1) {
      pageButtons.push(
        <button
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:text-white"
          key="dots-2"
        >
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({
        pageNumber: totalPage,
        activeClass: Page === totalPage,
      })
    );
    return pageButtons;
  };

  if (totalPage < 2) return null;
  if (total < 3) {
    return null;
  }

  return (
    <div className="container mt-2  flex justify-end pb-15">
      <nav aria-label="Page flex flex-row-reverse  mt-5  navigation example dark:bg-[#252525]">
        <div className="inline-flex mt-16 -space-x-px text-base h-10">
          <button
            onClick={() => {
              let prevpage = Page - 1;
              if (prevpage < 1) prevpage = totalPage;
              handleSearch(prevpage.toString());
            }}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          {renderPageButtons()}
          <button
            onClick={() => {
              let nextpage = Page + 1;
              if (nextpage > totalPage) nextpage = 1;

              handleSearch(nextpage.toString());
            }}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
}
