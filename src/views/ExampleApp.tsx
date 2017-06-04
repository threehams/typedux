import * as React from 'react';
import { connect } from 'react-redux';
import { Example } from '../components';
import { State } from '../models';

interface AppProps {
  example: string;
}

const mapStateToProps = (state: State) => ({
  example: state.example.example,
});

const BaseExampleApp: React.StatelessComponent<AppProps> = ({ example }) => {
  return (
    <div>
      <Example className={example || ''}>example</Example>
      <Example className={example || ''}>example</Example>
    </div>
  );
};

export const ExampleApp: React.ComponentClass<{}> = connect(
  mapStateToProps,
)(BaseExampleApp);
