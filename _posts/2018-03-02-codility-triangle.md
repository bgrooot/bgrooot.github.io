---
layout: post
title: Codility - Triangle
date: 2018-03-02 17:18:20 +0900
---

[RESULT](https://app.codility.com/demo/results/training8BTU76-2FK)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Arrays.sort(A);
        for (int i=0; i<A.length-2; i++) {
            int P = A[i];
            int Q = A[i + 1];
            int R = A[i + 2];
            
            if (P + Q > R && Q + R > P && R + P > Q) {
                return 1;
            }        
        }
        
        return 0;
    }
}
```
