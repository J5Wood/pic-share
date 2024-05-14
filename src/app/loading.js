import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading-component">
      <Image
        src="/skull.png"
        alt="loading screen skull"
        width={230}
        height={220}
      />
      <p>loading...</p>
    </div>
  );
}
