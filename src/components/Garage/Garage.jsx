import React, { useRef } from 'react';
import Voiture from '../Voiture/Voiture';
import Moto from '../Moto/Moto';
import Camion from '../Camion/Camion';

import styles from './Garage.module.css';

class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicules: [],
            type: 'voiture',
            marque: '',
            anneeDeFabrication: '',
            couleur: '',
            son: '',
        }

        this.errorYearContent = React.createRef();
        this.errorColorContent = React.createRef();
        this.errorSoundContent = React.createRef();
    }

    // Add a vehicle to the list of vehicles based on the type
    addVehicle = (type, props) => {
        const Vehicule = {
            voiture: Voiture,
            camion: Camion,
            moto: Moto,
        }[type];

        this.setState(prevState => ({
            vehicules: [...prevState.vehicules, <Vehicule key={prevState.vehicules.length} type={type} {...props} />],
        }));
    }

    // Call the afficherDetails method of each vehicle
    afficherDetails = () => {
        this.state.vehicules.forEach(vehicule => {
            if(vehicule.ref && vehicule.ref.current) {
                vehicule.ref.current.afficherDetails();
            }
        });
    }

    // Check if each field is valid and set the state
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const style = event.target.style;

        const stringRegex = /^[A-Za-z]+$/;


        this.setState({ [name]: value });
        // Check if the year is valid
        if(name === 'anneeDeFabrication') {
            const yearRegex = /^[0-9]+$/;
            if(value > new Date().getFullYear()) {
                this.errorYearContent.current.textContent = 'L\'année de fabrication ne peut pas être supérieure à l\'année actuelle';
                style.border = '1px solid red';
                this.errorYearContent.current.style.display = 'block';
            } else if (!yearRegex.test(value) && value !== '') {
                this.errorYearContent.current.textContent = 'Le champ "année de fabrication" ne peut contenir que des chiffres';
                style.border = '1px solid red';
                this.errorYearContent.current.style.display = 'block';
            } else {
                this.errorYearContent.current.textContent = '';
                style.border = '1px solid transparent';
                this.errorYearContent.current.style.display = 'none';
            }
        }
        if(name === 'couleur') {
            if(!stringRegex.test(value) && value !== '') {
                this.errorColorContent.current.textContent = 'Le champ "couleur" ne peut contenir que des lettres';
                style.border = '1px solid red';
                this.errorColorContent.current.style.display = 'block';
            } else {
                this.errorColorContent.current.textContent = '';
                style.border = '1px solid transparent';
                this.errorColorContent.current.style.display = 'none';
            }
        }

        if(name === 'son') {
            if(!stringRegex.test(value) && value !== '') {
                this.errorSoundContent.current.textContent = 'Le champ "son" ne peut contenir que des lettres';
                style.border = '1px solid red';
                this.errorSoundContent.current.style.display = 'block';
            } else {
                this.errorSoundContent.current.textContent = '';
                style.border = '1px solid transparent';
                this.errorSoundContent.current.style.display = 'none';
            }
        }
    }

    // Add a vehicle to the list of vehicles
    handleSubmit = (event) => {
        event.preventDefault();
        this.addVehicle(this.state.type, { 
            marque: this.state.marque, 
            anneeDeFabrication: Number(this.state.anneeDeFabrication), 
            couleur: this.state.couleur, 
            son: this.state.son 
        });
    }

    render() {
        return (
            <div className={`${styles.wrapper}`}>
                <h1>Garage</h1>
                <h2>Ajouter un véhicule</h2>
                <form onSubmit={this.handleSubmit} className={`${styles.garageForm}`}>
                    <section>
                        <div>
                            <label>
                                Type:
                            </label>
                            <select name="type" value={this.state.type} onChange={this.handleChange}>
                                <option value="voiture">Voiture</option>
                                <option value="camion">Camion</option>
                                <option value="moto">Moto</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Marque:
                            </label>
                            <input type="text" name="marque" value={this.state.marque} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <label>
                            Année de fabrication:
                            </label>
                            <input type="number" name="anneeDeFabrication" value={this.state.anneeDeFabrication} onChange={this.handleChange} required />
                        </div>
                    </section>
                    <section>
                        <div>
                            <label>
                                Couleur:
                            </label>
                            <input type="text" name="couleur" value={this.state.couleur} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <label>
                                Son:
                            </label>
                            <input type="text" name="son" value={this.state.son} onChange={this.handleChange} required />
                        </div>
                    </section>
                   
                   
                    <button type="submit">Ajouter</button>
                    <p ref={this.errorColorContent} className={`${styles.errorContent}`}></p>
                    <p ref={this.errorYearContent} className={`${styles.errorContent}`}></p>
                    <p ref={this.errorSoundContent} className={`${styles.errorContent}`}></p>
                </form>
                <h2>Liste des véhicules</h2>
                {
                    // If there are no vehicles in the garage, display a message
                    this.state.vehicules.length === 0 ? 
                        <div className={`${styles.noVehiculeWrapper}`}>
                            <p className={`${styles.noVehiculeText}`}>Aucun véhicule dans le garage</p>
                        </div> :
                        <ul className={`${styles.vehiculeList}`}>
                            {
                                this.state.vehicules.map((vehicule, index) => (
                                    <li key={index} className={`${styles.vehiculeListItem}`}>
                                        {vehicule}
                                    </li>
                                ))
                            }
                        </ul>
                }
            </div>
        )
    }
    
}

export default Garage;