interface GradientProps {
  children: React.ReactNode;
  className?: string;
  height?: number;
  direction?: 'top' | 'bottom' | 'both';
}

export function Gradient({ children, className = "", height = 80, direction = 'bottom' }: GradientProps) {
  const getGradientStyle = () => {
    switch (direction) {
      case 'top':
        return `linear-gradient(to top, black ${height}%, transparent)`;
      case 'bottom':
        return `linear-gradient(to bottom, black ${height}%, transparent)`;
    
      default:
        return `linear-gradient(to bottom, black ${height}%, transparent)`;
    }
  };

  return (
    <div 
      className={className}
      style={{maskImage: getGradientStyle()}}
    >
      {children}
    </div>
  );
} 