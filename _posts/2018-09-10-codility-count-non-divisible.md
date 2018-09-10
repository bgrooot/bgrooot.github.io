---
layout: post
title: Codility - CountNonDivisible
category: codility
---

오랜만의 코딜리티... 근 2달만이다.    
~~그 동안 여러가지 일이 있었다.~~

[RESULT](https://app.codility.com/demo/results/training48YVSX-VGN)

``` java
import java.util.*;

class Solution {
    public int[] solution(int[] A) {
        int[] answer = new int[A.length];
        Map<Integer, Integer> uniqueMap = setUniqueMap(A);
        
        for (int i=0; i<A.length; i++) {
            int count = 0;
            
            for (int j=1; j*j<=A[i]; j++) {
                if (A[i] % j == 0) {
                    count += uniqueMap.getOrDefault(j, 0);
                    if (j != A[i] / j) count += uniqueMap.getOrDefault(A[i] / j, 0);
                }    
            }
            
            answer[i] = A.length - count;
        }
        
        return answer;
    }
    
     private Map<Integer, Integer> setUniqueMap(int[] A) {
        Map<Integer, Integer> uniqueMap = new HashMap<>();
        for (int a : A) {
            uniqueMap.put(a, uniqueMap.getOrDefault(a, 0) + 1);
        }

        return uniqueMap;
    }
}
```
