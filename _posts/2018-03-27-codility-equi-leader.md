---
layout: post
title: Codility - EquiLeader
date: 2018-03-27 00:08:08 +0900
---

[RESULT](https://app.codility.com/demo/results/trainingVU4J47-PMR)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int count = 0;
        int size = 0;
        int value = 0;
        for (int a : A) {
            if (size == 0) {
                value = a;
                size++;
            } else if (value == a) {
                size++;
            } else {
                size--;
            }
        }
        
        int leaderCount = 0;
        if (size == 0) {
            return 0;
        } else {
            for (int a : A) {
                if (value == a) {
                    leaderCount++;
                }
            }
        }
        
        int firstLeaderCount = 0;
        for (int i=0; i<A.length; i++) {
            if (value == A[i]) {
                firstLeaderCount++;    
            }
            
            if (firstLeaderCount > (i + 1) / 2.0 && leaderCount - firstLeaderCount > (A.length - i - 1) / 2.0) {
                count++;
            }
        }
        
        return count;
    }
}
```
