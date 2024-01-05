import { useState, useEffect } from 'react';

export const useMessageListener = (messages:{name:string,value:string | null}[]) => {
    const [currentMessage, setCurrentMessage] = useState<{name:string,value:string} | null>(null);

    useEffect(() => {
        for (const message of messages) {
            if (message && message.value) {
                setCurrentMessage({
                    name: message.name,
                    value: message.value as string 
                });
                break;
            }
        }
    }, [messages]);

    return currentMessage;
};