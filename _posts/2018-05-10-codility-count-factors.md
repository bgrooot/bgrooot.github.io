---
layout: post
date: 2018-05-10 22:45:16 +0900
title: Codility - CountFactors
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingDEE7GM-4CJ)

```java
import java.util.*;

class Solution {
    public int solution(int N) {
        int root = (int) Math.sqrt(N);
        int count = 0;
        
        for (int i=1; i<=root; i++) {
            if (N % i == 0) {
                count++;
                if (N / i != i) {
                    count++;
                }
            }
        }
        
        return count;
    }
}
```
