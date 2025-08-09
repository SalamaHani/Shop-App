"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [Parmes, setParmes] = useState(
    searchParams.get("Parmes")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("Parmes", value);
    } else {
      params.delete("Parmes");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("Parmes")) {
      setParmes("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("Parmes")]);

  return (
    <div className="relative md:block hidden">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-white" />
      <Input
        type="search"
        placeholder="Search Product..."
        onChange={(e) => {
          setParmes(e.target.value);
          handleSearch(e.target.value);
        }}
        value={Parmes}
        className="pl-10 bg-gray-50 w-sm text-base dark:placeholder:text-white placeholder:text-gray-500"
      />
    </div>
  );
}
export default NavSearch;
