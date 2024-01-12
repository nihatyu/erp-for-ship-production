import Link from "next/link";
import NavLinks from "./nav-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 text-base items-center justify-center rounded-md bg-gradient-to-r from-red-500 to-gray-500 p-4 md:h-40"
        href="/"
      >
        UMK Mühendislik
      </Link>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2 ">
        <NavLinks />
        <form>
          <button className="flex md:w-full md:mt-10 text-black h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <FontAwesomeIcon icon={faSignOut} className="w-6" />
            <div className="hidden md:block">Çıkış Yap</div>
          </button>
        </form>
      </div>
    </div>
  );
}
