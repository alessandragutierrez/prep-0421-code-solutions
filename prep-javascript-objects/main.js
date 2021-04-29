var person = {
  firstName: 'Kya',
  lastName: 'Clark',
  hobby: 'Collecting bird feathers'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The person\'s name is:', fullName + '.');

person.job = 'Naturalist author & artist';

console.log('The person\'s job is:', person.job + '.');

person.previousJob = 'Unemployed';

console.log('The person\'s previous job was:', person.previousJob + '.');

console.log('The complete person object:', person);

var myBoat = {
  make: 'Starcraft',
  model: 'Holiday',
  year: '1975'
};

console.log('Boat Information:', myBoat);

myBoat['owner'] = fullName;

console.log('My name is', myBoat.owner, 'and I ride a', myBoat.year, myBoat.make, myBoat.model + '.');

myBoat['color'] = 'white';

console.log('My full boat info:', myBoat);
