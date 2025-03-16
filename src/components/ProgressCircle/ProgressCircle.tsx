import React from "react";

interface ProgressCircleProps {
  value: number; // Progress value (0-100)
  size?: number; // Circle size
  strokeWidth?: number; // Circle stroke width
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  size = 50,
  strokeWidth = 5,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-0deg]">
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="gray"
        strokeWidth={strokeWidth}
        fill="none"
        className="opacity-20"
      />
      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E97A20"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-500"
      />
      {/* Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-sm font-bold text-[#000000]"
      >
        {value}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
