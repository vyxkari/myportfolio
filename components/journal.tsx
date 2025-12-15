"use client"

import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const posts = [
  { title: "World Tech Information Solutions Inc.", image: "/1.jpg" },
  { title: "CodeChum", image: "/2.jpg" },
  { title: "RIVAN IT", image: "/3.jpg" },
  { title: "MATA Technologies INC.", image: "/4.jpg" },
  { title: "T.A.R.S.I.E.R 117", image: "/5.jpg" },
]

export default function Journal() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    })
  }

  return (
    <section id="journal" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Journal
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Observations and insights gathered during our educational tours and explorations
        </p>

        <div className="relative group/carousel">
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: "none" }} // Firefox
          >
            {posts.map((post) => (
              <div key={post.title} className="flex-none w-80 h-[420px] snap-center">
                <Card className="relative h-full overflow-hidden group">
                  <button
                    onClick={() => {
                      setSelectedImage(post.image)
                      setSelectedTitle(post.title)
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white text-lg font-semibold">
                        {post.title}
                      </span>
                    </div>
                  </button>
                </Card>
              </div>
            ))}

            {/* Hide scrollbar for Webkit */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background/80 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronLeft />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background/80 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt={selectedTitle || "Full Image"}
              className="max-h-[80vh] max-w-[90vw] object-contain mx-auto rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full cursor-pointer"
            >
              <X className="h-6 w-6" />
            </Button>
            {selectedTitle && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded text-white text-sm">
                {selectedTitle}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
