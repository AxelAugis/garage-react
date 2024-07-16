import React from 'react';
import PropTypes from 'prop-types';


class Vehicule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      afficherDetails: false,
    };
  }

  // Toggle the display of the vehicle details
  afficherDetails = () => {
    this.setState(prevState => ({ afficherDetails: !prevState.afficherDetails }));
  }

  // Display an alert with the sound of the vehicle's horn
  klaxonner = () => {
    const { son } = this.props;
    alert("Le klaxon du véhicule fait : " + son);
  }

  render() {
    const { marque, anneeDeFabrication, couleur, son } = this.props;
    const { afficherDetails } = this.state;

    return (
      <div>
        <h2>Détails du véhicule  </h2>
        <button onClick={this.afficherDetails}>
          {afficherDetails ? 'Cacher les détails' : 'Afficher les détails'}
        </button>
        {/*  If afficherDetails is true, display the vehicle details */}
        {afficherDetails && (
          <div>
            <p>Marque: {marque}</p>
            <p>Année de fabrication: {anneeDeFabrication}</p>
            <p>Couleur: {couleur}</p>
            <p>Son du klaxon : {son}</p>
            <div style={{ display: 'flex', gap:'4px' }}>
              <button onClick={this.klaxonner}>Klaxonner</button>
              <button onClick={this.props.removeVehicle}>Supprimer</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Ensure that the props passed to the component are of the correct type
Vehicule.propTypes = {
  marque: PropTypes.string.isRequired,
  anneeDeFabrication: PropTypes.number.isRequired,
  couleur: PropTypes.string.isRequired,
  son: PropTypes.string.isRequired,
};

export default Vehicule;