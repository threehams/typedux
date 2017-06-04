import * as React from 'react';
import { Provider } from 'react-redux';

import { ExampleApp } from '.';

interface AppProps {
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
