---
  layout: post
  title: Codility - MinAbsSum
  category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingXHM2YD-TP9)

```java
import java.util.*;

class Solution {

    private int[] absA;
    private int sum;
    private Map<Integer, Integer> countMap = new HashMap<>();
    private int[] subset;

    public int solution(int[] A) {
        this.absA = getAbs(A);
        this.sum = getSum(absA);
        this.countMap = getCountMap(absA);
        this.subset = new int[Math.max(sum, 1)];

        Arrays.fill(subset, -1);
        subset[0] = 0;

        for (int key : countMap.keySet()) {
            for (int i=0; i<sum/2+1; i++) {
                if (subset[i] >= 0) {
                    subset[i] = countMap.get(key);
                } else if (i >= key && subset[i - key] > 0) {
                    subset[i] = subset[i - key] - 1;
                }
            }
        }

        int res = sum;
        for (int i=0; i<sum/2+1; i++) {
            if (subset[i] >= 0) {
                res = Math.min(res, sum - i * 2);
            }
        }

        return res;
    }

    private int[] getAbs(int[] A) {
        int[] absA = new int[A.length];
        for (int i=0; i<A.length; i++) {
            absA[i] = Math.abs(A[i]);
        }

        return absA;
    }

    private int getSum(int[] A) {
        int sum = 0;
        for (int i=0; i<A.length; i++) {
            sum += A[i];
        }

        return sum;
    }

    private Map<Integer, Integer> getCountMap(int[] A) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int i=0; i<A.length; i++) {
            countMap.put(A[i], countMap.getOrDefault(A[i], 0) + 1);
        }

        return countMap;
    }
}
```
내가 이해한 바를 적어보면, 문제는 주어진 수들의 합이나 차의 절대값이 가장 수를 찾는 것이다. 바꿔말하면 주어진 집합을$$ S $$, 부분집합을 $$ U $$ 라 하고, $$ S $$ 에서 $$ U $$ 를 제외한 나머지 수의 집합인 $$ C $$ 두 부분으로 나눌때 $$ |SUM(U) - SUM(C)| $$ 가 가장 작은 것. 즉, 가능한 부분집합들을 찾고 그 부분집합과 나머지 집합의 차가 가장 작은 수를 찾는 것이다.  
  
부분집합의 차를 구하기 위해 집합의 모든 수를 다 더한 전체합을 이용한다.  
전체합에서 구하려는 부분집합에 2를 곱하고 빼서 차를 구한다.  
예를 들어, $$ S=\{a, b, c, d, e\} $$ 라고 하고 $$ U=\{a, b, c\} $$ 라고 할 때 $$ C=\{d, e\} $$ 이고  

$$ ⇒ a + b + c + d + e - 2(a + b + c) $$

$$ ⇒ d + e - (a + b + c) $$

이므로 S와 C의 차를 구할 수 있다. 그리고 부분집합을 선택 할 때 $$ {a, b, c} $$ 를 선택하는 경우와 $$ {d, e} $$ 를 선택하는 경우의 차가 동일하기 때문에 $$ SUM(U) < SUM(S) / 2 $$
까지만 계산 할 수 있다. 

부분집합을 구할 때에는 위에서 설명한 바에 따라서 두 부분의 부분집합 중 합에 대한 부분만을 찾아도 되며 그 부분집합의 합이 $$ SUM(S) / 2 $$ 인 것까지만 찾으면 된다. 그런데 문제에서 주어진 집합에 길이에 비해 집합의 수의 범위가 작으므로 중복된 수가 많이 발생할 것이 예측가능하므로 계산 시간을 줄이기 위해 부분합을 구할 때 집합의 원소의 갯수를 활용하는데 부분합과 같이 기록하며, 부분합을 구하고 남은 숫자를 의미한다.  
집합의 원소들을 $$ SUM(S) / 2 $$ 까지 순회하면서 부분합을 찾는데, 이전 단계들에서 만든 부분합일 때는 현재 단계에서 사용할 수 있다는 의미로 카운팅을 넣고 이미 구한 부분합으로 만들 수 있는 부분합이라면 숫자 하나를 더 사용했다는 의미로 이전 단계에서 1을 뺀다. 
