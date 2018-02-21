---
layout: post
title: Codility - PermMissingElem
---

[RESULT](https://app.codility.com/demo/results/trainingRVBEZW-857)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        boolean[] array = new boolean[100002];
        for (int a : A) {
            array[a] = true;
        }
        
        for (int i = 1; i <= array.length; i++) {
            if (!array[i]) {
                return i;   
            }
        }
        
        return 100001;   
    }
}
```
