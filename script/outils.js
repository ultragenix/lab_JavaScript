
/*
	boite a outils pour javaScript
*/

// simple fonction qui permet d'affiché un msg dans la console
function show (msg) {
	console.log(msg);
}

// fonction qui va afficher les propriétés d'un objet
function showProp(obj, nomObjet) {
	// variable qui contient le resultat a affiché
	var resultat = "";
	for (var i in obj){
		if (obj.hasOwnProperty(i)){
			resultat += nomObjet + "." + i +" = "+ obj[i] + "\n";
		}
	}
	show(resultat);
}

// fonction qui va afficher les propriétés supérieur +1 de la chaine de prototype
function showPropSup(objSup, nomObjetSup) {
	// variable qui contient le resultat a affiché
	var resultat = "";
	var obj = Object.getPrototypeOf(objSup);
	for (var i in obj){
		if (obj.hasOwnProperty(i)){
			resultat += nomObjetSup + "." + i +" = "+ obj[i] + "\n";
		}
	}
	show(resultat);
}

// affiche tout les proprités de l'objet et parcour la chaine de prototype jusqu'au niveau choisis
function showAllPropSup(obj,nomObjet,nbNiveau) {
	
	var msgDeb = "";

	var msgFin = "";

	var msgFinal = "";

	for (var i = 0; i < nbNiveau ; i++) {
		msgDeb += "Object.getPrototypeOf(";
	}

	for (var i = 0; i < nbNiveau ; i++) {
		msgFin += ")";
	}

	msgFinal = msgDeb + nomObjet + msgFin + ";" ;


	var objetAnaliser = eval(msgFinal);




	show("voici les proprités de niveau "+nbNiveau+" de la chaine de prototype de l'objet :"+nomObjet);
	show(msgFinal);
	show(eval(msgFinal));
	showProp(objetAnaliser,nomObjet);


}


function showAllProp(obj) {
	
	var objetAnaliser;
	var result = [];

	for(objetAnaliser = obj ; objetAnaliser !== null; objetAnaliser = Object.getPrototypeOf(objetAnaliser)){
		result = result.concat(Object.getOwnPropertyNames(objetAnaliser));
	}

	show(result);
	// return result;

}