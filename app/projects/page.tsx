export default function Projects() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-13 items-center py-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <h2 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            6x6 Sudoku
          </h2>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Created with Next.js. Generates a new sudoku when a user accesses the page, takes user input, and includes an optional mode that highlights mistakes in red. This project was inspired by a unique sudoku variant posted in the New York Times.
          </p>
          <a
            href="https://github.com/lindseyp555/sixsudoku"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
          <a
            href="https://sudoku.lindseypeterson.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it out
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            TIFF Image Half-Toner
          </h2>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Created with C++. Takes in a TIFF image and creates a new half-toned version of the image using an algorithm of the user's choice. I implemented several methods for half-toning of both error diffusion and stochastic processes. Implemented for SA International.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Spreadsheet
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Created with .NET MAUI and C#. Users can input values into cells and evaluate formulas. The project features a dependency graph that allows the user to evaluate formulas relying on the values of other cells. Users can load and save spreadsheets using their local file system.
          </p>
          <a
            href="https://github.com/lindseyp555/spreadsheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </main>
    </div>
  );
}                                             