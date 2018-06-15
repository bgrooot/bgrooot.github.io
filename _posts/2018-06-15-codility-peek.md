---
layout: post
title: Codility - Peek
date: 2018-06-15 22:30:14 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingDZA6NM-XV9)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        List<Integer> peekList = new ArrayList<>();
        for (int i=1; i<A.length-1; i++) {
            if (A[i] > A[i-1] && A[i] > A[i+1]) {
                peekList.add(i);
                i++;
            }
        }
        
        for (int i=1; i<=A.length; i++) {
            if (A.length % i == 0) {
                int size = A.length / i;
                int foundCount = 0;
                
                for (int peek : peekList) {
                    if (peek / i > foundCount) {
                        break;
                    }
                    
                    if (peek / i == foundCount) {
                        foundCount++;            
                    }
                }
                
                if (foundCount >= size) {
                    return size;        
                }
            }
        }       
        
        return 0;
    }
}
```
