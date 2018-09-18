---
layout: post
title: Codility - CountSemiprimes
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingZVJNW6-EBH)

```java
import java.util.*;

class Solution {
    public int[] solution(int N, int[] P, int[] Q) {
        int[] semiPrimeCount = getSemiPrimeCount(N);
        int[] answer = new int[P.length];

        for (int i=0; i<P.length; i++) {
            answer[i] = semiPrimeCount[Q[i]] - semiPrimeCount[P[i] - 1];
        }

        return answer;
    }

    private int[] getSemiPrimeCount(int number) {
        int[] semiPrimeCount = new int[number + 1];
        int[] primeSieve = getPrimeSieve(number);

        for (int i=1; i<primeSieve.length; i++) {
            semiPrimeCount[i] = semiPrimeCount[i - 1];
            if (primeSieve[i] != 0 && primeSieve[i / primeSieve[i]] == 0) {
                semiPrimeCount[i]++;
            }
        }

        return semiPrimeCount;
    }

    private int[] getPrimeSieve(int number) {
        int[] primeSieve = new int[number + 1];

        for (int i=2; i*i<=number; i++) {
            if (primeSieve[i] == 0) {
                for (int j=i*2; j<=number; j+=i) {
                    if (primeSieve[j] == 0) {
                        primeSieve[j] = i;
                    }
                }
            }
        }

        return primeSieve;
    }
}
```
