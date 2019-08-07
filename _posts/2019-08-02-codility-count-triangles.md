--- 
  layout: post
  title: Codility - CountTriangles
  category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingF2MCJ8-MJ4)

```java
import java.util.*;

class Solution {
    private int count = 0;
    private int[] A;

    public int solution(int[] A) {
        this.A = A;
        Arrays.sort(this.A);

        for (int i=0; i<A.length-2; i++) {

            int j = i + 1;
            int k = j + 1;

            while (j < A.length - 1) {
                if (k < A.length && isTriangular(i, j, k)) {
                    k++;
                } else {
                    count += (k - j - 1);
                    j++;
                }
            }
        }

        return count;
    }

    private boolean isTriangular(int i, int j, int k) {
        return A[i] + A[j] > A[k] && A[i] + A[k] > A[j] && A[j] + A[k] > A[i];
    }
}
```
