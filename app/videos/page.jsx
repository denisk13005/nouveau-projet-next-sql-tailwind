'use client'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section>
      <h1>Bienvenue dans notre espace vidéos</h1>
      <video width="640" height="360" controls >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
