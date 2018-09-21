---
layout: post
title: Codility - ChocolatesByNumbers
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingZVJNW6-EBH)

```java
import java.util.*;

class Solution {

    public int solution(int N, int M) {
        return N / gcd(N, M);
    }

    private int gcd(int a, int b) {
        int tmp;
        while (a % b != 0) {
            tmp = a;
            a = b;
            b = tmp % b;
        }

        return b;
    }
}
```
