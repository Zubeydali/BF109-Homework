let arr = [
    { name: "test", key: 1 },
    { name: "task", key: 2 },
    { name: "tanqo", key: 3 },
    { name: "like", key: 4 },
    { name: "task", key: 5 },
    { name: "trust", key: 6 },
    { name: "test", key: 7 },
    { name: "last", key: 8 },
    { name: "tanqo", key: 9 },
    { name: "elephant", key: 10 },
    { name: "love", key: 11 },
    { name: "small", key: 12 },
    { name: "little", key: 13 },
  ];
  
  // 1) "name"-i "t" hərfi ilə başlayan obyektləri yeni arraya yığmaq (filter)
  const startsWithT = arr.filter(obj => obj.name.startsWith('t'));
  console.log(startsWithT);
  
  // 2) "name"-i "t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin sayını tapmaq (forEach)
  let countTtoT = 0;
  arr.forEach(obj => {
    if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
      countTtoT++;
  });
  console.log(countTtoT);
  
  // 3) "name"-i "t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin "key"lərinin cəmiyyini tapmaq
  let sumKeysTtoT = 0;
  arr.forEach(obj => {
    if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
      sumKeysTtoT += obj.key;
    }
  });
  console.log(sumKeysTtoT);
  
  // 4) "name"-i "e" hərfi ilə bitən obyektlərdəki "name" dəyərini "SuperDev" ilə dəyişmək
  arr.forEach(obj => {
    if (obj.name.endsWith('e')) {
      obj.name = 'SuperDev';
    }
  });
  console.log(arr);
  
  // 5) "name"-i ən uzun olan obyekt
  const longestNameObj = arr.reduce((longest, obj) => {
    return obj.name.length > longest.name.length ? obj : longest;
  }, arr[0]);
  console.log(longestNameObj);
  
  // 6) "name"-i ən uzun olan obyektin "key"ini tapmaq
  const longestNameKey = arr.reduce((longest, obj) => {
    return obj.name.length > longest.name.length ? obj : longest;
  }, arr[0]).key;
  console.log(longestNameKey);
  
  // 7) "name"-i ən uzun olan obyektin indexinin kvadratını hesablamaq
  const longestNameIndex = arr.reduce((longest, obj, index) => {
    return obj.name.length > longest.name.length ? { obj, index } : longest;
  }, { obj: arr[0], index: 0 }).index;
  console.log(longestNameIndex ** 2);
  
  // 8) "name"-inin uzunluğu 4 olan obyektlərdən ibarət yeni array yaratmaq
  const lengthFourNames = arr.filter(obj => obj.name.length === 4);
  console.log(lengthFourNames);
  
  // 9) Ən böyük "key" olan obyektin "name"-ini tapmaq
  const largestKeyObj = arr.reduce((largest, obj) => {
    return obj.key > largest.key ? obj : largest;
  }, arr[0]);
  console.log(largestKeyObj.name);
  
  // 10) Tərkibində 2 'l' hərfi olan obyektləri tapmaq
  const twoLInNames = arr.filter(obj => (obj.name.match(/l/g) || []).length === 2);
  console.log(twoLInNames);
  
  // 11) Tərkibində ən az 2 't' hərfi olan obyektləri tapmaq
  const twoTInNames = arr.filter(obj => (obj.name.match(/t/g) || []).length >= 2);
  console.log(twoTInNames);
  
  // 12) Key'ləri 10-dan böyük və "name"-i 'l' hərfi ilə başlayan obyektləri tapmaq
  const largeKeyAndLNames = arr.filter(obj => obj.key > 10 && obj.name.startsWith('l'));
  console.log(largeKeyAndLNames);