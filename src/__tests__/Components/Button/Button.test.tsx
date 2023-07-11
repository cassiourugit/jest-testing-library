/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../../../Components/Button';
import userEvent from '@testing-library/user-event';

const onClickSpy = jest.fn();

describe('Button tests', () => {
    it('Should render button', () => {
        render(<Button color='blue' children='Adicionar' onClick={()=>{}} />)

        const button = screen.getByRole('button')

        expect(button).toBeTruthy()
    })

    it.each`
    color      | backgroundColor
    ${'blue'}  | ${'rgb(0, 0, 255)'}
    ${'red'}   | ${'rgb(255, 0, 0)'}
    `(
        `Should render rest button with backgroundColor $backgroundColor when color is set to $color`,
        ({ color, backgroundColor }) => {
            render(<Button color={color} children='Adicionar' onClick={()=>{}} />)

            const button = screen.getByRole('button')

            expect(button).toHaveStyle({ backgroundColor })
        },
    );

    it.each`
    color      | textColor
    ${'blue'}  | ${'white'}
    ${'red'}   | ${'white'}
    `(
        `Should render rest button with textColor $textColor when color is set to $color`,
        ({ color, textColor }) => {
            render(<Button color={color} children='Adicionar' onClick={()=>{}} />)

            const button = screen.getByRole('button')

            expect(button).toHaveStyle({ color: textColor })
        },
    );

    it.each`
    color      | backgroundColor
    ${'blue'}  | ${'rgb(127, 127, 255)'}
    ${'red'}   | ${'rgb(255, 127, 127)'}
    `(
        `Should render hovered button with backgroundColor $backgroundColor when color is set to $color`,
        ({ color, backgroundColor }) => {
            render(<Button color={color} children='Adicionar' onClick={()=>{}} />)

            const button = screen.getByRole('button')
            fireEvent.mouseOver(button)

            expect(button).toHaveStyle({ backgroundColor })
        },
    );

    it.each`
    color      | textColor
    ${'blue'}  | ${'white'}
    ${'red'}   | ${'white'}
    `(
        `Should render hovered button with textColor $textColor when color is set to $color`,
        ({ color, textColor }) => {
            render(<Button color={color} children='Adicionar' onClick={()=>{}} />)

            const button = screen.getByRole('button')
            fireEvent.mouseOver(button)

            expect(button).toHaveStyle({ color: textColor })
        },
    );

    it.each`
    color      | backgroundColor
    ${'blue'}  | ${'rgb(0, 0, 127)'}
    ${'red'}   | ${'rgb(127, 0, 0)'}
    `(
        `Should render pressed button with backgroundColor $backgroundColor when color is set to $color`,
        ({ color, backgroundColor }) => {
            render(<Button color={color} children='Adicionar' onClick={()=>{}} />)

            const button = screen.getByRole('button')
            fireEvent.mouseDown(button)

            expect(button).toHaveStyle({ backgroundColor })
        },
    );

    it.each`
    color      | textColor
    ${'blue'}  | ${'white'}
    ${'red'}   | ${'white'}
    `(
        `Should render pressed button with textColor $textColor when color is set to $color`,
        ({ color, textColor }) => {
            render(<Button color={color} children='Adicionar' onClick={()=>{}} />)

            const button = screen.getByRole('button')
            fireEvent.mouseDown(button)

            expect(button).toHaveStyle({ color: textColor })
        },
    );

    it('Should call onClick function when button is clicked', () => {
        render(<Button color='blue' children='Adicionar' onClick={onClickSpy} />)

        const button = screen.getByRole('button')
        userEvent.click(button)

        expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
})