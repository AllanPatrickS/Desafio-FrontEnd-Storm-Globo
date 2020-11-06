import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import App from './app';

describe('Testing app', () => {

  it('renders correctly', () => {
    const wrapper = create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });
});