/* ============================================================
   Partie 1 
   ============================================================ */

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
// let taille_minimum = 7;
// let taille_maximum = 10;
// Déclarer le tableau pour stocker les notes

// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
// let note_maximumM = 20;
// let note_maximumF =20;
// let students=[];
// let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// for (let i=0;i<taille_maximum;i++){
//     let student_array=["Alma","Léo","Jules","Olivia ","Noah ","Théodore ","Louise","Emma","Rose","Michel"];
//     let student_random = Math.floor(Math.random() * student_array.length);

//     noteMaths=Math.floor(Math.random() * (note_maximumM + 1));

//     noteFr=Math.floor(Math.random() * (note_maximumM + 1));

//     noteHist=Math.floor(Math.random() * (note_maximumM + 1));

//     moyenne=(noteMaths+noteFr+noteHist)/3

//     let student={
//         student_name:student_array[student_random],
//         notemaths:noteMaths,
//         notefr:noteFr,
//         notehist:noteHist,
//         moy:moyenne.toFixed(2)
//     }
//     students.push(student);
//     console.log("Prénom: ",student.student_name, "moyenne: ", student.moy)
// }

/* ============================================================
   Partie 2 
   ============================================================ */

let taille_minimum = 7;
let taille_maximum = 10;

let note_maximumM = 20;
let note_maximumF =20;
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
        moy:moyenne.toFixed(2)
    }
    students.push(student);
    console.log("Prénom: ",student.student_name, "moyenne: ", student.moy)
}
let notes_max=students[0].moy;
let indexMax=0;
let indexMin=0;
let notes_min=students[0].moy;
console.log("Le nombre d'élève est de: ",taille);
for (let i=0;i<students.length;i++){
    if (students[i].moy<notes_min){
        notes_min=students[i].moy;
        indexMin=i;
    }
    if (students[i].moy>notes_max){
        notes_max=students[i].moy;
        indexMax=i;
    }
}
console.log("prénom: ",students[indexMin].student_name,"min: ",notes_min,"prénom: ",students[indexMax].student_name, "max: ", notes_max);


/* ============================================================
   Partie 3
   ============================================================ */

// let taille_minimum = 7;
// let taille_maximum = 10;

// let note_maximumM = 20;
// let note_maximumF =20;
// let students=[];
// let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// for (let i=0;i<taille_maximum;i++){
//     let student_array=["Alma","Léo","Jules","Olivia ","Noah ","Théodore ","Louise","Emma","Rose","Michel"];
//     let student_random = Math.floor(Math.random() * student_array.length);

//     noteMaths=Math.floor(Math.random() * (note_maximumM + 1));

//     noteFr=Math.floor(Math.random() * (note_maximumM + 1));

//     noteHist=Math.floor(Math.random() * (note_maximumM + 1));

//     moyenne=(noteMaths+noteFr+noteHist)/3

//     let student={
//         student_name:student_array[student_random],
//         notemaths:noteMaths,
//         notefr:noteFr,
//         notehist:noteHist,
//         moy:moyenne.toFixed(2)
//     }
//     students.push(student);
// }

// let notes_min=students[0].moy;
// let index=0;
// for (let i=1;i<students.length;i++){
//     if (students[i].moy<notes_min){
//         notes_min=students[i].moy;
//         index=i;
//     }
// }
// console.log(students);
// console.log("prénom: ",students[index].student_name,"min: ",notes_min, "l'indice est de: ", index);
