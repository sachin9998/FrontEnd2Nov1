const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let dataElement = data.filter((check) => {
    if (check.profession == "developer") {
      return data;
    }
  });
  console.log(dataElement);
  dataElement.forEach((person) => {
    console.log(person.name);
  });
}

// 2. Add Data
function addData() {
  let names = prompt("enter a name");
  let ages = prompt("Enter a age");
  let professions = prompt("Enter a profession");
  data.push({ name: names, age: Number(ages), profession: professions });
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let removedata = data.filter((element) => {
    if (element.profession !== "admin") {
      return data;
    }
  });
  console.log(removedata);
}

// 4. Concatenate Array
function concatenateArray() {
  let data2 = [
    { name: "neeraj", age: 23, profession: "admin" },
    { name: "vimal", age: 21, profession: "admin" },
  ];
  let data3 = data.concat(data2);
  console.log(data3);
}

// 5. Average Age
function averageAge() {
  let totalage = data.reduce((sum, person) => {
    sum += person.age;
    return sum;
  }, 0);
  let Avgage = totalage / data.length;
  console.log(Avgage);
}

// 6. Age Check
function checkAgeAbove25() {
  let check = data.some((person) => {
    return person.age > 25;
  });
  console.log(check);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [
    ...new Set(
      data.map((person) => {
        return person.profession;
      })
    ),
  ];
  console.log(professions);
}

// 8. Sort by Age
function sortByAge() {
  let sortdata = [...data].sort((a, b) => {
    return a.age - b.age;
  });
  console.log(sortdata);
}

// 9. Update Profession
function updateJohnsProfession() {
  let change = data.map((person) => {
    if (person.name == "john") {
      return { ...person, profession: "manager" };
    }
    return person;
  });
  console.log(change);
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce((count, person) => {
    count[person.profession] = (count[person.profession] || 0) + 1;

    return count;
  }, {});
  console.log(professionCount);
}
