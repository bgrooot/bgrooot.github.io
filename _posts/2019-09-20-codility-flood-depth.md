---
  layout: post
  title: Codility - FloodDepth
  category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingAAM8BS-THR)

```java
import java.util.*;

class Solution {

    private int max;
    private Integer incline;
    private Integer prev;
    private Stack<Pit> pitStack = new Stack<>();

    public int solution(int[] A) {
        prev = A[0];
        pitStack.add(new Pit(prev));

        for (int i=1; i<A.length; i++) {
            int a = A[i];
            int delta = a - prev;
            Pit last = pitStack.peek();

            if (changedToDecline(delta)) {
                last.right = prev;
                merge(last);
                checkDepth(last);
                removeInvalid();
                pitStack.add(new Pit(prev));
                incline = -1;

            } else if (changedToIncline(delta)){
                last.setBottom(prev);
                incline = 1;

                if (i == A.length - 1) {
                    checkLastPit(last, a);
                }

            } else if (i == A.length - 1) {
                checkLastPit(last, a);
            }

            prev = a;
        }

        return max;
    }

    private boolean changedToDecline(int delta) {
        return (incline == null && delta < 0) || (incline != null && incline != -1 && delta < 0);
    }

    private boolean changedToIncline(int delta) {
        return (incline == null && delta > 0) || (incline != null && incline != 1 && delta > 0);
    }

    private void merge(Pit pit) {
        if (pit.isMergeable()) {
            checkDepth(pit);
            Pit mergeablePit = pitStack.pop();
            while (!pitStack.isEmpty()) {
                Pit pop = pitStack.pop();
                mergeablePit.left = pop.left;
                mergeablePit.setBottom(pop.bottom);
                checkDepth(mergeablePit);

                if (mergeablePit.left > mergeablePit.right) {
                    break;
                }
            }

            pitStack.add(mergeablePit);
        }
    }

    private void removeInvalid() {
        if (pitStack.peek().isInvalid()) {
            pitStack.pop();
        }
    }

    private void checkDepth(Pit pit) {
        max = Math.max(max, pit.getDepth());
    }

    private void checkLastPit(Pit pit, int a) {
        pit.right = a;
        merge(pit);
        checkDepth(pit);
    }

    private boolean isMergeable(Pit pit) {
        return pit.right > pit.left;
    }
}

class Pit {

    public Integer left;
    public Integer right;
    public Integer bottom;

    public Pit(int left) {
        this.left = left;
    }

    public int getDepth() {
        if (isInvalid()) {
            return 0;
        } else {
            return Math.min(left, right) - bottom;
        }
    }

    public void setBottom(int bottom) {
        if (this.bottom == null) {
            this.bottom = bottom;
        } else {
            this.bottom = Math.min(this.bottom, bottom);
        }
    }

    public boolean isInvalid() {
        return (left == null || right == null || bottom == null) || (left == bottom || right == bottom);
    }

    public boolean isMergeable() {
        return right > left;
    }

    public String toString() {
        return String.format("%d %d %d", left, right, bottom);
    }
}
```
