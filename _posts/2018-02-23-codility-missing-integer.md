---
layout: post
title: Codility - Missing Integer
date: 2018-02-23 00:12:46 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingJ63MTC-SEJ)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        boolean[] array = new boolean[A.length + 1];
        for (int a : A) {
            if (a > 0 && a <= A.length) {
                array[a] = true;
            }
        }
        
        for (int i = 1; i < array.length; i++) {
            if (!array[i]) {
                return i;
            }
        }
        
        return array.length;
    }
}
```
