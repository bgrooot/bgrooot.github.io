---
layout: post
title: Codility - MinAvgTwoSlice
date: 2018-02-28 18:19:00 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/training7V4U6S-Z73)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int count = 0;
        int zeroCount = 0;
        for (int a : A) {
            if (a == 0) {
                zeroCount++;
            } else {
                count += zeroCount;
            }
            
            if (count > 1000000000) {
                return -1;
            }
        }
        
        return count;
    }
}
```

시뻘건 퍼포먼스의 점수를 보고 여기서 $$O(N^2)$$이 아니게 어떻게 짜야하는지 답이 안 나와 결국 검색...  
결론은 전체 2, 3개의 부분집합의 평균이 전체의 평균보다 작다는 것을 이용하는 방법이 있었다.

[RESULT](https://app.codility.com/demo/results/training885A39-SZN)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        float minAvg = Integer.MAX_VALUE;
        int minStart = 0;
        
        for (int i = 0; i < A.length - 1; i++) {
            int sliceSum = A[i];
            for (int j = i + 1; j < Math.min(i + 3, A.length); j++) {
                sliceSum += A[j];
                float sliceAvg = (float) sliceSum / (j - i + 1);
                
                if (minAvg > sliceAvg) {
                    minAvg = sliceAvg;
                    minStart = i;
                }        
            }
        }
        
        return minStart;
    }
}
```
