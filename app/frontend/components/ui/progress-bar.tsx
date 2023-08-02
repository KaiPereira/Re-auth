import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';


type ProgressBarProps = {
    progressPercent: number,
    className?: string
}

const ProgressDemo = ({
    className,
    progressPercent
}: ProgressBarProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPercent), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className={cn("relative bg-secondary overflow-hidden rounded-full w-[200px] h-[15px]", className)}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-slate-900 w-full h-full transition-transform duration-700 ease-[cubic-bezier(1,0,1,-0.01)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;