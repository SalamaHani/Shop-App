"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

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
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setParmes(e.target.value);
        handleSearch(e.target.value);
      }}
      value={Parmes}
    />
  );
}
export default NavSearch;
