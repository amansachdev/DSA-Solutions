function maximumWealth(accounts: number[][]): number {
  let sum: number[] = [];
  accounts.forEach((account) => {
    sum.push(account.reduce((accumulator, result) => accumulator + result));
  });
  return Math.max(...sum);
}
