--- 
  layout: post
  title: Codility - AbsDistinct
  category: codility
---

그냥 이렇게 풀면 안 되나 해서 풀었던 방법.  
[RESULT](https://app.codility.com/demo/results/trainingA8478A-QW7)

```java
import java.util.*;

class Solution {
    private Set<Long> set = new HashSet<>();

    public int solution(int[] A) {
        for (int a : A) {
            set.add(Math.abs(Long.valueOf(a)));
        }

        return set.size();
    }
}
```
  
*Caterpillar Method*를 사용한 방법.  
성능은 이 경우는 양 끝단에서 범위를 줄이기 때문에 더 빠르다.  
[RESULT](https://app.codility.com/demo/results/trainingHW22JG-N6N)

```java
import java.util.*;

class Solution {

    public int solution(int[] A) {
        int count = 0;
        int head = 0;
        int tail = A.length - 1;

        while (head <= tail) {
            if (head > 0 && A[head] == A[head-1]) {
                head++;
                continue;
            } 
            
            if (tail < A.length-1 && A[tail] == A[tail+1]) {
                tail--;
                continue;
            }

            long absHead = Math.abs(Long.valueOf(A[head]));
            long absTail = Math.abs(Long.valueOf(A[tail]));

            if (absHead == absTail) {
                tail--;
                head++;
            } else if (absHead < absTail) {
                tail--;
            } else {
                head++;
            }

            count++;
        }

        return count;
    }
}
```
