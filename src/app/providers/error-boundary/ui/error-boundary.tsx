import { Button, Stack, Text } from '@chakra-ui/react';
import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

import { errorBoundaryStyles as styles } from './error-boundary.styles';

type ErrorBoundaryProps = PropsWithChildren;

type ErrorBoundaryState = {
    hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('The caught error:', error, errorInfo);
    }

    private handleReload = () => {
        window.location.reload();
    };

    render(): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Stack {...styles.container}>
                    <Text {...styles.errorText}>Произошла неизвестная ошибка.</Text>
                    <Text {...styles.hintText}>Пожалуйста, попробуйте перезагрузить страницу.</Text>
                    <Button {...styles.reloadButton} onClick={this.handleReload}>
                        Перезагрузить
                    </Button>
                </Stack>
            );
        }

        return children;
    }
}
