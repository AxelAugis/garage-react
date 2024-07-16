import React from 'react';
import Vehicule from '../Vehicule/Vehicule';

class Moto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        afficherDetails: false,
        };
    }
    
    // Toggle the display of the vehicle details
    handleToggleDetails = () => {
        this.setState(prevState => ({ afficherDetails: !prevState.afficherDetails }));
    }
    
    render() {
        return (
        <Vehicule
            {...this.props}
            afficherDetails={this.state.afficherDetails}
            handleToggleDetails={this.handleToggleDetails}
        />
        );
    }
}

export default Moto;