---
layout: post
title: Codility - Nesting
date: 2018-03-16 23:06:10 +0900
---

[RESULT](https://app.codility.com/demo/results/trainingMQQCGV-Y5A)

```java
import java.util.*;

class Solution {
    public int solution(String S) {
        Stack<Character> stack = new Stack<>();
        for (int i=0; i<S.length(); i++) {
            if (S.charAt(i) == '(') {
                stack.push(S.charAt(i));
            } else if (stack.isEmpty() || '(' != stack.pop()) {
                return 0;
            }
        }
        
        return stack.isEmpty() ? 1 : 0;
    }
}
```
