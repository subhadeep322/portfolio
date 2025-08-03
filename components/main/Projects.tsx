import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/freakyfit.png"
          title="Modern Next.js Ai Fitness App(FreakyFit)"
          description="Want to get fit? This app is for you! It provides personalized workout plans, nutrition advice, and progress tracking using your voice commands. With a modern design and cutting-edge technology, you'll have a better chance of achieving your fitness goals."
          link="https://freakyfit-ai.vercel.app/"
        />
        <ProjectCard
          src="/brochat.png"
          title="BroChat - Real-time Chat App with Socket.io"
          description="A online chat application that allows users to communicate in real-time. It features user authentication, private messaging. Built with MERN stack and Socket.io for real-time communication between clients.Chat with your friends,family and  loved ones instantly!"
          link="https://brochat-chat-app.onrender.com"
        />
        <ProjectCard
          src="/simplyfy.png"
          title="Simplyfy - Video Chat App"
          description="A video chat application that allows users to connect with each other in real-time. It features user authentication, private messaging, and video conferencing. Built with MERN stack.Call and chat with your friends, family and loved ones instantly!"
          link="https://simplyfy-video-chat.onrender.com"
        />
      </div>
    </div>
  );
};

export default Projects;