import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 py-4 flex justify-between items-center">
        {/* <span className="text-lg font-semibold text-black dark:text-zinc-50">
          Lindsey Peterson
        </span> */}

        <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-black dark:hover:text-zinc-50">
            Home
          </Link>
          <Link href="/projects" className="hover:text-black dark:hover:text-zinc-50">
            Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          {/* <Link href="/fun" className="hover:text-black dark:hover:text-zinc-50">
            Fun
          </Link> */}
        </div>
      </div>
    </nav>
  );
}