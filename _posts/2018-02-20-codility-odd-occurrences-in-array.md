---
layout: post
title: Codility - OddOccurrencesInArray
category: codility
---

[RESULT](https://app.codility.com/demo/results/training4F8KB5-R7G)  

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Set<Integer> set = new HashSet<>();
        for (int a : A) {
            if (set.contains(a)) {
                set.remove(a);
            } else {
                set.add(a);
            }
        }
        
        return (int) set.toArray()[0];
    }
}
```
