---
layout: post
title: Codility - FrogJmp
---

[RESULT](https://app.codility.com/demo/results/trainingN6HX3N-84Y)

```java
import java.util.*;

class Solution {
    public int solution(int X, int Y, int D) {
        int count = (Y - X) / D;
        if ((Y - X) % D > 0) {
            count++;   
        }
        
        return count;
    }
}
```
