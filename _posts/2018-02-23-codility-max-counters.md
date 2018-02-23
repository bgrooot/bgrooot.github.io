---
layout: post
title: Codility - Max Counters
---

[RESULT](https://app.codility.com/demo/results/trainingRW92U4-VB2)

```java
import java.util.*;

class Solution {
    public int[] solution(int N, int[] A) {
        int[] counter = new int[N];
        int max = 0;
        int maxCountVal = 0;
        
        for (int a : A) {
            if (a <= N) {
                a--;
                if (counter[a] < maxCountVal) {
                    counter[a] = maxCountVal;
                }
                
                counter[a]++;   
                
                if (max < counter[a]) {
                    max = counter[a];
                }
            } else {
                maxCountVal = max;
            }
        }
        
        for (int i = 0; i < counter.length; i++) {
            if (counter[i] < maxCountVal) {
                counter[i] = maxCountVal;
            }
        }
        
        return counter;
    }
}
```
