var i;

for (i = 0; i < 10; i++) {
  console.log(i);
}

var number = 0;
for (i = 0; i < 10; i++) {
  console.log(number);
  number = number + 2;
}

for (i = 100; i > 0; i = i - 1) {
  console.log('Time \'till explosion', i + '!');
}
