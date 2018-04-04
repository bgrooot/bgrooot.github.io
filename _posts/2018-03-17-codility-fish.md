---
layout: post
title: Codility - Fish
date: 2018-03-17 01:23:48 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingXHPHJW-P64)

```java
import java.util.*;

class Solution {
    public int solution(int[] A, int[] B) {
        Stack<Integer> upStack = new Stack<>();
        Stack<Integer> downStack = new Stack<>();
        
        for (int i=0; i<A.length; i++) {
            if (B[i] == 1) {
                downStack.push(A[i]);
            } else if (!downStack.isEmpty()) {
                while (!downStack.isEmpty() && downStack.peek() < A[i]) {
                    downStack.pop();
                }
                if (downStack.isEmpty()) {
                    upStack.push(A[i]);
                }
                
            } else {
                upStack.push(A[i]);
            }
        }
    
        return upStack.size() + downStack.size();    
    }
}
```
