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
    let notes_max=student.moy[0];
    let notes_min=student.moy[0];
    for (let i=0;i<student.moy.length;i++){
        if (student.moy[i]<notes_min){
            notes_min=student.moy[i];
        }
        if (student.moy[i]>notes_max){
            notes_max=student.moy[i];
        }
    }
    students.push(student);
    console.log("Prénom: ",student.student_name, "moyenne: ", student.moy)
    }
console.log("Le nombre d'élève est de: ",taille);
