import * as React from 'react';
import { Provider } from 'react-redux';

import { ExampleApp } from '.';

interface AppProps {
  // tslint:disable-next-line no-any
  store: any;
}

export class App extends React.Component<AppProps, {}> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <ExampleApp />
      </Provider>
    );
  }
}
