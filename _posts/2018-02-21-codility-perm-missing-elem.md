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

문제를 잘못 읽어 배열 크기 산정을 잘못했다.

[RESULT](https://app.codility.com/demo/results/training9HAYQ2-JDV)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        boolean[] array = new boolean[A.length + 2];
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

다른 풀이를 보지 않았다면 생각해 낼 수 있었을까?

[RESULT](https://app.codility.com/demo/results/trainingESVKRT-VN6)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        long sum = (long) (A.length + 1) * (A.length + 2) / 2;
        for (int a : A) {
            sum -= a;
        }
        
        return (int) sum;   
    }
}
```
