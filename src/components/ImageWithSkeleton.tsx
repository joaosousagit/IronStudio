import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  containerClassName?: string;
}

export const ImageWithSkeleton = ({
  src,
  alt,
  className,
  skeletonClassName,
  containerClassName,
}: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && !hasError && (
        <Skeleton
          className={cn(
            "absolute inset-0 w-full h-full",
            skeletonClassName
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-out",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};
