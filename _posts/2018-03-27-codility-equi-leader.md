---
layout: post
title: Codility - EquiLeader
date: 2018-03-27 00:08:08 +0900
---

[RESULT](https://app.codility.com/demo/results/trainingVU4J47-PMR)
```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        Map<Integer, Integer> firstCountMap = new HashMap<>();
        Map<Integer, Integer> secondCountMap = new HashMap<>();
        int firstLeader = A[0];
        int secondLeader = A[0];
        int count = 0;
        
        for (int a : A) {
            secondCountMap.put(a, secondCountMap.getOrDefault(a, 0) + 1);
            if (secondCountMap.get(secondLeader) < secondCountMap.get(a)) {
                secondLeader = a;
            }
        }
        
        for (int i=0; i<A.length-1; i++) {
            firstCountMap.put(A[i], firstCountMap.getOrDefault(A[i], 0) + 1);
            secondCountMap.put(A[i], secondCountMap.get(A[i]) - 1);
            
            if (firstCountMap.get(firstLeader) < firstCountMap.get(A[i])) {
                firstLeader = A[i];                 
            }
            
            if (secondCountMap.get(secondLeader) < secondCountMap.get(A[i])) {
                secondLeader = A[i];      
            }
            
            if (firstCountMap.get(firstLeader) > (i + 1) / 2.0 && secondCountMap.get(secondLeader) > (A.length - i - 1) / 2.0 && firstLeader == secondLeader) {
                count++;    
            }
        }
        
        
        return count;
    }
}
```

첫번째 방법는 Map을 이용해 숫자가 나타나는 갯수를 카운팅하여 Leader값을 계산하고  
두번쨰 방법은 Leader가 되는 수는 다른 수들 보다 반 넘게 나타난다는 점을 이용해서 Leader값을 계산 하는 방식이다.  
그리고 두 부분으로 나눈 경우에도 전체의 Leader값과 동일하다는 것을 이용한다.  

내 생각으로는 Map과 일반 계산식으로의 시간 복잡도가 $$O(n)$$ 으로 동일 할 것 같았는데  
다른 언어의 솔루션에서는 이런 방법으로 풀었을 때 통과하는 것 같은데...  
아무튼 자료를 참고하여 풀었기 때문에 나중에 다시 풀면 풀 수 있을까 싶다.  
언젠가는 꼭 material을 번역하면서 차근차근 다시 봐야겠다.

[RESULT](https://app.codility.com/demo/results/trainingVU4J47-PMR)

```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int count = 0;
        int size = 0;
        int value = 0;
        for (int a : A) {
            if (size == 0) {
                value = a;
                size++;
            } else if (value == a) {
                size++;
            } else {
                size--;
            }
        }
        
        int leaderCount = 0;
        if (size == 0) {
            return 0;
        } else {
            for (int a : A) {
                if (value == a) {
                    leaderCount++;
                }
            }
        }
        
        int firstLeaderCount = 0;
        for (int i=0; i<A.length; i++) {
            if (value == A[i]) {
                firstLeaderCount++;    
            }
            
            if (firstLeaderCount > (i + 1) / 2.0 && leaderCount - firstLeaderCount > (A.length - i - 1) / 2.0) {
                count++;
            }
        }
        
        return count;
    }
}
```
