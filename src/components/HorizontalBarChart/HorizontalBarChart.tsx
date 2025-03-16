import React from "react";

interface ProgressBarProps {
  progress: number; // Progress percentage (0 to 100)
}

const HorizontalBarChart: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
      <div
        className="bg-[#E97A20] h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default HorizontalBarChart;