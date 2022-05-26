import { X } from "phosphor-react";
import { CloseButton } from "./CloseButton";

export function WidgetForm() {
    return (
        <div className="bg-surface-500 p-4 rounded-2xl shadow-surface-bx w-[calc(100vw-2rem)] md:w-auto">
            <header className="relative flex justify-center text-xl leading-6">
                Deixe seu feedback
                <CloseButton />
            </header>

            <div className="flex justify-center gap-2 mt-8 mb-12">
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

            <footer className="text-xs text-text-500 flex justify-center">
                <span>Feito com ♥ pela <a className=" underline underline-offset-2" href="https://rocketseat.com.br">Rocktseat</a></span>
            </footer>
        </div>
    )
}