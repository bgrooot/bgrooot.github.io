---
layout: post
date: 2018-05-10 23:29:43 +0900
title: Codility - MinPerimeterRectangle
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingYDY6KG-YMR)

```java
import java.util.*;

class Solution {
    public int solution(int N) {
        int root = (int) Math.sqrt(N);
        for (int i=root; i>0; i--) {
            if (N % i == 0) {
                return ((i + (N / i)) * 2);
            }    
        }
        
        return -1;
    }
}
```
