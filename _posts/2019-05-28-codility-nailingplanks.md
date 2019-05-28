---
layout: post
title: Codility - NailingPlanks
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingVX8AYH-4S7)

Codility의 문제들은 **RESPECTABLE** 정도만 되어도 참 어렵다.  
TLE가 왜 나는지 모르겠어서 한참을 헤맸다.  
  
못을 위치 순으로 정렬 한 후에(문제의 조건이 널빤지를 다 박을 수 있는 못의 인덱스 이므로 이전의  순서를 기억하게 한다.), 널빤지를 순회하면서 못을 박을 수 있는 가장 작은 인덱스를 찾고, 찾은 인덱스들 중에 가장 큰 수가 전체 널빤지를 박을 수 있는 최소의 못의 수이다.  
  
그리고 아직도 직관적으로 이해되지는 않지만, 널빤지를 순회하면서 찾은 가장 작은 인덱스가 이전에 찾은 인덱스보다 작을 경우는 더 탐색할 필요가 없기 때문에 종료 조건을 걸어야 시간초과를 피할 수 있다.  

```java
import java.util.*;

class Solution {

    private int[][] nailArray;
    private int maxIndex = 0;

    public int solution(int[] A, int[] B, int[] C) {
        setNailArray(C);

        for (int i=0; i<A.length; i++) {
            if (!tryNail(A[i], B[i])) {
                return -1;
            }
        }

        return maxIndex;
    }

    private boolean tryNail(int start, int end) {
        boolean success = false;
        int minIndex = Integer.MAX_VALUE;
        int successIndex = nailArray.length- 1;
        int from = 0;
        int to = nailArray.length - 1;;

        while (from <= to) {
            int index = (int) Math.ceil((float) (from + to) / 2);
            int[] nail = nailArray[index];

            if (start > nail[1]) {
                from = index + 1;
            } else if (end < nail[1]) {
                to = index - 1;
            } else {
                to = index - 1;
                successIndex = index;
                success = true;
            }
        }

        if (success) {
            for (int i=successIndex; i<nailArray.length; i++) {
                int[] nail = nailArray[i];
                if (nail[1] > end) {
                    break;
                }

                if (nail[0] < minIndex) {
                    minIndex = nail[0];
                }

                if (minIndex <= maxIndex) {
                    break;
                }
            }

            if (minIndex > maxIndex) {
                maxIndex = minIndex;
            }
        }

        return success;
    }

    private void setNailArray(int[] C) {
        nailArray = new int[C.length][2];
        int count = 1;
        for (int i=0; i<C.length; i++) {
            nailArray[i][0] = count++;
            nailArray[i][1] = C[i];
        }
 
        Arrays.sort(nailArray, (int[] x, int[] y) -> x[1] - y[1]);
    }
}
```
