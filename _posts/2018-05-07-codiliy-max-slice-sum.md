---
layout: post
title: Codility - MaxSliceSum
date: 2018-05-07 23:06:01 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingQV4HHP-G32)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int maxSlice = A[0];
        int maxSliceSum = A[0];
        for (int i=1; i<A.length; i++) {
            maxSlice = Math.max(A[i], maxSlice + A[i]);
            maxSliceSum = Math.max(maxSliceSum, maxSlice);
        }
        
        return maxSliceSum;       
    }
}
```
