"use client";

import { Banner } from "@/components/banner/Banner";
import { banneData } from "@/mock/banner";

export default function Home() {
  return (
    <div>
      <Banner data={banneData} />
    </div>
  );
}
