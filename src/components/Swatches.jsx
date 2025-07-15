import React from 'react';
import { ColorItem } from '@storybook/addon-docs'; // adjust import as needed

const getCssVariableValue = (varName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || 'transparent';
};

const Swatches = ({ title, subtitle, colors }) => {
  const resolvedColors = Object.fromEntries(
    Object.entries(colors).map(([key, cssVar]) => [key, getCssVariableValue(cssVar)])
  );

  return <ColorItem title={title} subtitle={subtitle} colors={resolvedColors} />;
};

export default Swatches;