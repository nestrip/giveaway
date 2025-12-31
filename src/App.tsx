import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function App() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = "https://r2.keircn.com/11i28mz8(1).mp4";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {showVideo && <VideoPlayer />}
      <div className="flex-grow max-w-6xl mx-auto px-4 py-12 flex flex-col justify-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-32"
        >
          <img
            src="/logo.png"
            alt="nest.rip"
            className="h-20 w-20 md:h-24 md:w-24 border border-border rounded-lg"
            role="button"
            onClick={() => window.open("https://nest.rip", "_blank")}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            nest.rip giveaway
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <HiOutlineSparkles className="text-primary" />
              <span className="text-primary font-semibold">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Get Free Access to nest.rip
            </h2>

            <p className="text-muted-foreground text-lg">
              We're giving away free invites to our platform. Join thousands of
              satisfied users and experience peak file upload UX
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground"
              onClick={() => setShowVideo(true)}
            >
              Redeem Yours
              <BsArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <IoGiftOutline className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">
                    Some features we provide
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Unlimited uploads to nest.rip",
                  "Folders to manage your uploaded files",
                  "File sharing and URL shortening with 45+ domains",
                  "Email hosting and software integration",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-muted-foreground"
                  >
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 relative"
        >
          <Card className="mt-24 bg-card border border-border max-w-xl">
            <CardHeader className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Don't believe us?
              </h2>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img
                src="/testimonial.png"
                alt="Testimonial"
                className="w-full max-w-[452px] h-auto rounded mb-4"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="pb-8 text-center text-muted-foreground"
      >
        <p>Limited invites available, don't miss out.</p>
        <p className="mt-4 text-muted-foreground">
          Made with <span role="img">♡</span> by{" "}
          <a href="https://keircn.com" className="text-foreground font-medium">
            Key
          </a>
        </p>
      </motion.div>

      <img
        src="/roxy.gif"
        alt="Roxy"
        className="fixed bottom-4 right-4 w-12 h-12 opacity-50"
      />
    </div>
  );
}
