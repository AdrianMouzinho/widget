import { ChatTeardropDots, X } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget(){

    return (
        <Popover className="absolute bottom-10 right-10 flex flex-col justify-center items-end gap-5">
            <Popover.Panel className="p-4 rounded-2xl bg-surface-500 text-text-400 transition-all duration-500 ease-linear">
                <h1 className="flex justify-center text-xl">
                    Deixe seu feedback
                    <Popover.Button>
                        <X className="h-max w-max p-1 absolute top-4 right-4 text-text-500" size="16" />
                    </Popover.Button>
                </h1>
                <div className="flex gap-2 mt-8 mb-12">
                    <div className="flex flex-col justify-center items-center gap-2 rounded-lg w-24 h-28 bg-surface-400 text-sm">
                        <img src="../../public/img/bug.svg" alt="bug" />
                        Problema
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 rounded-lg w-24 h-28 bg-surface-400 text-sm">
                        <img src="../../public/img/Idea.svg" alt="bug" />
                        Ideia
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 rounded-lg w-24 h-28 bg-surface-400 text-sm">
                        <img src="../../public/img/Thought.svg" alt="bug"/>
                        Outro
                    </div>
                </div>
                <span className="text-xs text-text-500 flex justify-center">Feito com ♥ pela Rocktseat</span>
            </Popover.Panel>

                <Popover.Button className="flex p-3 rounded-full bg-brand-500 text-white group">
                    <ChatTeardropDots className="w-6 h-6" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                        <span className="pl-2"></span>Feedback
                    </span>
                </Popover.Button>
        </Popover>
    )
}