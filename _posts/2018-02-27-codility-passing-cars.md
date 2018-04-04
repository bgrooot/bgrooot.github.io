---
layout: post
title: Codility - PassingCars
date: 2018-02-27 21:17:45 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingK4JVNG-YNQ)

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
