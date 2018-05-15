---
layout: post
date: 2018-05-15 23:53:37 +0900
title: Codility - Flags
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingFFFDFV-UU6)

$$O(N)$$ 풀이법

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        List<Integer> peekList = new ArrayList<>();
        int maxFlagCount = 0;
        
        for (int i=1; i<A.length-1; i++) {
            if (isPeek(A, i)) {
                peekList.add(i);
                i++;
            }
        }
        
        for (int i=1; i<=peekList.size() && i<=A.length/i+1; i++) {
            int count = 1;
            int prevIndex = peekList.get(0);
            
            for (int j=1; j<peekList.size() && count<i; j++) {
                if (peekList.get(j) - prevIndex >= i) {
                    count++;
                    prevIndex = peekList.get(j);
                }
            }
            
            maxFlagCount = Math.max(maxFlagCount, count);
        }
        
        return maxFlagCount;
    }
    
    private boolean isPeek(int[] A, int i) {
        return A[i] > A[i-1] && A[i] > A[i+1] ? true : false;
    }
}
```
