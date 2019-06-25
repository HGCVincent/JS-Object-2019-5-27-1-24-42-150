//1.
var user = {};
user.name = 'John';
user.surname = 'Mike';
console.log(user);
user.name = 'Peter';
console.log(user);
delete user.name;
console.log(user);

//2.
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var result = fruit.apple + fruit.pear + fruit.peach;
console.log(result);