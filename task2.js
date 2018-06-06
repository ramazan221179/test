var input = process.argv[2];
var target = process.argv[3];

if (input.length != target.length) {
    console.log(-1);
    process.exit(0);
}

var shift;
for (shift = 0; shift < input.length; shift++)
    if (input.substr(shift)+input.substring(0, shift) == target) break;

if (shift > input.length/2) shift = input.length - shift;
process.stdout.write('' + (shift == input.length ? -1 : shift)); // Hotfix