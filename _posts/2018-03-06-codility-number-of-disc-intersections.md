---
layout: post
title: Codility - NumberOfDiscIntersections
date: 2018-03-06 15:40:29 +0900
---

난이도가 MEDIUM만 되어도 꽤나 어렵다. 우선 완전 탐색부터...  
원의 오른쪽 보다 다른 원의 왼쪽이 같거나 작을 때 교차된다고 판단한다.  

[RESULT](https://app.codility.com/demo/results/trainingHWF3C6-FXM)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int count = 0;
        for (int i=0; i<A.length-1; i++) {
            for (int j=i+1; j<A.length; j++) {
                if ((long) i + A[i] >= j - A[j]) {
                    count++;    
                }           
            }
        }
        
        return count;
    }
}
```

여러 솔루션들이 있었는데 개인적으로는 이 방법이 가장 직관적인 것 같았다.  
왼쪽 좌표를 정렬 한 뒤에 오른쪽 좌표보다 작은 좌표는 교차한다고 판단하는 방법이다.  
오른쪽 좌표보다 작은 좌표를 찾을 때 이진탐색으로 찾는다.  
정렬할 때 Stream API로 정렬했었는데 역시나 속도가 안나온다.  

[RESULT](https://app.codility.com/demo/results/trainingDKEAPS-VDF)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        long[][] interval = new long[A.length][2];
        for (int i=0; i<A.length; i++) {
            interval[i][0] = i - A[i]; 
            interval[i][1] = (long) i + A[i];
        }
        
        Arrays.sort(interval, new Comparator<long[]>() {
            public int compare(long[] a, long[] b) {
                return Long.compare(a[0],b[0]);
            }
        });
        
        int count = 0;
        for (int i=0; i<A.length; i++) {
            long target = interval[i][1];
            int start = i + 1;
            int end = A.length - 1;
            
            while (start <= end) {
                int mid = (start + end) / 2;
                if (interval[mid][0] <= target) {
                    count += mid - start + 1;
                    start = mid + 1;
                } else {
                   end = mid - 1;
                }
            }
            
            if (count > 10000000) {
                return -1;
            }
        }
        
        return count;
    }
}
```
