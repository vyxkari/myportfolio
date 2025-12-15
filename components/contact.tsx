"use client"

import { Card } from "@/components/ui/card"
import { Github, Mail, Linkedin, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-12">
          Connect with me through my professional links below.
        </p>

        <div className="grid sm:grid-cols-4 gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/vyxkari"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer">
              <Github className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">GitHub</span>
            </Card>
          </a>

          {/* Gmail */}
          <a
            href="mailto:karen.refamonte@hcdc.edu.ph"
            className="block"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer">
              <Mail className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">Gmail</span>
            </Card>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer">
              <Linkedin className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">LinkedIn</span>
            </Card>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/mixokiroxiro"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer">
              <Facebook className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">Facebook</span>
            </Card>
          </a>
        </div>
      </div>
    </section>
  )
}
