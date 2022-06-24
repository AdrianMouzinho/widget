import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";

import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header className="relative w-full flex justify-center text-xl leading-6">
                <button 
                    type="button"
                    className="absolute left-0 p-1 text-zinc-400 hover:text-zinc-100"
                    onClick={() => onFeedbackRestartRequested()}
                >
                    <ArrowLeft size="16" weight="bold"/>
                </button>

                <span className="flex items-center gap-2">
                    <img 
                        className="w-6 h-6"
                        src={feedbackTypeInfo.image.src}
                        alt={feedbackTypeInfo.image.alt} 
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form className="flex flex-col justify-center gap-2 my-4 w-full">
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder={feedbackTypeInfo.placeholder}

                />

                <div className="flex gap-2">
                    <ScreenshotButton />

                    <button
                        type="submit"
                        className="p-2 flex-1 bg-brand-500 hover:bg-brand-400 text-white border-transparent rounded-md text-sm leading-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
}