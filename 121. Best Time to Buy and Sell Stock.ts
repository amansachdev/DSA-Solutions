function maxProfit(prices: number[]): number {
  // setting the minimum price of that share to the fist element of the array
  let minPrice = prices[0];

  // declaring the max profit variable and setting it to zero as of now
  let maxProfit = 0;

  //iterating the whole array but from index 1 as we considered the [0] to be min above already
  for (let i = 1; i < prices.length; i++) {
    //setting the current price to the current element of the array
    const currentPrice = prices[i];

    //updating the min price comparing the current price and minimum price which was set earlier
    minPrice = Math.min(currentPrice, minPrice);

    // finding the max profit by max of the prev maxProfit and current price - minimum price
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }

  //returning maximum profit
  return maxProfit;
}
