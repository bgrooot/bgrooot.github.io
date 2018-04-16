---
layout: post
title: Codility - MaxDoubleSliceSum
date: 2018-04-16 23:09:21 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingJ7MRMR-HDC)

각 위치를 경계로 미리 구해놓은 전과 후의 최대값의 부분을 더해 그 중에서의 최대값을 구하는 로직.  

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int[] fowardMaxSum = new int[A.length];
        int[] backwardMaxSum = new int[A.length];
        int maxSum = 0;
        
        for (int i=1; i<A.length-1; i++) {
            fowardMaxSum[i] = Math.max(fowardMaxSum[i-1] + A[i], 0);
        }
        
        for (int i=A.length-2; i>1; i--) {
            backwardMaxSum[i] = Math.max(backwardMaxSum[i+1] + A[i], 0);
        }
        
        for (int i=1; i<A.length-1; i++) {
            maxSum = Math.max(maxSum, fowardMaxSum[i-1] + backwardMaxSum[i+1]);
        }
        
        return maxSum;
    }
}
```
