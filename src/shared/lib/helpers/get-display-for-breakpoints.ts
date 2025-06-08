import { theme } from '@chakra-ui/react';

type Breakpoint = keyof typeof theme.breakpoints;

type Display =
    | 'block'
    | 'inline-block'
    | 'none'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | '-webkit-box';

type DisplayRange = Partial<{
    display: Display;
    from: Breakpoint;
    to: Breakpoint;
}>;

type ResponsiveDisplay = Partial<Record<Breakpoint, Display>>;

type CSSDisplayProperty = {
    display: ResponsiveDisplay;
};

const allBreakpoints: Breakpoint[] = Object.keys(theme.breakpoints) as Breakpoint[];

export function getDisplayForBreakpoints({
    display = 'flex',
    from = allBreakpoints[0],
    to = allBreakpoints[allBreakpoints.length - 1],
}: DisplayRange): CSSDisplayProperty {
    const fromIndex = allBreakpoints.indexOf(from);
    const toIndex = allBreakpoints.indexOf(to);

    const adjustedFrom = fromIndex === -1 ? 0 : fromIndex;
    const adjustedTo = toIndex === -1 ? allBreakpoints.length - 1 : toIndex;

    const displayMap = allBreakpoints.reduce<ResponsiveDisplay>((acc, bp, index) => {
        acc[bp] = index >= adjustedFrom && index <= adjustedTo ? display : 'none';
        return acc;
    }, {});

    return {
        display: displayMap,
    };
}
