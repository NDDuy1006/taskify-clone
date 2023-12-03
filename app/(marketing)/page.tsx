import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className
      )}>
        <div className="medal-wrapper">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          TaskVista helps team move
        </h1>
        <div className="quote-wrapper">
          work forward.
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className
      )}>
        Colaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team work is unique - accomplish it all with TaskVista.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get TaskVista for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;