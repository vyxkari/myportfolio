import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
        <Card className="p-8">
          <div className="space-y-6 leading-relaxed">
            <p className="text-lg">
              Hello! I'm a passionate developer and designer who loves creating intuitive and beautiful digital
              experiences. With a keen eye for detail and a commitment to clean code, I transform ideas into reality.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started several years ago, and since then, I've worked on diverse projects
              ranging from small business websites to complex web applications. I believe in continuous learning and
              staying up-to-date with the latest technologies and design trends.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new design patterns, contributing to open-source projects,
              or sharing knowledge with the developer community through writing and mentoring.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
