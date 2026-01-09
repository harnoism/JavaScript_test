// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}
console.log(notes);

console.log("La taille du tableau: ",taille);
//----------->Partie1
// let notes_max=notes[0];
// let notes_min=notes[0];
// for (let i=0;i<notes.length;i++){
//     if (notes[i]<notes_min){
//         notes_min=notes[i];
//     }
//     if (notes[i]>notes_max){
//         notes_max=notes[i];
//     }
// }
// console.log("min: ",notes_min, "max: ", notes_max);

////----------->Partie2
// let index=0;
// let val_min=notes[0];
// for (let i=0;i<notes.length;i++){
//     if (notes[i]<val_min){
//         val_min=notes[i];
//         index=i;
//     }
// }
// console.log("min: ",val_min, "l'indice est de: ", index);

////----------->Partie3
// let val1_min=notes[0];
// let index=0;
// let i=0
// for (i;i<notes.length;i++){
//     if (notes[i]<val1_min){
//         val1_min=notes[i];
//         index=i;
//     }
// }
// notes[index]=notes[0];
// notes[0]=val1_min;

// console.log("min: ",val1_min, "l'indice reverse: ", index);
// console.log(notes)

////----------->Partie4
for (let i=0;i<notes.length;i++){
    let index=i;
    let val1_min=notes[i];
    for(let j=0;j<notes;i++){
        if (notes[j]<val1_min){
        val1_min=notes[j];
        index=j;}
    }
    notes[index]=notes[0];
    notes[0]=val1_min;
}
console.log(notes);
