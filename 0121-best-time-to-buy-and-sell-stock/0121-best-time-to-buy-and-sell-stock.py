class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        o = 0
        buy = prices[0]
        for sell in prices[1:]:
            if sell > buy:
                o = max(o,  sell - buy)
            else:
               buy = sell 
        return o