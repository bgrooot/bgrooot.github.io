---
layout: post
title: Codility - MaxProfit
Date: 2018-04-21 00:37:18 +0900
Category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingPEU2EU-78G)  


``` java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int maxProfit = 0;
        int minShareSlice = Integer.MAX_VALUE;

        for (int i=0; i<A.length; i++) {
            minShareSlice = Math.min(minShareSlice, A[i]);
            maxProfit = Math.max(maxProfit, A[i] - minShareSlice);
        }

        return maxProfit;
    }
}
```
