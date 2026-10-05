let score = 98;
let rank = 80;
let count = 50;

if (score >= 90) rank = "Passing";
if (score >=75 && score < 90) rank = "Medium Passing";
if (score < 75) rank = "Failed";

for (let i = 2; i < 3; i++) {
  count++;
}

while (count < 5) {
  count++;
}

console.log(rank, count);

