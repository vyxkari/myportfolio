import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
}

const projects: Project[] = [
    {
        title: "Nekko Siton Photography System",
        description: "The Nekko Siton Photography System is a web-based platform designed to streamline booking, client management, and service tracking for photography and videography services. It helps the business efficiently manage appointments, monitor transactions, and maintain organized client records in one centralized system.",
        image: "/web.jpg",
        tags: ["React", "Node.js", "TypeScript", "Supabase"],
        githubUrl: "https://github.com/raiden-mzen/nekko-Siton.git",

    },
    {
        title: "Task Manager",
        description: "A simple system that allows users to create, view, update, and organize tasks to help manage daily activities and improve productivity.",
        image: "/taskmanager.jpg",
        tags: ["React.js", "Firebase"],
        githubUrl: "https://github.com/vyxkari/toDo",
    },
    {
        title: "Weather App",
        description: "A system that displays current weather conditions and basic forecasts, helping users easily check weather updates for a selected location.",
        image: "/weather.jpg",
        tags: ["React", "Firebase", "SCSS"],
        githubUrl: "https://github.com/vyxkari/weather-app",

    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects I've worked on, demonstrating my skills in action.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-base">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between gap-4">
                                {project.githubUrl && (
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                            
                               
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
