---
layout: post
title: Codility - CommonPrimeDivisors
category: codility
---

[RESULT](https://app.codility.com/demo/results/training4D4R6R-VPA)

이해가 잘 안가는 어려운 문제다.  
참고했던 것 중에는 [요 설명](http://zuu.kr/jusf)이 가장 낫다.
요약하자면,
- 소수의 약수 집합이 같으려면 두 집합이 서로에게 속해야한다.
- 최대 공약수를 빼면서 포함되고 있는지를 포함한다
- 수를 소인수분해된 형태로 이해하면 좀 편하다.

```java
import java.util.*;

class Solution {

    public int solution(int[] A, int[] B) {
        int count = 0;
        for (int i=0; i<A.length; i++) {
            if (hasPrimeDivisorsSet(A[i], B[i]) && (hasPrimeDivisorsSet(B[i], A[i]))) {
                count++;
            }
        }

        return count;
    }

    private boolean hasPrimeDivisorsSet(int A, int B) {
        int gcd;
        while ((gcd = gcd(A, B)) != 1) {
            A = A / gcd;
        }

        return A == 1;
    } 

    private int gcd(int A, int B) {
        while (A % B != 0) {
            int tmp = B;
            B = A % B;
            A = tmp; 
        }

        return B;
    }
}
```
