---
layout: post
title: Codility - FrogRiverOne
date: 2018-02-23 22:23:36 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/training363E4W-TMB)

```java
import java.util.*;

class Solution {
    public int solution(int X, int[] A) {
        Set<Integer> used = new HashSet<>();
        int sum = X * (X + 1) / 2;
        
        for (int i=0; i<A.length; i++) {
            if (!used.contains(A[i])) {
                sum -= A[i];
                if (sum == 0) {
                    return i; 
                }
            }
            
            used.add(A[i]);
        }
        
        return -1;
    }
}
```
