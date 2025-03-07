import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import navigation from '../../components/layouts/data/navigation.json';

  
const HamburgerMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger><Menu color="white"/></SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
                <ul className="flex flex-col gap-4">
                    {navigation.items.map((item) => (
                    <li className="">
                        <a 
                        href={`${item.link}`}
                        className={`transition nav-link-hamburger py-3 px-6 `}
                        >
                        {item.text}
                        </a>
                    </li>
                    ))}
                </ul>
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>

    </div>
  )
}

export default HamburgerMenu
