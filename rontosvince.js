let points = 100;
let rank = 80;
let count = 50;

if (points >= 90) rank = "Passing";
if (points >=75 && points < 90) rank = "Medium Passing";
if (points < 75) rank = "Failed";

for (let i = 2; i < 3; i++) {
  count++;
}

while (count < 5) {
  count++;
}

console.log(rank, count);

