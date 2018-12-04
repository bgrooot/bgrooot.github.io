 ---
 layout: post
 title: Codility - FibFlog
 category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingGPZ6UE-VNF)
  
처음에 작성했던 코드는 성능에서 까였는데 개구리가 도착해도 탐색을 계속했기 때문.  
최소의 점프 횟수를 찾는 것이기 때문에 처음 도착했을 때 종료하도록 했다.
  
```java
import java.util.*;

class Solution {

    private int[] question;
    private List<Integer> fibonacci = new ArrayList<>();
    private Set<Integer> memoization = new HashSet<>();
    private Queue<JumpState> probability = new LinkedList<>();

    public int solution(int[] A) {
        question = A;
        fibonacci = getFibonacci(question.length);

        testProbability(question.length, 0);

        while (!probability.isEmpty()) {
            JumpState p = probability.poll();

            if (p.getIndex() == -1) {
                return p.getJump();
            } else {
                testProbability(p.getIndex(), p.getJump());
            }
        }

        return -1;
    }

    private void testProbability(int n, int j) {
        int f = 0;

        for (int i=1; f<=n+1 && i<fibonacci.size(); i++) {
            f = fibonacci.get(i);
            int index = n - f;

            if (isLeafIndex(index)) {
                JumpState jumpState = new JumpState(index, j + 1);

                if (!memoization.contains(index)) {
                    probabilityClearIfFound(index);
                    probability.add(jumpState);
                    memoization.add(index);
                }
            }
        }
    }

    private boolean isLeafIndex(int index) {
        return index == -1 || (isValid(index) && question[index] == 1);
    }

    private boolean isValid(int index) {
        return index >= 0 && index < question.length;
    }

    private void probabilityClearIfFound(int index) {
        if (index == -1) {
            probability.clear();
        }
    }

    private List<Integer> getFibonacci(int maxNumber) {
        List<Integer> fibonacci = new ArrayList<>();
        int first = 0;
        int second = 1;

        fibonacci.add(first);

        do {
            fibonacci.add(second);
            second = first + second;
            first = second - first;

        } while (second <= maxNumber + 1);

        return fibonacci;
    }

    private class JumpState {
        private int index;
        private int jump;

        public JumpState(int index, int jump) {
            this.index = index;
            this.jump = jump;
        }

        public int getIndex() {
            return index;
        }

        public int getJump() {
            return jump;
        }
    }
}
```
