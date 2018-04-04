---
layout: post
title: Codility - MaxProductOfThree
date: 2018-03-03 22:53:24 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/training4QKGBE-GMY)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Arrays.sort(A);
        
        int N = A.length;
        int answer1 = A[0] * A[1] * A[N - 1];
        int answer2 = A[N - 1] * A[N - 2] * A[N - 3];
        return answer1 > answer2 ? answer1 : answer2;
    }
}
```
