import dynamic from "next/dynamic";
import Image from "next/image";
import mIcon from "@/app/_assets/location.jpg";
const MapWithNoSSR = dynamic(() => import("@/app/_component/Map"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MapWithNoSSR />
    </main>
  );
}
