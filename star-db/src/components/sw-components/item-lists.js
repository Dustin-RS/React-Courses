import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, compose } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
    return(props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({ name }) => <span>{ name }</span>

const renderModelAndName = ( { name, model }) => <span>{ name } ({model})</span>
const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = compose( 
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const PlanetList = compose( 
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);
const StarshipList = compose( 
                    withSwapiService(mapStarshipMethodsToProps),
                    withData,
                    withChildFunction(renderModelAndName)
                    )(ItemList);
export {
    PersonList,
    PlanetList,
    StarshipList
};