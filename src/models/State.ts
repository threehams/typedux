import { ImmutableObject } from "seamless-immutable";
import { Example } from "./";

interface StateProps {
  example: Example;
}

export type State = ImmutableObject<StateProps> & StateProps;
