import * as React from "react";

interface ExampleProps {
  className: string;
  example?: string;
}

export const Example: React.StatelessComponent<ExampleProps> = ({
  className,
  children,
}) => {
  return (
    <div>
      <div className={className}>{children}</div>
    </div>
  );
};
