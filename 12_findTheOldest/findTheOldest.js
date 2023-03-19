const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++) {
            if (people[i].yearOfDeath === undefined) {
                people[i].yearOfDeath = new Date().getFullYear()
                console.log(people[i].yearOfDeath)
            }
        }
    people.sort((a, b) => {
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) {
            return 1
        } else {
            return -1
        }
    })
    return people[0]
};
findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
    //   yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])
// Do not edit below this line
module.exports = findTheOldest;