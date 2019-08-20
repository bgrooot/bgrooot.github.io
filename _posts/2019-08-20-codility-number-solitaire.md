---
    layout: post
    title: Codility - NumberSolitaire
    category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingVK586S-S83)

```java
import java.util.*;

class Solution {
    int[] A;
    int[] memo = new int[100001];

    public int solution(int[] A) {
        this.A = A;
        return getMaxDiceSum(A.length - 1);
    }

    private int getMaxDiceSum(int n) {
        int maxSum = Integer.MIN_VALUE;

        if (n == 0) {
            return A[n];
        } else if (memo[n] != 0) {
            return memo[n];
        }


        for (int i=Math.max(n-6, 0); i<n; i++) {
            maxSum = Math.max(maxSum, getMaxDiceSum(i));
        }

        memo[n] = A[n] + maxSum;
        return memo[n];
    }
}
```
