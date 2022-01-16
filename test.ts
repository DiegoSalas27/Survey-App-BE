const members = [
    {name: 'foo', age: 20},
]

const someMember = members.find(member => member.age == 30);

console.log(someMember?.age);

function sum(num: number): number {
    if(num % 2 == 0) return num;
    num;
}

