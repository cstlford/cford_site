import shapeshift from "../../assets/shapeshift-gen.png";
import rosemarkets from "../../assets/rosemarkets.png";
import btc from "../../assets/btc.png";
import monster from "../../assets/monster.png";

export const projects = [
  {
    title: "Rose Markets — Commission Landing Page",
    description:
      "A high-end, responsive landing page built for a luxury amenity startup. Integrated serverless email functions using Nodemailer to handle client inquiries and feedback securely.",
    tech: ["HTML", "CSS", "JavaScript", "Nodemailer"],
    link: "https://rosemarkets.org",
    image: rosemarkets,
  },
  {
    title: "Shapeshift — AI-Powered Fitness & Nutrition Planner",
    description:
      "Full-stack web app that generates personalized workout and meal plans using generative AI. I led a 5-person team and built the frontend features, designed the database schema, and built the API.",
    tech: ["React", "Redux", "TypeScript", "Django", "MySQL", "JWT", "Figma"],
    link: "https://shapeshiftness.netlify.app/",
    image: shapeshift,
  },
  {
    title: "Twitter Sentiment vs. Bitcoin Trends",
    description:
      "Analyzed 10,000+ tweets and BTC price data using sentiment scoring and cross-correlation heatmaps. Built to explore whether Twitter chatter predicts crypto movement.",
    tech: ["Python", "Pandas", "Matplotlib", "NumPy", "Jupyter"],
    link: "https://colab.research.google.com/drive/1UNc608n9gCKRG8CgRhVjfx0lhPbLRcAT?usp=sharing",
    image: btc,
  },
  {
    title: "Monster Munch — Arithmetic Game",
    description:
      "A minimalist browser game for practicing rapid addition/subtraction with time-based scoring. Built for personal skill sharpening.",
    tech: ["React", "CSS", "TypeScript"],
    link: "https://github.com/cstlford/arithmeticGame",
    image: monster,
  },
];
