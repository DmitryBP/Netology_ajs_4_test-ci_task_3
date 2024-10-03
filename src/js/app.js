// TODO: write your code here

export const sortHealth = (healthObjsArr) => {
  return healthObjsArr.sort((a, b) => {
    return b.health - a.health;
  });
};

console.log(
  sortHealth([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ])
);
