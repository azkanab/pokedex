import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import Detail from '../../component/Detail';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import { MockedProvider } from '@apollo/client/testing';
import { MocksPokemonDetail } from '../ApolloMocks/Queries'

const spyScrollTo = jest.fn();

const path = '/detail/:pokemonName'
const route = '/detail/charmeleon'

const history = createMemoryHistory({initialEntries: [route]})

beforeEach(() => {
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    spyScrollTo.mockClear();
});

test('Check if catch modal open', async () => {
    render(
        <MockedProvider mocks={MocksPokemonDetail} addTypename={false}>
            <RecoilRoot>
                <Router history={history}>
                    <Route path={path} component={Detail} />
                </Router>
            </RecoilRoot>
        </MockedProvider>
    )

    var catchButton

    await waitFor(() => {
        catchButton = screen.getByText(/Catch/i)
        expect(catchButton).toBeInTheDocument()
    })

    const leftClick = { button: 0 }
    userEvent.click(catchButton, leftClick)

    var catchingLoader = screen.getByText(/Catching/i)
    expect(catchingLoader).toBeInTheDocument()

})

// Check if navigation tab works
test('Check if detail page can render given params', async () => {
    render(
        <MockedProvider mocks={MocksPokemonDetail} addTypename={false}>
            <RecoilRoot>
                <Router history={history}>
                    <Route path={path} component={Detail} />
                </Router>
            </RecoilRoot>
        </MockedProvider>
    )

    var statsTab

    await waitFor(() => {
        statsTab = screen.getByText(/Stats/i)
        expect(statsTab).toBeInTheDocument()
    })

    const leftClick = { button: 0 }
    userEvent.click(statsTab, leftClick)

    var nameLabelStats = screen.getByText(/HP/i)
    expect(nameLabelStats).toBeInTheDocument()
})