---
layout: post
title: Codility - FrogJmp
date: 2018-02-21 22:46:52 +0900
category: codility
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

내가 왜 굳이 이렇게 짰을까?

[RESULT](https://app.codility.com/demo/results/trainingEJQFDG-EPU/)

```java
import java.util.*;

class Solution {
    public int solution(int X, int Y, int D) {
        return (int) Math.ceil((Y - X) / (double) D);
    }
}
```
