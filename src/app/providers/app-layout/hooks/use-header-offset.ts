import { useEffect, useState } from 'react';

export const useHeaderOffset = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const update = () => {
            const header = document.getElementById('site-header');
            if (!header) return;

            const rect = header.getBoundingClientRect();

            const topInView = Math.max(rect.top, 0);

            const bottomInView = Math.min(rect.bottom, window.innerHeight);
            const visibleHeight = Math.max(0, bottomInView - topInView);

            setOffset(visibleHeight);
        };

        update();
        window.addEventListener('scroll', update);
        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return offset;
};
