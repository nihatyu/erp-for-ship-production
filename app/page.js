import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      ANASAYFA
      <Link
        href="/dashboard"
        className=" bg-blue-500 rounded-xl text-sm p-3 m-5"
      >
        Giriş Yap
      </Link>
    </main>
  );
}
