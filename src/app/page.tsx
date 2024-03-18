import Image from "next/image";
export default function Home(){
  return(
      <main className={"bg-black text-center container flex-auto mx-auto mt-6"}>
        <div>
          <h1 className={"text-6xl subpixel-antialiased"}><strong>This is a test page</strong></h1>
            <Image src={'../.././public/next.svg'} alt={"Next JS"} width={400} height={250} className={"content-center container"}/>
        </div>
      </main>
  );
}