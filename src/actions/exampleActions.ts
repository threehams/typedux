export type ExampleActionFunction = (example: string) => ExampleAction;

export interface ExampleAction {
  payload: {
    example: string;
  };
  type: "EXAMPLE";
}

export const exampleAction: ExampleActionFunction = example => ({
  payload: {
    example,
  },
  type: "EXAMPLE",
});
