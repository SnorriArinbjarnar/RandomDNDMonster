import React from 'react';
import {render, fireEvent, cleanup } from '@testing-library/react';
import Button from '../button/button';

afterEach(cleanup);

describe('button', () => {
    it('should call click handler on click', async() => {
        const mockedOnClick = jest.fn();
        const { getByTestId} = render(<Button label="something" handleClick={mockedOnClick} type="button" />);
        const button = getByTestId('btn');
        fireEvent.click(button);
        expect(mockedOnClick).toHaveBeenCalled();
    }) 
});