# Learnify

**An AI-powered platform that transforms static study materials into an interactive, adaptive learning experience.**

## 🎯 Purpose
To bridge the gap between passive reading and active learning by automatically generating summaries, testing knowledge, and providing personalized content recommendations.

## ⚠️ The Problem
* **Passive Learning:** Students often read PDFs without truly understanding or retaining the concepts.
* **Content Overload:** Finding high-quality, relevant YouTube videos to fix specific knowledge gaps is time-consuming and often leads to low-quality sources.
* **Generic Testing:** Standard quizzes don't adapt to the student's actual struggle areas.

## 💡 The Solution
A web application where students upload their notes (PDF/PPT). The system understands the content, quizzes the student to find "weak spots," and intelligently recommends video tutorials from trusted academic sources based on their exact performance level.

## ✨ Key Features
* **Smart Summarization:** Instantly converts long documents into concise, readable summaries using local AI models.
* **RAG-Based Quizzes:** Generates questions strictly from the uploaded material to ensure syllabus accuracy.
* **Adaptive Recommendation Engine:** Uses a **"4-Bin Data Science Algorithm"** to recommend content based on score (e.g., *Basics* for low scores, *Research Papers* for high scores).
* **Professor-Approved Filter:** Strictly filters video recommendations to trusted channels like **NPTEL, MIT OpenCourseWare, and Gate Smashers**.
* **Cost-Optimized:** Implements file hashing to prevent re-processing the same documents, saving API costs.

## 🛠️ Tech Stack (FARM)
* **Frontend:** React.js + Tailwind CSS
* **Backend:** FastAPI (Python)
* **Database:** MongoDB Atlas (NoSQL + Vector Search)
* **AI & ML:** Gemini 1.5 Flash (Logic), Hugging Face (Local Summarization)
* **External APIs:** YouTube Data API v3