import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export const useAnchorLink = (anchorLink: string) => {
    const { hash } = useLocation();
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const targetHash = anchorLink.startsWith('#') ? anchorLink : `#${anchorLink}`;

        if (hash === targetHash && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash, anchorLink]);

    return ref;
};
