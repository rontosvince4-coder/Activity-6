let score = 95;
let grade = 80;
let count = 50;

if (score >= 90) grade = "Excellent";
if (score >=75 && score < 90) grade = "Very Good";
if (score < 75) grade = "Good";

for (let i = 0; i < 3; i++) {
  count++;
}

while (count < 0) {
  count++;
}

console.log(grade, count);

