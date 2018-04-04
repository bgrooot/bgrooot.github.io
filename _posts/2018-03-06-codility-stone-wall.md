---
layout: post
title: Codility - StoneWall
date: 2018-03-06 21:59:00 +0900
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingETAVVP-7PG)

```java
import java.util.*;

class Solution {
    public int solution(int[] H) {
        int count = 0;
        Stack<Integer> stack = new Stack<>();
        
        for (int h : H) {
            while (!stack.empty() && stack.peek() > h) {
                stack.pop();
            }
            
            if (stack.empty() || stack.peek() != h) {
                count++;
            }
            
            stack.push(h);
        }
        
        return count;
    }
}
```
