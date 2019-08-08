---
  layout: post
  title: Codility - MinAbsSumOfTwo
  category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingF4ZCT7-ZXA)

```java
import java.util.*;

class Solution {

    public int solution(int[] A) {
        int min = Integer.MAX_VALUE;
        int left = 0;
        int right = A.length - 1;

        Arrays.sort(A);

        while (left <= right) {
            int sum = A[left] + A[right];
            int absSum = Math.abs(sum);

            if (absSum < min) {
                min = absSum;
            }

            if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

        return min;
    }
}
```
