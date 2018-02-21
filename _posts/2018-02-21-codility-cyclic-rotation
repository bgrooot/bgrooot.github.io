---
layout: post
title: Codility - CyclicRotation
---

[RESULT](https://app.codility.com/demo/results/training3AHGSD-NMF)  

```java
import java.util.*;

class Solution {
    public int[] solution(int[] A, int K) {
        while (K-- > 0) {
            A = shift(A);            
        }
        
        return A;
    }
    
    private int[] shift(int[] A) {
        if (A.length > 0) {
            int last = A[A.length - 1];
            for (int i = A.length - 1; i > 0; i--) {
                A[i] = A[i-1];
            }
            
            A[0] = last;
        }
        
        return A;
    }
}
```
