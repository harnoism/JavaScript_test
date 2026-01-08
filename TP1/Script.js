//Test
// let count=1;
// console.log(count);
// count=2;
// console.log(count);

// const user={name:"Alice"}
// console.log(user);
// user.name="Bob";
// console.log(user);

// let age=25;
// let name="Alice";
// let valid=true;
// let nothing=null;
// let x; //undefined

// let user={
//     name:"Alice",
//     age:30,
// }
// console.log(user);
//===========================================

//Exo 1
// const nameofclass="pandi";
// let number=28;
// let clasS="ouverte";
// if (clasS=="ouverte"){
//     let valid=true;
//     console.log("La classe est ouverte",valid);
// }else{
//     let valid=false;
//     console.log("La classe est fermé",valid);
// }

// console.log(nameofclass);
// console.log(number);
//===========================================

//Exo 2
// let user={
//     name:"Marine",
//     NoteMaths:10,
//     NoteFr:15,
// }
// console.log(user.name);
//===========================================

//Exo 3
// let student_array=["Marion","Marine","Maeva"];

// for(let i=0;i<student_array.length;i++){
//     console.log(i);
//     console.log(student_array[i]);
// }

//Exo 4
// let student1={
//     name:"Marion",
//     NoteMaths:15,
//     NoteFr:17,
// }
// let student2={
//     name:"Marine",
//     NoteMaths:13,
//     NoteFr:15,
// }
// let student3={
//     name:"Maeva",
//     NoteMaths:10,
//     NoteFr:7,
// }
// let studentbis=[
//     student1,
//     student2,
//     student3
// ];

// for(let i=0;i<studentbis.length;i++){
//     let somme=studentbis[i].NoteMaths+studentbis[i].NoteFr;
//     let resultat=somme/2;
//     console.log(studentbis[i].name,resultat);
// }
//===========================================

//Exo 5

// let student1={
//     name:"Marion",
//     NoteMaths:15,
//     NoteFr:17,
// }
// let student2={
//     name:"Marine",
//     NoteMaths:13,
//     NoteFr:15,
// }
// let student3={
//     name:"Maeva",
//     NoteMaths:10,
//     NoteFr:7,
// }
// let studentbis=[
//     student1,
//     student2,
//     student3
// ];

// for(let i=0;i<studentbis.length;i++){
//     let somme=studentbis[i].NoteMaths+studentbis[i].NoteFr;
//     let resultat=somme/2;
//     console.log(studentbis[i].name,resultat);
//     if(resultat>=10){
//         console.log("Admis");
//     }else{
//         console.log("Refusé");
//     }
// }
//===========================================

//Exo 6

// let student1={
//     name:"Marion",
//     NoteMaths:15,
//     NoteFr:17,
// }
// let student2={
//     name:"Marine",
//     NoteMaths:13,
//     NoteFr:15,
// }
// let student3={
//     name:"Maeva",
//     NoteMaths:10,
//     NoteFr:7,
// }
// let studentbis=[
//     student1,
//     student2,
//     student3
// ];

// for(let i=0;i<studentbis.length;i++){
//     let somme=studentbis[i].NoteMaths+studentbis[i].NoteFr;
//     let resultat=somme/2;
//     console.log(studentbis[i].name,resultat);
//     if(resultat>=16){
//         console.log("Très bien");
//     }else if(resultat>=14){
//         console.log("Bien");
//     }else if(resultat>=12){
//         console.log("Assez bien");
//     }else if(resultat>=10){
//         console.log("Passable");
         
//     }else{
//         console.log("Insuffisant");
//     }
// }
//===========================================

//Exo 7

let student1={
    name:"Marion",
    NoteMaths:15,
    NoteFr:17,
}
let student2={
    name:"Marine",
    NoteMaths:13,
    NoteFr:15,
}
let student3={
    name:"Maeva",
    NoteMaths:10,
    NoteFr:7,
}
let studentbis=[
    student1,
    student2,
    student3
];
let somme=0;
let resultat=0;
for(let i=0;i<studentbis.length;i++){
    somme=studentbis[i].NoteMaths+studentbis[i].NoteFr;
    resultat=somme/2;
    console.log(studentbis[i].name,resultat);
}
while(resultat>=10){
    
}
