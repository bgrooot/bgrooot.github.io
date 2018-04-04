---
layout: post
title: Codility - CyclicRotation
date: 2018-02-21 22:23:32 +0900
category: codility
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
  
이런 신묘한 방법이...!
  
[RESULT](https://app.codility.com/demo/results/trainingQGX4PB-JGY)

```java
import java.util.*;

class Solution {
    public int[] solution(int[] A, int K) {
        int[] B = new int[A.length];
        for (int i = 0; i < A.length; i++) {
            B[(i + K) % A.length] = A[i];
        }
        
        return B;
    }
}
```
