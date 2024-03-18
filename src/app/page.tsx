import Image from "next/image";
export default function Home() {
  return (
    <main className={"bg-black text-center container flex-auto mx-auto mt-5 min-w-full min-h-screen"}>
      <div className={"container content-center"}>
        <h1 className={"text-7xl subpixel-antialiased"}><strong>This is a test page</strong></h1>
        <div className="mt-6 container bg-gradient-to-r from-sky-400 to-slate-700 max-w-fit flex-auto subpixel-antialiased rounded-lg">
          <Image src={"../../next.svg"} width={800} height={600} alt={"Next JS"} />
        </div>
      </div>
    </main>
  );
}