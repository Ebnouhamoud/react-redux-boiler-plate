/* eslint-disable import/export */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../reduxStore.js';

const AllProviders =
  (initialValue) =>
  ({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
  };

const customRender = (component, options, initialValue = {}) =>
  render(component, { wrapper: AllProviders(initialValue), ...options });

export * from '@testing-library/react';

export { customRender as render };
