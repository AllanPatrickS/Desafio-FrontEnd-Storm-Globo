import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Body from './body';

describe('Testing body', () => {

  it('renders correctly', () => {
    const wrapper = create(<Body />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});