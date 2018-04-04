---
layout: post
title: Codility - Triangle
date: 2018-03-02 17:18:20 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingJNA3ST-S9F)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Arrays.sort(A);
        for (int i=0; i<A.length-2; i++) {
            int P = A[i];
            int Q = A[i + 1];
            int R = A[i + 2];
            
            if ((long) P + Q > R && (long) Q + R > P && (long) R + P > Q) {
                return 1;
            }        
        }
        
        return 0;
    }
}
```
