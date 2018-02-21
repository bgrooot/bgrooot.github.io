---
layout: post
title: Codility - TapeEquilibrium
---

[RESULT](https://app.codility.com/demo/results/training8QKXXN-A6N)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int frontSum = 0;
        int rearSum = 0;
        int minSum = Integer.MAX_VALUE;
        
        for (int a : A) {
            rearSum += a;
        }
        
        for (int i=0; i<A.length - 1; i++) {
            frontSum += A[i];
            rearSum -= A[i];
            int diffSum = Math.abs(frontSum - rearSum);
            
            if (minSum > diffSum) {
                minSum = diffSum;
            }
        }
        
        return minSum;
    }
}
```
