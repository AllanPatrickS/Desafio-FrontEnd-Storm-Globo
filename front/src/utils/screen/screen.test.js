import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Screen from './screen';

describe('Testing screen', () => {

  it('renders correctly', () => {
    const wrapper = create(<Screen />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});