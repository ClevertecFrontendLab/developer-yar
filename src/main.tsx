import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from '~/app/providers/app-router';
import { ChakraUI } from '~/app/providers/chakra-ui';
import { ErrorBoundary } from '~/app/providers/error-boundary';
import { Store } from '~/app/providers/redux';

const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <ErrorBoundary>
            <ChakraUI>
                <Store>
                    <AppRouter />
                </Store>
            </ChakraUI>
        </ErrorBoundary>
    </StrictMode>,
);
