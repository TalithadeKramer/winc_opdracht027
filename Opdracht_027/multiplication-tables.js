var result = '\n';
for (var a = 1; a <= 10; a++) {
    for (var b = 1; b <= 10; b++) {
        result += (a * b) + ' ';
    }
    result += '\n'
};

console.log(result);