import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../../../assets/icons/selection.json";

interface IconProps {
  color?: string,
  size: number,
  icon: string,
  className?: string
}

export default function Icon({color, size, icon, className}: IconProps) {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  )
}