import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export const useAnchorLink = (anchorLink: string) => {
    const location = useLocation();
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const targetHash = anchorLink.startsWith('#') ? anchorLink : `#${anchorLink}`;

        if (location.hash === targetHash && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location, anchorLink]);

    return ref;
};
