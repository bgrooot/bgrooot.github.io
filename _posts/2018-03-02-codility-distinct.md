---
layout: post
title: Codility - Distinct
date: 2018-03-02 14:40:56 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingWW5HZ7-ACQ)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Set<Integer> set = new HashSet<>();
        for (int a : A) {
            set.add(a);
        }
        
        return set.size();
    }
}
```
