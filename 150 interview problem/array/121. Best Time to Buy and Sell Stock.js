/**
 * @param {number[]} prices
 * @return {number}
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let profit = 0;
    while(sell < prices.length){
        if(prices[buy]>prices[sell]){
            buy = sell;
        }else{
            let newProfit = prices[sell] - prices[buy];
            if(newProfit > profit){
                profit = newProfit;
            }
        }
        sell++;
    }
    return profit;
};
