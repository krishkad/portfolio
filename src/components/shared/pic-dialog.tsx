"use client"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"


export default function PicDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-20 h-20 relative">
                    <Image src={'/img/krrishkad.jpg'} fill sizes='height:100%, width:100%' className='object-cover rounded-full' alt='img' />
                </div>
            </DialogTrigger>
            <DialogContent className="w-[250px] sm:max-w-[325px] aspect-square bg-transparent border-none" onOpenAutoFocus={(e) => e.preventDefault()}>
                <Image src={'/img/krrishkad.jpg'} fill sizes='height:100%, width:100%' className='object-cover rounded-full' alt='img' />
            </DialogContent>
        </Dialog>
    )
}
