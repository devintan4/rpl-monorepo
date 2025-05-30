import React from "react";

export const Button: React.FC<{ label: string }> = ({ label }) => (
  <button style={{ padding: "0.5rem 1rem" }}>{label}</button>
);
