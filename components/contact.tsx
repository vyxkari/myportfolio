"use client"

import { Card } from "@/components/ui/card"
import { Github, Mail, Linkedin, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-muted-foreground mb-12">
          Connect with me through links below.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/vyxkari"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-48"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer h-full">
              <Github className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">GitHub</span>
            </Card>
          </a>

          {/* Gmail */}
          <a
            href="mailto:karen.refamonte@hcdc.edu.ph"
            className="block w-full sm:w-48"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer h-full">
              <Mail className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">Gmail</span>
            </Card>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/mixokiroxiro"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-48"
          >
            <Card className="p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition cursor-pointer h-full">
              <Facebook className="h-8 w-8 text-primary" />
              <span className="font-medium text-primary">Facebook</span>
            </Card>
          </a>
        </div>
      </div>
    </section>
  )
}
