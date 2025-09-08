"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Image
          src="/profilePic.webp"
          alt="Abdallah Massri"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Abdallah Massri
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Software Engineer specializing in full-stack development with Java,
          Spring Boot, React & AWS.
        </p>
      </motion.div>
    </section>
  );
}
