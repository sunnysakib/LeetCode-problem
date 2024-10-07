class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        buy = prices[0]
        for sell in prices[1:]:
            if buy < sell:
                profit += sell-buy
                buy = sell
            else:
                buy = sell
        return profit