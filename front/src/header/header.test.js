import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Header from './header';

describe('Testing header', () => {

  it('renders correctly', () => {
    const wrapper = create(<Header />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});