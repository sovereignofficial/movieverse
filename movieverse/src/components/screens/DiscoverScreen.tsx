
import { ReactNode } from "react"

export const DiscoverScreen = ({children}:DiscoverProps) => {


    return (
        <div className="col-span-12 p-2 space-y-28">
            <h1 className="md:ml-10 text-2xl font-medium">Discover</h1>
            {children}
        </div>
    )
}

interface DiscoverProps{
    children:ReactNode,
}

