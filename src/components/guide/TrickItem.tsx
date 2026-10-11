import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { Tricks } from "../../interfaces/Pokemon";

interface TrickItemProps {
  trick: Tricks;
  level?: number;
}

export function TrickItem({ trick, level = 0 }: TrickItemProps) {
  const hasVariants = trick.variant?.length > 0;
  const [isExpanded, setIsExpanded] = useState(false);
  const Chevron = isExpanded ? ChevronDown : ChevronRight;

  return (
    <div className="w-full">
      <div
        className={`p-3 rounded-lg mb-2 bg-[#1e293b] border border-gray-700 ${hasVariants ? "cursor-pointer" : ""}`}
        style={{ marginLeft: `${level}rem` }}
        onClick={hasVariants ? () => setIsExpanded(!isExpanded) : undefined}
      >
        <div className="flex items-start gap-2">
          {hasVariants ? (
            <Chevron className="w-4 h-4 mt-1 flex-shrink-0 transition-transform" />
          ) : (
            <div className="w-4 h-4 mt-1 flex-shrink-0" />
          )}
          <span className="text-sm leading-relaxed">{trick.detail}</span>
        </div>
      </div>

      {hasVariants && isExpanded && (
        <div className="pl-4 border-l-2 border-gray-600 animate-in slide-in-from-top duration-200">
          {trick.variant.map((variant, index) => (
            <TrickItem key={index} trick={variant} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
