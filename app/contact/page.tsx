"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">
      {/* Floating Light Animation */}
      <motion.div 
        className="absolute top-10 left-1/3 w-24 h-24 bg-blue-500 blur-3xl opacity-20 animate-pulse"
      ></motion.div>

      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact <span className="text-blue-400">Us</span>
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Your Feedback is valuable to me. Feel free to reach out to me via email:
      </motion.p>

      
      <motion.a 
        href="mailto:nnehub@gmail.com"
        className="text-2xl font-semibold text-blue-400 underline mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        sashankchaubey2002@gmail.com
      </motion.a>

      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button 
          className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
          onClick={() => router.push("/dashboard")}
        >
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
