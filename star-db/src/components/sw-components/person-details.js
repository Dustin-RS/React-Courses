import React from 'react'
import ItemDetails, {Record} from '../item-details';
import { withSwapiService } from '../hoc-helpers';


const PersonDetails = ( props ) => {
    return(
        <ItemDetails {...props}>
                <Record field="birthYear" label='Birth year'/>
                <Record field='eyeColor' label='Eye color'/>
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};
export default withSwapiService(mapMethodsToProps)(PersonDetails);
