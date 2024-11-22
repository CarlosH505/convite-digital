import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
    subsets: ["latin"],
    weight: "400",
});

export default function Logo() {
    return (
        <Link href="/" className={`${fonte.className} flex items-center gap-2 `}>
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <h1 className="leading-5 flex flex-col items-center text-lg">
                <div>CONVIT<span className="text-blue-500">E</span></div>
                <div>DIGITAL</div>
            </h1>
        </Link>
    )
};