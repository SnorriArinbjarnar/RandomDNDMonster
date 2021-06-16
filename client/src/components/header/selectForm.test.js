import React from 'react';
import {render, fireEvent, cleanup } from '@testing-library/react';

import SelectForm from './selectForm';
afterEach(cleanup);

describe('Test react select component', () => {
    const mockedOptions = [
        {label: 'Mocked option 1', value: 'mocked-option-1'},
        {label: 'Mocked option 2', value: 'mocked-option-2'},
        {label: 'Mocked option 3', value: 'mocked-option-3'},
        {label: 'Mocked option 4', value: 'mocked-option-4'},
        {label: 'Mocked option 5', value: 'mocked-option-5'},
        {label: 'Mocked option 6', value: 'mocked-option-6'},
        {label: 'Mocked option 7', value: 'mocked-option-7'},
        {label: 'Mocked option 8', value: 'mocked-option-8'},
        {label: 'Mocked option 9', value: 'mocked-option-9'},
        {label: 'Mocked option 10', value: 'mocked-option-10'},
    ];

    it('should populate the select tag', async () => {
        const mockedOnChange = jest.fn();
        const { getAllByTestId } = render(<SelectForm options={mockedOptions} handleChange={mockedOnChange} />);
        let options = getAllByTestId('select-option');
        expect(options.length).toBe(10);
       
    });
  
    it('should select the correct options', async() => {
        const mockedOnChange = jest.fn();
        const { getByTestId, getAllByTestId } = render(<SelectForm options={mockedOptions} handleChange={mockedOnChange} />);
        let options = getAllByTestId('select-option');

        fireEvent.change(getByTestId('select-tag'), {target: { value: 'mocked-option-2'}});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeTruthy();
    });

    it('button click should fire an onSubmit handler', async() => {
        const mockedOnChange = jest.fn();
        const mockedOnSubmit = jest.fn();
        const { getByTestId, getAllByTestId } = render(<SelectForm options={mockedOptions} handleChange={mockedOnChange} handleSubmit={mockedOnSubmit} />);
        
        fireEvent.change(getByTestId('select-tag'), {target: { value: 'mocked-option-2'}});
        fireEvent.submit(getByTestId('select-form'))
        expect(mockedOnSubmit).toHaveBeenCalled();
    });

    it('selecting new item should fire an onChange handler', async() => {
        const mockedOnChange = jest.fn();
        const mockedOnSubmit = jest.fn();
        const { getByTestId} = render(<SelectForm options={mockedOptions} handleChange={mockedOnChange} handleSubmit={mockedOnSubmit} />);
        
        fireEvent.change(getByTestId('select-tag'), {target: { value: 'mocked-option-2'}});
        expect(mockedOnChange).toHaveBeenCalled();
    });
});


