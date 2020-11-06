import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Filter from './filter';

describe('Testing filter', () => {

  it('renders correctly', () => {
    const wrapper = create(<Filter />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});