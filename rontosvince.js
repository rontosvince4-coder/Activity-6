let score = 85;
let grade = 90;
let count = 0;

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

