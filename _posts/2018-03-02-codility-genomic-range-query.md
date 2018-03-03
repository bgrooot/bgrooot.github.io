---
layout: post
title: Codility - GenomicRangeQuery
date: 2018-03-02 14:15:39 +0900
---

[RESULT](https://app.codility.com/demo/results/trainingJYE6E4-7KY)

```java
import java.util.*;

class Solution {
    public int[] solution(String S, int[] P, int[] Q) {
        int[] answer = new int[P.length];
        
        for (int i = 0; i < P.length; i++) {
            int minFactor = 4;
            for (int j = P[i]; j <= Q[i]; j++) {
                int factor = getImpactorFactor(S.charAt(j));
                if (minFactor > factor) {
                    minFactor = factor;
                }
            }
            
            answer[i] = minFactor;
        }
        
        return answer;
    }
    
    private int getImpactorFactor(char c) {
        switch (c) {
            case 'A':
                return 1;
            case 'C':
                return 2;
            case 'G':
                return 3;
            case 'T':
                return 4;
        }
        
        return -1;
    }
}
```

보통의 방법으로 루프를 사용하여 O(N * M)으로 해결하는 방법.  
아래는 각 문자열에서 나타낸 갯수를 세어 각 문자에서의 문자 갯수 스냅샷을 기록한다.  
그리고 문제의 시작, 종료 인덱스의 스냅샷의 값이 낮은 순서로 문자 갯수를 빼서(해딩 구간에 문자가 나타났다면) 결과를 구하는 방식이다.

[RESULT](https://app.codility.com/demo/results/trainingQAMQWH-G7G)

```java
import java.util.*;

class Solution {
    public int[] solution(String S, int[] P, int[] Q) {
        int[] answer = new int [P.length];
        int[][] memo = new int[5][S.length() + 1];
        
        for (int i = 1; i <= S.length(); i++) {
            for (int j = 1; j <= 4; j++) {
                memo[j][i] = memo[j][i - 1];
            }
            
            memo[getImpactorFactor(S.charAt(i - 1))][i]++;
        }
        
        for (int i = 0; i < P.length; i++) {
            for (int j = 1; j <= 4; j++) {
                if (memo[j][Q[i] + 1] - memo[j][P[i]] > 0) {
                    answer[i] = j;
                    break;
                }
            }
        }
        
        return answer;
    }
    
    private int getImpactorFactor(char c) {
        switch (c) {
            case 'A':
                return 1;
            case 'C':
                return 2;
            case 'G':
                return 3;
            case 'T':
                return 4;
        }
        
        return -1;
    }
}
```
