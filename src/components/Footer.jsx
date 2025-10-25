import React from "react";
import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-[#3B3F45]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-[#C8FF3D]" />
            <span className="font-semibold">Art Thou</span>
            <span className="text-sm text-[#F5F7FA]/60">Strategic storytelling, brand innovation, and media relations.</span>
          </div>
          <div className="text-sm text-[#F5F7FA]/60">© {new Date().getFullYear()} Art Thou, Delhi NCR. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
