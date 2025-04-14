import { FC } from 'react';
import { RouterProvider } from 'react-router/dom';

import { Router } from '../config/router-config';

export const AppRouter: FC = () => <RouterProvider router={Router} />;
