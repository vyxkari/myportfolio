import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Information Management",
    issuer: "CodeChum",
    date: "May 16, 2025",
    image: "/TOOOUR.jpg", 
  },
  {
    title: "Certification of Completion",
    issuer: "World of Adventures Travels and Tourist",
    date: "November 22, 2025",
    image: "/Codechum.jpg",
  },
]

export default function CertificationsTimeline() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Certifications
        </h2>

        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A timeline of certifications and learning milestones achieved throughout my academic journey.
        </p>

        {/* Timeline */}
        <div className="relative space-y-14">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`w-[calc(50%-2rem)] flex ${
                  index % 2 === 1 ? "justify-start" : "justify-end"
                }`}
              >
                <Card className="w-fit max-w-md overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="block max-w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Date Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur">
                      {cert.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-accent flex items-center justify-center z-10">
                <Award className="h-4 w-4 text-accent" />
              </div>

              {/* Spacer */}
              <div className="w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
