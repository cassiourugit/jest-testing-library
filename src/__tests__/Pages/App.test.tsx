/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable no-restricted-globals */
import React from 'react'
import App from '../../Pages/App'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { create } from 'react-test-renderer'

describe('App tests', () => {
    it('Should render title', () => {
        render(<App/>)

        const title = screen.getByRole('title')

        expect(title).toHaveTextContent('Todos esses carros são confiáveis')        
    })

    it('Should render input', () => {
        render(<App/>)

        const input = screen.getByRole('input')

        expect(input).toBeTruthy()
    })

    it('Should render button Adicionar', () => {
        render(<App/>)

        const button = screen.getByText('Adicionar')

        expect(button).toBeTruthy()
    })

    it('Should render default list', () => {
        render(<App/>)

        expect(screen.getAllByRole('listitem').length).toBe(4)
        expect(screen.getByText('Toyota')).toBeTruthy()
        expect(screen.getByText('Honda')).toBeTruthy()
        expect(screen.getByText('Suzuki')).toBeTruthy()
        expect(screen.getByText('Nissan')).toBeTruthy()
    })

    it('Should add Peugeot to the list', async () => {
        render(<App/>)

        const input = screen.getByRole('input')
        const btnAdicionar = screen.getByText('Adicionar')

        userEvent.type(input, 'Peugeot')
        userEvent.click(btnAdicionar)

        await waitFor(async () => {
            expect(screen.getByText('Peugeot')).toBeTruthy()
            expect(screen.getByRole('title')).toHaveTextContent('Nem todos esses carros são confiáveis')
        })
    })

    it('Should remove Nissan from the List', async () => {
        render(<App/>)

        const btnRemover = screen.getByTestId('btn_remover_Nissan')

        userEvent.click(btnRemover)

        await waitFor(async () => {
            expect(screen.queryByText('Nissan')).toBeFalsy()
        })
    })

    it('Should render snapshot', () => {
        const { toJSON } = create(<App/>)

        expect(toJSON()).toMatchSnapshot()
    })
})