---
layout: post
title: Codility - Brackets
date: 2018-03-07 11:22:02 +0900
---

[RESULT](https://app.codility.com/demo/results/training989CHX-VJ9)

```java
import java.util.*;

class Solution {
    public int solution(String S) {
        Stack<Character> stack = new Stack<>();
        
        for (char s : S.toCharArray()) {
            if ('(' == s || '[' == s || '{' == s) {
                stack.push(s);   
            } else if (stack.empty()) {
                return 0;    
            } else {
                char pop = stack.pop();
                if (('(' == pop && ')' != s) ||
                    ('[' == pop && ']' != s) ||
                    ('{' == pop && '}' != s)
                ) {
                    return 0;
                }
            }
        }
        
        return stack.empty() ? 1 : 0;
    }
}
```
