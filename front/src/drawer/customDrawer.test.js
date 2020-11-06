import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Drawer from './customDrawer';

describe('Testing drawer', () => {

  it('renders correctly', () => {
    const wrapper = create(<Drawer row={{
      _id: 'teste',
      username: 'test',
      email: 'email@teste.com',
      createdAt: '20/20/2020',
      updatedAt: '20/20/2020',
      rules: 0,
      status: true
    }} />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});