/* ============================================================
   Partie 1 
   ============================================================ */

function genererEleves(){
    
    let taille_minimum = 7;
    let taille_maximum = 10;
    let note_maximumM = 20;
    let students=[];
    let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

    for (let i=0;i<taille_maximum;i++){
    let student_array=["Alma","Léo","Jules","Olivia ","Noah ","Théodore ","Louise","Emma","Rose","Michel"];
    let student_random = Math.floor(Math.random() * student_array.length);

    noteMaths=Math.floor(Math.random() * (note_maximumM + 1));

    noteFr=Math.floor(Math.random() * (note_maximumM + 1));

    noteHist=Math.floor(Math.random() * (note_maximumM + 1));

    moyenne=(noteMaths+noteFr+noteHist)/3

    let student={
        student_name:student_array[student_random],
        notemaths:noteMaths,
        notefr:noteFr,
        notehist:noteHist,
        moy:moyenne
    }
    students.push(student);


    let minMoyenne = students[0].moy;
    let maxMoyenne = students[0].moy;

    for (let i = 1; i < students.length; i++) {
        if (students[i].moy < minMoyenne) {
            minMoyenne = students[i].moy;
        }
        if (students[i].moy > maxMoyenne) {
            maxMoyenne = students[i].moy;
        }
    }

    }
return students;
}

/* ============================================================
   Partie 2 
   ============================================================ */

function afficherEleves(tableau){
    for (let i=0;i<tableau.length;i++){
        console.log("Prénom: ",tableau[i].student_name, "moyenne: ", tableau[i].moy);
    }
}
let tableau=genererEleves();
afficherEleves(tableau);

/* ============================================================
   Partie 3
   ============================================================ */

// function trouverMoyenneMin(tableau, indexDepart){
//     let indiceMin = 0;

//     for (let i = 1; i < tableau.length; i++) {
//         if (tableau[i].moy < tableau[indiceMin].moy) {
//             indiceMin = i;
//         }
//     }
//     return indiceMin;

// }
// let indexMin= trouverMoyenneMin(tableau);

function trouverMoyenneMin(tableau, indexDepart){
    let indiceMin = 0;
    indexDepart=0;

    while (indexDepart==tableau.length) {
        if (tableau[i].moy < tableau[indiceMin].moy) {
            indiceMin = i;
        }
    }
    return indiceMin;

}
let indexMin= trouverMoyenneMin(tableau);


/* ============================================================
   Partie 4
   ============================================================ */

function afficherDonnees(tableau){
    let indexMax = 0;

    for (let i = 1; i < tableau.length; i++) {      
        if (tableau[i].moy > tableau[indexMax].moy) {
            indexMax=i;
        }
    }
    return indexMax;
}
// console.log(indexMin);
console.log("Élève avec la plus petite moyenne :",
tableau[indexMin].student_name,"(" + tableau[indexMin].moy.toFixed(1) + ")","à l'indice",
indexMin);

let indexMax=afficherDonnees(tableau);

console.log("Élève avec la plus grande moyenne :",
tableau[indexMax].student_name,"(" + tableau[indexMax].moy.toFixed(1) + ")","à l'indice",
indexMax);
console.log("Le nombre d'élève est de: ",tableau.length);

/* ============================================================
   Partie 5
   ============================================================ */

function swap(tableau,indexA,indexB){
    let temp = tableau[indexA];
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;

}
swap(tableau,indexA,indexB);
console.log("Tableau après échange :");
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i].prenom + " : " + tableau[i].moy.toFixed(1));
}