---
layout: post
title: Codility - PermCheck
---

[RESULT](https://app.codility.com/demo/results/training363E4W-TMB)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Set<Integer> set = new HashSet<>();
        for (int a : A) {
            set.add(a);
        }
        
        for (int i = 1; i<=A.length; i++) {
            if (!set.contains(i)) {
                return 0;
            }
        }
        
        return 1;
    }
}
```
