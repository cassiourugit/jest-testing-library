import React, { FC, MouseEvent, useState, CSSProperties } from 'react';

type ButtonColor = 'blue' | 'red';

interface ButtonProps {
  color: ButtonColor;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  children: string;
  testID?: string;
}

const colorToRGB: Record<ButtonColor, number[]> = {
  blue: [0, 0, 255],
  red: [255, 0, 0],
};

export const Button: FC<ButtonProps> = ({ color, onClick, children, style, testID = 'btn' }) => {
  const [pressed, setPressed] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseDown = () => {
    setPressed(true);
    setDisabled(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
    setDisabled(false);
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: pressed
      ? `rgb(${colorToRGB[color].map((c) => Math.floor((c + 0) / 2)).join(', ')})`
      : disabled
      ? `rgb(${colorToRGB[color].join(', ')})`
      : hovered
      ? `rgb(${colorToRGB[color].map((c) => Math.floor((c + 255) / 2)).join(', ')})`
      : `rgb(${colorToRGB[color].join(', ')})`,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ...style,
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHovered(false);
    }
  };

  return (
    <button
      data-testid={testID}
      style={buttonStyle}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};