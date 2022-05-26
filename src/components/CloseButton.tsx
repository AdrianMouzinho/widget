import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button className="absolute right-0 p-1 text-text-500 hover:text-text-400" title="Fechar formulário de feedback">
            <X size="16" />
        </Popover.Button>
    )
}