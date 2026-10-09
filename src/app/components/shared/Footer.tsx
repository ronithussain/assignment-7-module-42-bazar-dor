// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              আমার প্রোফাইল
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              সহজে দাম তুলনা করুন, বাজার দেখুন এবং আপনার প্রোফাইল ম্যানেজ করুন।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              কুইক লিংক
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-green-600 transition"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-sm text-gray-500 hover:text-green-600 transition"
                >
                  প্রোফাইল
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-green-600 transition"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-green-600 transition"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              যোগাযোগ
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">
                📧 support@example.com
              </li>
              <li className="text-sm text-gray-500">
                📞 +৮৮০ ১৭XX-XXXXXX
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white text-gray-600 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white text-gray-600 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white text-gray-600 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6zM8.3 18.3H5.7V9.8h2.6v8.5zM7 8.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm11.3 9.7h-2.6v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.2h-2.6V9.8h2.5v1.2h.1c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4v4.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            ©  আমার প্রোফাইল। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-green-600 transition"
            >
              প্রাইভেসি পলিসি
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-green-600 transition"
            >
              শর্তাবলী
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}