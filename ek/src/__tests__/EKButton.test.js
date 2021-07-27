import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EKButton from '../components/commons/EKButton';

describe('EKButton', () => {
  it('renders without prop', () => {
    const wrapper = shallow(<EKButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('renders with prop', () => {
    const props = {
      id: 'btnTest',
      title: 'click',
      LoadingText: 'loading',
      clientSideValidation: jest.fn(),
      handleSubmit: jest.fn(),
      dispatch: jest.fn()      
    }
    const wrapper = shallow(<EKButton {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('should call the onclick when button is clicked', () => {
    const handleSubmit = jest.fn();
    const clientSideValidation = jest.fn();
    const props = {
      id: 'btnTest',
      title: 'click',
      LoadingText: 'loading',
      EnableLoading: false,
      clientSideValidation,
      handleSubmit,
      dispatch: jest.fn()      
    }
    const component = shallow(<EKButton {...props}/>);  
    component.find('button#btnTest').simulate('click');
    expect(clientSideValidation).toHaveBeenCalled();    
  });
  it('should return false if clientSideValidation is failed', () => {
    const handleSubmit = jest.fn();
    const clientSideValidation = jest.fn(() =>  false);
    const props = {
      id: 'btnTest',
      title: 'click',
      LoadingText: 'loading',
      EnableLoading: false,
      clientSideValidation,
      handleSubmit,
      dispatch: jest.fn()      
    }
    const component = shallow(<EKButton {...props}/>);  
    component.find('button#btnTest').simulate('click');
    expect(clientSideValidation.mock.results[0].value).toBeFalsy();    
  });
  it('should call handleSubmit if clientSideValidation is passed', () => {
    const handleSubmit = jest.fn();
    const clientSideValidation = jest.fn(() =>  true);
    const props = {
      id: 'btnTest',
      title: 'click',
      LoadingText: 'test loading',
      EnableLoading: true,
      clientSideValidation,
      handleSubmit,
      dispatch: jest.fn()      
    }
    const component = shallow(<EKButton {...props}/>);  
    component.find('button#btnTest').simulate('click');
    expect(handleSubmit).toHaveBeenCalled();    
  });
})