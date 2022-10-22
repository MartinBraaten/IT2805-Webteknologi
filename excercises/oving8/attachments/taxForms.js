const taxForms = [
  {
    realName: "Bruce Wayne",
    income: 750000,
    wealth: 300000,
  },
  {
    realName: "John Blake",
    income: 440000,
    wealth: 832000,
  },
  {
    realName: "Selina Kyle",
    income: 640000,
    wealth: 432000,
  },
];

for (i = 0; i < taxForms.length; i++) {
  if (taxForms[i].income >= 500000) {
    console.log(taxForms[i].realName);
  }
}
