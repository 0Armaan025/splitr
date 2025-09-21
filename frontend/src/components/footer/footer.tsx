import Link from "next/link";

export default function Footer  ()  {
    return (
        <footer className="w-full p-4 bg-white/40 shadow md:px-6 md:py-8  mt-auto">
            <span className="text-sm text-gray-800 sm:text-center ">© 2025 <Link href="#" className="hover:underline">Splitr™</Link>. All Rights Reserved.
            </span>
        </footer>
    );
}

