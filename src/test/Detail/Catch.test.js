import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil';
import SuccessModal from '../../component/Detail/Catch/SuccessModal'
import FailedModal from '../../component/Detail/Catch/FailedModal'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const setShow = jest.fn()
const setSuccess = jest.fn()
const setTry = jest.fn()
const data = false

const pokemonData = {
    sprites: {
        front_default: ''
    }
}

const history = createMemoryHistory()

test('Check if success modal can give input', async() => {
    render(
        <RecoilRoot>
            <Router history={history}>
                <SuccessModal setShow={setShow} pokemon={pokemonData} />
            </Router>
        </RecoilRoot>);

    const input = screen.getByPlaceholderText("Your Pokémon's name")
    userEvent.type(input, 'azka cantik')

    const continueButton = screen.getByText(/Continue/i)
    expect(continueButton).toBeInTheDocument()

    const leftClick = { button: 0 }
    userEvent.click(continueButton, leftClick)

    await waitFor(() => {
        const submitText = screen.getByText(/azka cantik has been added/i)
        expect(submitText).toBeInTheDocument()
    }, 30000)
}, 30000);

test('Check if failed modal renders', () => {
    render(
        <FailedModal setShow={setShow} setSuccess={setSuccess} setTry={setTry} data={data} />);

    const failedText = screen.getByText(/failed to catch/i)
    expect(failedText).toBeInTheDocument()
    
    const tryAgainButton = screen.getAllByText(/Try again/i)[1]
    expect(tryAgainButton).toBeInTheDocument()
});