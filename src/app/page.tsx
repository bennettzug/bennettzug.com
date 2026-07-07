import { loadHomeData } from '@/lib/parseHome'

const linkClass =
    'underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400'

function renderInline(text: string) {
    return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        return match
            ? <a key={i} className={linkClass} href={match[2]}>{match[1]}</a>
            : part || null
    })
}

export default function Home() {
    const { name, intro, aboutTitle, about, workTitle, work, projectsTitle, projects, socialsTitle, socials } = loadHomeData()

    return (
        <div className="max-w-173 text-neutral-800 dark:text-neutral-200 mx-auto px-10 py-20 space-y-12 font-light leading-relaxed">
            <p className="text-xl font-bold">{name}</p>
            <p>{renderInline(intro)}</p>

            <div className="flex flex-col gap-5">
                <p className="font-semibold">{aboutTitle}</p>
                {about.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            <div className="flex flex-col gap-5">
                <p className="font-semibold">{workTitle}</p>
                {work.map((entry) => (
                    <div key={entry.name} className="flex flex-col gap-1">
                        <div className="flex gap-2">
                            <p className="font-medium">{entry.name}</p>
                            <p className="text-neutral-500 dark:text-neutral-400">{entry.dates}</p>
                        </div>
                        <p>{entry.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-5">
                <p className="font-semibold">{projectsTitle}</p>
                {projects.map((entry) => (
                    <div key={entry.name} className="flex flex-col gap-1">
                        <div className="flex gap-2">
                            {entry.url
                                ? <a className={`font-medium ${linkClass}`} href={entry.url}>{entry.name}</a>
                                : <p className="font-medium">{entry.name}</p>
                            }
                            <p className="text-neutral-500 dark:text-neutral-400">{entry.dates}</p>
                        </div>
                        <p>{renderInline(entry.description)}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-5">
                <p className="font-semibold">{socialsTitle}</p>
                <div className="sm:flex space-y-2 sm:space-y-0 w-full justify-between">
                    {socials.map((entry) => (
                        <a key={entry.label} className={`flex items-center font-normal gap-1 ${linkClass}`} href={entry.url}>
                            {entry.emoji} {entry.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
