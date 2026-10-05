let score = 98;
let grade = 80;
let count = 50;

if (score >= 90) grade = "Passing";
if (score >=75 && score < 90) grade = "Very Good";
if (score < 75) grade = "Failed";

for (let i = 5; i < 3; i++) {
  count++;
}

while (count < 0) {
  count++;
}

console.log(grade, count);

