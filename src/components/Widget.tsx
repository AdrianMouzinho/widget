import { ChatTeardropDots, X } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget(){

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end gap-5">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand rounded-full text-white flex p-3 shadow-brand-bx group">
                <ChatTeardropDots className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}