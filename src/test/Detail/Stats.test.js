import { render, screen } from '@testing-library/react';
import BarChart from '../../component/Detail/PageDetail/StatsPage/BarChart'

const stats = [{
    base_stat: 50,
    stat: {
        name: 'hp'
    }
}, {
    base_stats: 50,
    stat: {
        name: 'attack'
    }
}, {
    base_stats: 50,
    stat: {
        name: 'defense'
    }
}, {
    base_stat: 70,
    stat: {
        name: 'special-attack'
    }
}, {
    base_stat: 80,
    stat: {
        name: 'special-defense'
    }
}, {
    base_stat: 50,
    stat: {
        name: 'speed'
    }
}]

// Test the InfoCard
test('Check if the height is rendered', () => {
    render(
            <BarChart stats={stats} />);

    const nameLabel = screen.getByText(/SATK/i)
    const valueLabel = screen.getByText(/80/i)
    
    expect(nameLabel).toBeInTheDocument()
    expect(valueLabel).toBeInTheDocument()
});