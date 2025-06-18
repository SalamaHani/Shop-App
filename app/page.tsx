import Futeredproduct from "@/components/home/Futeredproduct";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <div>
        <Hero />
        <Suspense>
          <Futeredproduct />
        </Suspense>
      </div>
    </>
  );
}
