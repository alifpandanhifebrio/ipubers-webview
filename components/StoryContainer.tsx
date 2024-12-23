import React, { useEffect, useState } from "react";
import StoryDots from "./StoryDots";
import StoryProgressBar from "./StoryProgressBar";

interface Story {
  html: React.ReactNode;
  duration: number;
}

interface StoryContainerProps {
  stories: Story[];
}

export default function StoryContainer({ stories }: StoryContainerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, [currentStoryIndex, stories]);

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-screen bg-white text-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full flex space-x-1 p-2 z-10">
        {stories.map((story, index) => (
          <StoryProgressBar
            key={index}
            duration={story.duration}
            isActive={index === currentStoryIndex}
            onComplete={goToNextStory}
          />
        ))}
      </div>

      {/* Konten Story */}
      {stories.map((story, index) => (
        <div
          key={index}
          className={`flex-grow overflow-y-auto p-1 ${
            currentStoryIndex === index ? "block" : "hidden"
          }`}
        >
          <div className={isAnimating ? "text-animation" : ""}>
            {story.html}
          </div>
        </div>
      ))}

      {/* Tombol Area untuk Navigasi */}
      <div className="absolute inset-0 flex">
        {/* Area Klik untuk Story Sebelumnya */}
        {currentStoryIndex > 0 && (
          <button
            onClick={goToPreviousStory}
            className="w-1/2 h-full bg-transparent z-10 focus:outline-none"
            aria-label="Previous Story"
          />
        )}

        {/* Area Klik untuk Story Selanjutnya */}
        {currentStoryIndex < stories.length - 1 && (
          <button
            onClick={goToNextStory}
            className="w-1/2 h-full bg-transparent z-10 ml-auto focus:outline-none"
            aria-label="Next Story"
          />
        )}
      </div>

      {/* Dots */}
      <div className="fixed bottom-4 w-full">
        <StoryDots stories={stories} currentIndex={currentStoryIndex} />
      </div>
    </div>
  );
}
