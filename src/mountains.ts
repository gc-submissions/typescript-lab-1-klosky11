export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height:29029},
    {name: "Denali", height: 20310}
];

export function findNameOfTallestMountain(array: Mountain[]): string {
    var tallest = mountains[0];
    mountains.forEach(function(mountain) {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    console.log(tallest.name);
    return tallest.name;


}


