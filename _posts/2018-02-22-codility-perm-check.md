---
layout: post
title: Codility - PermCheck
date: 2018-02-22 00:02:40 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingAXMVME-255)

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
