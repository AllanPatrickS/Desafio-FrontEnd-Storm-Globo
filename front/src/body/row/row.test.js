import { cleanup } from '@testing-library/react';
import { create } from "react-test-renderer";
import Row from './row';

describe('Testing row', () => {

  it('renders correctly', () => {
    const wrapper = create(<Row row={{
      _id: 'teste',
      username: 'test',
      email: 'email@teste.com',
      createdAt: '20/20/2020',
      updatedAt: '20/20/2020',
      rules: 0,
      status: true
    }}/>)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  afterEach(function () {
    cleanup();
  });

});