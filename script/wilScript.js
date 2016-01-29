/*
=================================LES OBJETS ===============================================

créations d'une classe Animal qui sera utilisé pour mieux comprendre les Objets 
	OBJET et PROTOTYPE en JavaScript :
	Tout objet JavaScript possède une propriété interne appellée prototype (il s'agit d'une référence vers un autre objet).
	Lorsqu'on essaie d'accéder à une propriété qui n'existe pas dans un objet, JavaScript essaie de trouver cette propriété
	dans le prototype de cet objet 
*/


/*
	il existe 3 facons d'initialisé un objet:
		- 1) premier facon, on utilise  la notation new Object()
*/

// on définie une variable MaVoiture de type Object()
var MaVoiture = new Object();
// on peut rajouté des propriété a cette objet:
MaVoiture.couleur = "rouge";
// on peut aussi lui ajouté des méthodes
// qui sera utiliser : MaVoiture.vroum();
MaVoiture.vroum = function() {
	return"vroum vroum !!!";
}
// si on ne met pas de valeur dans une propriété il sera undefined
MaVoiture.poids;

// on peut aussi passé par un constructeur, qui est une fonction qui par convention commence par une majuscule et qui définisse les proprités de l'objets:
// création de la fonction Constructeur (se n'est pas un objet) 
function Voiture(couleur) {

	// on lui rajoute des propriétés
	this.couleur = couleur;

	//on lui rajoute des méthodes 
	this.roule = function() {
		alert("la voiture de la couleur "+this.couleur+" fait vroum vroum !!!");
	};

	// cette méthode lui rajoute une propriété
	this.infoVitesse = function(vitesse) {
		this.vitesse = vitesse;
		if(vitesse < 50){
			return "vous roulez comme un escargot";
		}else if( vitesse < 100){
			return " vous roulez a "+ this.vitesse +"km/h rester vigilant";
		}else{
			return "se n'est pas une vitesse valide ";
		}
	}

	//teste d'un ajouts d'une propriété dans sa 
}
/*
	Bien revoir la compréhension sur les prototype
	au niveau de :
			- Object.prototype
	et de bien comprendre au niveau du constructeur 
	au niveau de :
			- Object.constructor
*/



	


//Création d'une autre fonction constructeur qui auras pour prototype voiture
function Limousine (nbPorte, taille) {
	// définitions d'une propriété qui est le nombre de porte de la limousine
	this.nbPorte = nbPorte;

	// définitions d'une propriété qui est la grandeur de la limousine
	this.taille = taille;

}



/*
	Création d'un objet de manière littéral grace a un initialisateur d'objet :
*/

var monAnimal = {

		nbDent : 32,	

		manger: function() {
			msg = "je suis monAnimal et je suis entrin de mangé";
			return msg;
		},

		courrir: function() {
			msg = "je cours !!!";
			return msg;
		}

};

