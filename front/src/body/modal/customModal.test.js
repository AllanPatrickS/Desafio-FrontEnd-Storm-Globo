import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Modal from './customModal';

describe('Testing modal', () => {

  it('renders correctly', () => {
    const wrapper = create(<Modal open={false}/>)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});