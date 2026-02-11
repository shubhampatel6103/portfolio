import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      header,
      defaultOpen = false,
      isOpen: controlledIsOpen,
      onToggle,
      children,
      className = "",
      ...props
    },
    ref,
  ) => {
    const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
    const isOpen =
      controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

    const handleToggle = () => {
      if (controlledIsOpen === undefined) {
        setInternalIsOpen(!internalIsOpen);
      }
      onToggle?.();
    };

    return (
      <div ref={ref} className={className} {...props}>
        {header ? (
          <button
            onClick={handleToggle}
            className="w-full flex items-center justify-between gap-2 text-white hover:text-teal-500 transition-colors py-2 border-b border-teal-700/30"
          >
            <span className="text-left">{header}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-500 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <button
            onClick={handleToggle}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-teal-500 transition-colors cursor-pointer"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-500 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
            {isOpen ? "Show less" : "Show more"}
          </button>
        )}

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          {children}
        </div>
      </div>
    );
  },
);
Collapsible.displayName = "Collapsible";

export { Collapsible };
