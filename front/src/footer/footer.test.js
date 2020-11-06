import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Footer from './footer';

describe('Testing footer', () => {

  it('renders correctly', () => {
    const wrapper = create(<Footer />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});