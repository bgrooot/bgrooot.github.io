---
  layout: post
  title: Codility- MaxNonoverlappingSegments
  category: codility
---
[RESULT](https://app.codility.com/demo/results/training5EJCP3-EAV)
```java
import java.util.*;

class Solution {

    public int solution(int[] A, int[] B) {
        int start = 0;
        int index = start;
        int count = 0;

        while (index < A.length) {
            if (index == 0) {
                count++;
                index++;
            } else if (A[index] > B[start]) {
                count++;
                start = index;
            } else {
                index++;
            }
        }

        return count;
    }
}
```
