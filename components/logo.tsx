import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/font.woff2"
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={30}
        />
        <p className={cn(
          "text-lg text-neutral-700 px-1",
          headingFont.className
        )}>
          TaskVista
        </p>
      </div>
    </Link>
  );
};

export default Logo;