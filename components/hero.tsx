import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 animate-in slide-in-from-bottom-8 fade-in duration-1000">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-medium text-primary tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Karen Refamonte
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
            A 3rd-year IT student building skills in web development, programming, and design. Passionate about turning ideas into interactive and user-friendly projects.
          </p>
        </div>

        <div className="order-1 lg:order-2 flex justify-center animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_10s_linear_infinite]" />

            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform duration-500 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src="/kareen.png"
                alt="Profile picture of Karen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <a
          href="#about"
          aria-label="Scroll down"
          className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
