for (score = 60; score <= 100; score++) {
    function assignGrade(score) {
        if (score > 90) {
            return 'Voor ' + score + 'punten krijg je een A.';
        } else if (score > 80) {
            return 'Voor ' + score + 'punten krijg je een B.';
        } else if (score > 70) {
            return 'Voor ' + score + 'punten krijg je een C.';
        } else if (score > 65) {
            return 'Voor ' + score + 'punten krijg je een D.';
        } else {
            return 'Voor ' + score + 'punten krijg je een F.';
        }
    }
};
console.log(assignGrade)