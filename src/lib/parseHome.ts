import fs from 'fs'
import path from 'path'

export interface WorkEntry {
    name: string
    dates: string
    description: string
}

export interface ProjectEntry {
    name: string
    url?: string
    dates: string
    description: string
}

export interface SocialsEntry {
    emoji: string
    label: string
    url: string
}

export interface HomeData {
    name: string
    intro: string
    aboutTitle: string
    about: string[]
    workTitle: string
    work: WorkEntry[]
    projectsTitle: string
    projects: ProjectEntry[]
    socialsTitle: string
    socials: SocialsEntry[]
}

function splitSections(content: string): { preamble: string; sections: Record<string, string> } {
    const firstSection = content.search(/^## .+$/m)
    const preamble = firstSection >= 0 ? content.slice(0, firstSection).trim() : content.trim()
    const sectionsText = firstSection >= 0 ? content.slice(firstSection) : ''

    const sections: Record<string, string> = {}
    for (const part of sectionsText.split(/^## /m).filter(Boolean)) {
        const nl = part.indexOf('\n')
        sections[part.slice(0, nl).trim()] = part.slice(nl + 1).trim()
    }

    return { preamble, sections }
}

// Parses "**Name** · dates" or "[**Name**](url) · dates"
function parseHeader(para: string): { name: string; url?: string; dates: string } | null {
    const linked = para.match(/^\[\*\*(.+?)\*\*\]\((.+?)\)\s*·\s*(.+)$/)
    if (linked) return { name: linked[1], url: linked[2], dates: linked[3].trim() }

    const plain = para.match(/^\*\*(.+?)\*\*\s*·\s*(.+)$/)
    if (plain) return { name: plain[1], dates: plain[2].trim() }

    return null
}

function parseEntries(sectionContent: string): Array<{ name: string; url?: string; dates: string; description: string }> {
    const paragraphs = sectionContent.split(/\n\n+/).map(p => p.trim()).filter(Boolean)
    const entries: Array<{ name: string; url?: string; dates: string; description: string }> = []

    let i = 0
    while (i < paragraphs.length) {
        const header = parseHeader(paragraphs[i])
        if (header) {
            const nextIsDesc = i + 1 < paragraphs.length && !parseHeader(paragraphs[i + 1])
            const description = nextIsDesc ? paragraphs[++i] : ''
            entries.push({ ...header, description })
        }
        i++
    }

    return entries
}

function parseSocial(sectionContent: string): SocialsEntry[] {
    return sectionContent
        .split('\n')
        .flatMap(line => {
            const match = line.match(/^[-*]\s*(.+?)\s+\[(.+?)\]\((.+?)\)/)
            return match ? [{ emoji: match[1], label: match[2], url: match[3] }] : []
        })
}

export function loadHomeData(): HomeData {
    const raw = fs.readFileSync(path.join(process.cwd(), 'content/home.md'), 'utf-8')
    const { preamble, sections } = splitSections(raw)

    const h1 = preamble.match(/^# (.+)$/m)
    const name = h1 ? h1[1].trim() : ''

    const introParagraphs = preamble.split(/\n\n+/).map(p => p.trim()).filter(p => p && !p.startsWith('#'))
    const intro = introParagraphs[0] || ''

    const titles = Object.keys(sections)
    const [aboutTitle = '', workTitle = '', projectsTitle = '', socialsTitle = ''] = titles

    const about = (sections[aboutTitle] || '').split(/\n\n+/).map(p => p.trim()).filter(Boolean)
    const work = parseEntries(sections[workTitle] || '')
    const projects = parseEntries(sections[projectsTitle] || '')
    const socials = parseSocial(sections[socialsTitle] || '')

    return { name, intro, aboutTitle, about, workTitle, work, projectsTitle, projects, socialsTitle, socials }
}
