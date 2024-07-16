# Garage 

## Explications 

### Description

Garage est une application web permettant de gérer un garage de véhicules. L'application permet d'ajouter des véhicules, de les supprimer, de les modifier et de consulter les détails d'un véhicule.

### Fonctionnement 

L'application est composée de deux composants principaux :

- `Garage` : Composant principal de l'application, il permet d'afficher la liste des véhicules présents dans le garage. Il permet également d'ajouter un véhicule ou de consulter ses détails.

- `Vehicule` : Composant permettant d'afficher les détails d'un véhicule.

Il existe plusieurs composant dérivés de Vehicule :

- `Voiture` : Composant permettant d'afficher les détails d'une voiture.
- `Moto` : Composant permettant d'afficher les détails d'une moto.
- `Camion` : Composant permettant d'afficher les détails d'un camion.

Chacun de ces composants dérivés de `Vehicule` reprend les propriétés de véhicules.


## Visualisation

### Etat initial du garage

Lorsqu'aucun véhicule n'est présent dans le garage, un message est affiché pour informer l'utilisateur.

Un formulaire permettant d'ajouter un véhicule est également présent.
Il permet de choisir le type de véhicule à ajouter (voiture, moto, camion) ainsi que l'ensemble des propriétés du véhicule.

<img src="src/assets/images/original-state.png" width="500">

### Etat du garage après l'ajout de véhicules

Après l'ajout de véhicules, la liste des véhicules est affichée dans le garage.

<img src="src/assets/images/added-vehicles.png" width="500">


### Visionnage des détails d'un véhicule

En cliquant sur un véhicule, les détails de celui-ci sont affichés. Il peut alors choisir de supprimer le véhicule ou de le klaxonner.

<img src="src/assets/images/details.png" width="500">


#### Alerte lors d'un klaxon

Lorsque l'utilisateur clique sur le bouton "Klaxonner", une alerte est affichée.

<img src="src/assets/images/honk-alert.png" width="500">

#### Suppression d'un véhicule
