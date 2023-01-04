import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import _404 from './components/Errors/404';
import { ISpecie } from './helpers/interfaces/ISpecie';
import { TAppState } from './helpers/types/TAppState';
import Home from './pages/Home';
import People from './pages/People';
import { getSpecies } from './services/getSpecies';

export default class App extends Component<{}, TAppState> {
    state = {
        isLoad: false,
        species: [
            {
                name: '',
                classification: '',
                designation: '',
                language: '',
                people: [],
            },
        ],
    };

    componentDidMount(): void {
        const speciesPromise: Promise<any> = getSpecies('Human', 'Droid', 'Wookie');

        speciesPromise.then((species: Array<ISpecie>) => {
            const isLoad = true;
            this.setState({ isLoad, species });
        });
    }

    render(): JSX.Element {
        const { isLoad, species } = this.state;
        return (
            <Routes>
                <Route path="/" element={<Home isLoad={isLoad} species={species} />} />
                <Route path="/species/:specieName" element={<People species={species} />} />
                <Route path="*" element={<_404 />} />
            </Routes>
        );
    }
}
