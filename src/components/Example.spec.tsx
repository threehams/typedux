import { shallow } from 'enzyme';
import * as React from 'react';

import { Example } from './Example';

describe('Example', () => {
  it('renders an example component', () => {
    const element = shallow(<Example className="example">hi</Example>);
    expect(element.contains(<div className="example">hi</div>)).toBe(true);
  });
});
