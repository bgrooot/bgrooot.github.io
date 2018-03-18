---
layout: post
title: Codility - Dominator
date: 2018-03-18 23:22:25 +0900
---

[RESULT](https://app.codility.com/demo/results/trainingEPE6UZ-3VZ)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Map<Integer, Integer> map = new HashMap<>();
        int dominator = -1;
        
        for (int i=0; i<A.length; i++) {
            map.put(A[i], map.getOrDefault(A[i], 0) + 1);
            if (map.get(A[i]) > A.length / 2) {
                dominator = i;
                break;
            }
        }
        
        return dominator;
    }
}
```
