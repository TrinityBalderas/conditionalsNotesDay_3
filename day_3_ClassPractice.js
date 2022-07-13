let blaziken = "Blaziken";
let gengar = "Gengar";

if(blaziken === "Lukas"){
    console.log("This is Lukas' Pokemon");
}
else{
    console.log("This is Kelvin's Pokemon");
}
//camel case
let blazikenATK = 30;
let gengarATK = 30;

//snake case
//let blaziken_atk = 45
//let gengar_atk = 30

//kebab case
//let blaziken-atk = 45
//let gengar-atk = 30

let blazikenHP = 200;
let gengarHP = 260;

if(blazikenATK > gengarATK){
    gengarHP -= blazikenATK;
    console.log(`Gengar's new HP is ${gengarHP}!`);
}
else if(gengarATK > blazikenATK){
    blazikenHP -= gengarATK;
    console.log(` Blaziken's new Hp is ${blazikenHP}!`);
}
else {
    console.log("They both missed!");
};
let furySwipes = 35

for(i = 0; i < 3; i++){
    console.log("Blaziken used fury swipes!");
    gengarHP -= furySwipes;
    console.log(`Gengar's HP is now ${gengarHP}!`);
};

console.log("================");

let lowKick = 60;

for(i = 2; i > 0; i--){
console.log("Gengar used low kick");
blazikenHP -= lowKick
console.log(`Blaziken's HP is now ${blazikenHP}!`);
};
for(i = 1; i <= 10; i +=2){
    console.log("Odd numbers are " + i);
};

console.log("===================");
let gengarFainted = false;
while(gengarHP > 0){
    console.log("Blaziken used fury swipes");
    gengarHP -= furySwipes
    console.log("Gengar's HP is now " + gengarHP);
    if(gengarHP < 0){
        gengarHP = 0;
        gengarFainted = true;
        if(gengarFainted){
            console.log("Gengar has fainted.");
        }
    };
    
};


