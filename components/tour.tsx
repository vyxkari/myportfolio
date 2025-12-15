"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const tourDays = [
  {
    day: "Day 1",
    title: "Cebu City Tour",
    mainImage: "/WT.jpg",
    images: [
      { src: "/arrival.jpg", desc: "Departure from Davao to Cebu" },
      { src: "/WT.jpg", desc: "Inside the office of World Tech Information Solutions Inc." },
      { src: "/IT.jpg", desc: "Inside the office – observing IT operations" },
    ],
  },
  {
    day: "Day 2",
    title: "Cebu City Tour",
    mainImage: "/CD.jpg",
    images: [
      { src: "/CIT.jpg", desc: "Visit to Cebu Institute of Technology" },
      { src: "/PRETTY.jpg", desc: "CodeChum" },
      { src: "/MACTAN.jpg", desc: "Mactan Shrine Historical Tour" },
      { src: "/HOPE.jpg", desc: "Santo Niño: Hope of the Pilgrim Church" },
      { src: "/SOMAC.jpg", desc: "Buffet 101 International Cuisine" },
      { src: "/RIT.jpg", desc: "Inside the office of Rivan IT" },
    ],
  },
  {
    day: "Day 3",
    title: "Cebu - Bohol Tour",
    mainImage: "/MATA.jpg",
    images: [
      { src: "/HEY.jpg", desc: "Inside the office of MATA INC." },
      { src: "/VA.jpg", desc: "Inside the office of MATA INC" },
      { src: "/MATAA.jpg", desc: "Group bonding moments" },
      { src: "/SUpercat.jpg", desc: "Cebu to Tagbilaran City via Supercat" },
      { src: "/Touchdown.jpg", desc: "Touchdown Tagbilaran City" },
      
    ],
  },
  {
    day: "Day 4",
    title: "Bohol Tour",
    mainImage: "/CHH.jpg",
    images: [
      { src: "/TARSIER.jpg", desc: "Tarsier Conservation Area visit" },
      { src: "/HILL.jpg", desc: "Chocolate Hills experience" },
      { src: "/RIERTA.jpg", desc: "Tarsier Conservation Area" },
      { src: "/Manila.jpg", desc: "Getting ready for Manila - Davao Departure" },
    ],
  },
]

export default function Tour() {
  const [activeDay, setActiveDay] = useState<string | null>(null)

  return (
    <section id="tour" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Cebu – Bohol Educational Tour
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Highlights and memories from our educational tour across Cebu and Bohol.
        </p>

        {/* ================= DAY CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {tourDays.map((day) => (
            <Card
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className="relative h-56 overflow-hidden cursor-pointer group rounded-2xl"
            >
              <img
                src={day.mainImage}
                alt={day.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                <span className="text-xs uppercase opacity-80">{day.day}</span>
                <h3 className="text-lg font-semibold">{day.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {activeDay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setActiveDay(null)}
            />

            <div className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
              {tourDays
                .filter((d) => d.day === activeDay)
                .map((day) => (
                  <div key={day.day}>
                    {/* Hero */}
                    <div className="relative h-72">
                      <img
                        src={day.mainImage}
                        alt={day.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-0 p-6 text-white">
                        <span className="text-xs uppercase">{day.day}</span>
                        <h3 className="text-3xl font-bold">{day.title}</h3>
                      </div>

                      <button
                        onClick={() => setActiveDay(null)}
                        className="absolute top-4 right-4 text-white bg-black/40 rounded-full px-3 py-1"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Gallery */}
                    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {day.images.map((img, i) => (
                        <div
                          key={i}
                          className="group relative aspect-[4/3] overflow-hidden rounded-xl"
                        >
                          <img
                            src={img.src}
                            alt={img.desc}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors" />

                          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-sm text-white">{img.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
