import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Problema',
        image: {
            src: ideaImageUrl,
            alt: 'Imagem de um lâmpada'
        }
    },
    THOUGHT: {
        title: 'Problema',
        image: {
            src: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-surface-500 p-4 rounded-2xl shadow-surface-bx w-[calc(100vw-2rem)] md:w-auto flex flex-col items-center">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                <FeedbackContentStep />
            )}

            <footer className="text-xs text-text-500">
                <span>Feito com ♥ pela <a className=" underline underline-offset-2" href="https://rocketseat.com.br">Rocktseat</a></span>
            </footer>
        </div>
    )
}