---
layout: post
date: 2018-05-15 23:53:37 +0900
title: Codility - Flags
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingU9W998-SJH)

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
        
        int maxFlagCount = 0;
        for (int i=1; i<=peekList.size(); i++) {
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
}
```

러닝타임을 어떻게 줄일 수가 있지 고민했는데 반감법(bisection)을 요렇게 적용하는 것이구나  

[RESULT](https://app.codility.com/demo/results/trainingWFVNW5-CK2)

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
        
        int maxFlagCount = 0;
        int start = 0;
        int end = peekList.size();
        
        if (end < 2) {
            return end;
        }
        
        while (start <= end) {
            int flag = (start + end) / 2;
            int count = 1;
            int prevIndex = peekList.get(0);
            
            for (int j=1; j<peekList.size() && count<flag; j++) {
                if (peekList.get(j) - prevIndex >= flag) {
                    count++;
                    prevIndex = peekList.get(j);
                }
            }
            
            if (count == flag) {
                start = flag + 1;
                maxFlagCount = count;
            } else {
                end = flag - 1;               
            }
        }
        
        return maxFlagCount;
    }
}
```
