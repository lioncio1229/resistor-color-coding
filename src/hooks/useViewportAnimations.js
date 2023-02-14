import { useState } from "react";


export default function useViewportAnimation(initialState='default')
{
    const [view, setView] = useState(initialState);

    const getAnimationClass = () => {
        switch (view) {
            case 'rcc-toMain':
                return  'rcc-to-main-animation';
            case 'rcc-toImg':
                return 'rcc-to-img-animation';
            case 'default':
                return '';
        }
    }

    return {view, setView, getAnimationClass};
}