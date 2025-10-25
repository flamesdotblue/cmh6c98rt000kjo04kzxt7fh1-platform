import React from "react";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-400 grid place-items-center text-white font-bold text-sm">AT</div>
            <div>
              <div className="font-semibold text-slate-900">Art Thou</div>
              <div className="text-sm text-slate-600">Strategic storytelling, brand innovation, and media relations.</div>
            </div>
          </div>
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Art Thou, Delhi NCR. All rights reserved.</div>
        </div>
        <div className="mt-6 text-xs text-slate-500">Download static HTML versions: <a className="text-blue-700 underline" href="/export/all.html">All-in-one</a> · <a className="text-blue-700 underline" href="/export/home.html">Home</a> · <a className="text-blue-700 underline" href="/export/services.html">Services</a> · <a className="text-blue-700 underline" href="/export/case-studies.html">Case Studies</a> · <a className="text-blue-700 underline" href="/export/about.html">About</a> · <a className="text-blue-700 underline" href="/export/insights.html">Insights</a> · <a className="text-blue-700 underline" href="/export/contact.html">Contact</a></div>
      </div>
    </footer>
  );
}
