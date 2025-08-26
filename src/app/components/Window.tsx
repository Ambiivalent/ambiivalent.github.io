import { ReactNode } from "react";

type WindowTypes = {
    heading: string,
    children: ReactNode,
}
export default function Window({heading, children}:WindowTypes) {
    return (
        <>

        <div className="pt-5 lg:p-5">
            <div className="flex bg-neutral-400 dark:bg-neutral-600 pl-3 pt-1 pb-1 w-full justify-between">
                <h1 className="font-bold" id={heading.toLowerCase()}>{heading}</h1>
                <div className="grid grid-cols-3 self-end gap-3 pr-3">
                    {/* TODO: Maybe add functionality for these buttons */}
                    <button className="">
                        ‒
                    </button>
                    <button>
                        □
                    </button>
                    <button className="">
                        X
                    </button>

                </div>

            </div>
            <div className="border-2 border-t-0 border-neutral-400 dark:border-neutral-600 pr-5 pl-5 lg:pr-10 lg:pl-10 pt-5 pb-5">
                {children}
            </div>
          </div>
        </>
    )
}