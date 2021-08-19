import React, {Component} from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import { SwapiServiceProvider } from '../swapi-service-contex';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import './app.css'
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState( ({ swapiService }) => {

            const Service = swapiService instanceof SwapiService ? 
                                    DummySwapiService : SwapiService;
            
            console.log('Switched to', Service.name);

            return({
                swapiService: new Service()
            });

        });
    };
    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
