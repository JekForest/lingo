import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2" >
            {/* hidden 意味着在移动设备上，页脚不可见 */}
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size='lg' variant='ghost' >
                    <Image src='/hr.svg'
                        alt="Croation"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Croatian
                </Button>
                <Button size='lg' variant='ghost'  >
                    <Image src='/es.svg'
                        alt="Spanish"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size='lg' variant='ghost'  >
                    <Image src='/fr.svg'
                        alt="French"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    French
                </Button>
                <Button size='lg' variant='ghost' >
                    <Image src='/it.svg'
                        alt="Italian"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Italian
                </Button>
                <Button size='lg' variant='ghost' >
                    <Image src='/cn.svg'
                        alt="China"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    China
                </Button>
            </div>
        </footer>
    )
}