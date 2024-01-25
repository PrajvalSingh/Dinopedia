import Link from "next/link";
import Image from "next/image";

let title;
if (!(typeof window)) {
    title = document.title;
}

export default function Navbar() {
    return (
        <>
            <nav className={
                title === "dinohub.netlify.app/facts" || title === "localhost:3000/facts" ? "" : "sticky"
                    + "top-0 text-gray-400 bg-gray-900 body-font my-2"
            }>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link href="/" className="mr-9 hover:text-white">Creatures</Link>
                        <Link href="/facts" className="ml-5 hover:text-white">Facts</Link>
                    </nav>

                    <Link className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0" href="/">
                        <Image src="/favicon.png" width={40} height={40} alt="Logo" />
                        <span className="ml-3 text-xl xl:block lg:hidden">Dinohub</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}