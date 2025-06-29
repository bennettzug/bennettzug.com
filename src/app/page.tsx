// import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
// import { FaLetterboxd } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="max-w-xl text-neutral-800 dark:text-neutral-200 mx-auto px-10 py-20 space-y-12 font-light text-sm">
            <p className="text-xl font-bold">Bennett Zug</p>
            <p>
                I&apos;m a computer science student at North Carolina State
                University.{" "}
                <a
                    className="underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                    href="https://bennettzug.github.io/resume/resume.pdf"
                >
                    Here&apos;s my résumé (PDF).
                </a>
            </p>

            <div className="flex flex-col gap-5">
                <p className="font-semibold">About Me</p>
                <p>
                    I grew up in Raleigh, North Carolina, and currently study
                    computer science and mathematics at NC State University. My
                    academic interests include artificial intelligence, machine
                    learning, and numerical methods.
                </p>
                <p>
                    Outside of computer science, I&apos;m interested in music,
                    film, urbanism and transit, and basketball.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold">Work</p>

                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <p className="font-medium">St. Timothy&apos;s School</p>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            2018 - 2025
                        </p>
                    </div>
                    <p>
                        Managed student and teacher accounts and devices, and
                        optimized internal IT workflows.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold">Side Projects</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <a
                            className="font-medium underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                            href="https://www.class-search.com"
                        >
                            Class Search
                        </a>{" "}
                        <p className="text-neutral-500 dark:text-neutral-400">
                            2024 - Now
                        </p>
                    </div>
                    <p>
                        Built a website for students to search for classes at
                        using semantic search (currently offline).
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <p className="font-medium">SimCLR</p>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            2025
                        </p>
                    </div>
                    <p>
                        {" "}
                        Evaluated SimCLR on STL-10 for a research project.
                        Co-authored{" "}
                        <a
                            className="underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                            href="/simclr_paper.pdf"
                        >
                            a short paper
                        </a>{" "}
                        on the results.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <p className="font-semibold">Contact Me</p>
                <div className="sm:flex space-y-2 sm:space-y-0 w-full justify-between">
                    <a
                        className="flex items-center gap-1 underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                        href="mailto:bennettzug@gmail.com"
                    >
                        {/* <IoIosMail /> */}
                        📧 Email
                    </a>

                    <a
                        className="flex items-center gap-1 underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                        href="https://www.linkedin.com/in/bennett-zug/"
                    >
                        {/* <IoLogoLinkedin /> */}
                        💼 LinkedIn
                    </a>
                    <a
                        className="flex items-center gap-1 underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                        href="https://github.com/bennettzug"
                    >
                        {/* <IoLogoGithub /> */}
                        💻 GitHub
                    </a>
                    <a
                        className="flex items-center gap-1 underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                        href="https://letterboxd.com/bennettzug/"
                    >
                        {/* <FaLetterboxd /> */}
                        🎬 Letterboxd
                    </a>
                </div>
            </div>
        </div>
    );
}
