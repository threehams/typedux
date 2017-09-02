import { ImmutableObject } from "seamless-immutable";

interface ExampleProps {
  example: string;
}

export type Example = ImmutableObject<ExampleProps> & ExampleProps;
