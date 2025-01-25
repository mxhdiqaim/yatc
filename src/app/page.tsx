import { TailwindConverter } from "@/components";

export default function Home() {
  return (
    <main className='min-h-screen p-4'>
      <h1 className='text-4xl text-center font-bold my-4'>Tailwind to CSS Converter</h1>
      <TailwindConverter />
    </main>
  );
}
