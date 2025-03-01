import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/lib/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Sidebar = ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const isMobile = useIsMobile()

  return (
    <div className={cn("flex h-full", className)}>
      <div
        className={cn(
          "relative flex h-full flex-col border-r bg-background transition-all duration-300",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex items-center justify-between p-4">
          {isOpen && <div className="text-lg font-semibold">Menu</div>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto"
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Sidebar } 