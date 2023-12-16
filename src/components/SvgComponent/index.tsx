import React from 'react';

interface SvgComponentProps {
  svgContent: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({ svgContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default SvgComponent;
