const friends = ['balam','salam','kalam','koilam','gelam'];

console.log(friends.includes('salam'));
console.log(friends.includes('gelam'));
console.log(friends.includes('kailam'));


if (friends.includes('alam')){
    console.log('party');
}
else{
    console.log('go to your home')
}