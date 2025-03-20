import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <SheetTitle>
          {/* 处理 nextjs 中的屏幕阅读器的问题 */}
          <Sidebar />
        </SheetTitle>
      </SheetContent>
    </Sheet>
  )
}