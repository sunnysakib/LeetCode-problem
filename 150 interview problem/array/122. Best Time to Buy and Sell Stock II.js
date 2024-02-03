/**
 * @param {number[]} prices
 * @return {number}
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150

 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i=0; i< prices.length; i++){
        if(prices[i] < prices[i+1]){
            profit += prices[i+1] - prices[i];
        }
    }
    return profit;
};
