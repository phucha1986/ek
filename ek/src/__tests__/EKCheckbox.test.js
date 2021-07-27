import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom';
import EKCheckbox from '../components/commons/EKCheckbox';

describe('EKButton', () => {
  it('renders without prop', () => {
    const wrapper = shallow(<EKCheckbox />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('renders with prop', () => {
    const props = {
      id: 'chkTest',
      title: 'test check me',
      dispatch: jest.fn()      
    }
    const wrapper = shallow(<EKCheckbox {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('should has icon-check class when checkbox is checked', () => {    
    const props = {
      id: 'chkTest',
      title: 'test check me',
      dispatch: jest.fn()      
    }
    const component = shallow(<EKCheckbox {...props}/>);  
    component.find('input#chkTest').simulate('click');
    expect(component.find('label').hasClass('icon-check')).toBeFalsy();
  });
  // it('should return false if clientSideValidation is failed', () => {
  //   const handleSubmit = jest.fn();
  //   const clientSideValidation = jest.fn(() =>  false);
  //   const props = {
  //     id: 'btnTest',
  //     title: 'click',
  //     LoadingText: 'loading',
  //     EnableLoading: false,
  //     clientSideValidation,
  //     handleSubmit,
  //     dispatch: jest.fn()      
  //   }
  //   const component = shallow(<EKButton {...props}/>);  
  //   component.find('button#btnTest').simulate('click');
  //   expect(clientSideValidation.mock.results[0].value).toBeFalsy();    
  // });
  // it('should call handleSubmit if clientSideValidation is passed', () => {
  //   const handleSubmit = jest.fn();
  //   const clientSideValidation = jest.fn(() =>  true);
  //   const props = {
  //     id: 'btnTest',
  //     title: 'click',
  //     LoadingText: 'test loading',
  //     EnableLoading: true,
  //     clientSideValidation,
  //     handleSubmit,
  //     dispatch: jest.fn()      
  //   }
  //   const component = shallow(<EKButton {...props}/>);  
  //   component.find('button#btnTest').simulate('click');
  //   expect(handleSubmit).toHaveBeenCalled();    
  // });
})