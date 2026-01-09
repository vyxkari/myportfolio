import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaReact, FaHtml5, FaNodeJs, FaGithub, FaFigma, FaMobileAlt } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiSupabase } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { TbApi } from "react-icons/tb"

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "HTML5", icon: FaHtml5 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Supabase", icon: SiSupabase },
            { name: "REST APIs", icon: TbApi },
        ],
    },
    {
        category: "Tools & Others",
        items: [
            { name: "GitHub", icon: FaGithub },
            { name: "VS Code", icon: VscVscode },
            { name: "Figma", icon: FaFigma },
            { name: "Responsive Design", icon: FaMobileAlt },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-muted/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of technologies and tools I work with to build digital experiences.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {skills.map((skillGroup) => (
                        <Card key={skillGroup.category} className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-center">{skillGroup.category}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-center gap-2">
                                {skillGroup.items.map((skill) => (
                                    <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm flex items-center gap-2">
                                        <skill.icon className="w-4 h-4" />
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
