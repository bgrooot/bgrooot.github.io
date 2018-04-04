---
layout: post
title: Codility - CountDiv
date: 2018-02-26 21:36:34 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingTF9UCU-JUZ)

```java
import java.util.*;

class Solution {
    public int solution(int A, int B, int K) {
        if (A > K) {
            A = A + A % K;
        } else if (K < B  && A % K != 0) {
            A = K;
        }
        
        int r = (B - A) / K;
        r = A % K == 0 ? r + 1 : r;
        return r;
    }
}
```

A보다 큰 K로 나누어 떨어지는 수를 찾고 그 수와 B사이의 수를 찾는 전략을 사용했다.  
이것도 조건을 찾느라 꽤나 고생했는데 풀이를 보고는 머리의 한계를 통렬히 느꼈다...

[RESULT](https://app.codility.com/demo/results/trainingUBPJ9P-PZ2)

```java
import java.util.*;

class Solution {
    public int solution(int A, int B, int K) {
        int r = (B / K) + 1;
        if (A != 0) {
            r -= (A - 1) / K + 1;
        }
        
        return r;
    }
}
```
