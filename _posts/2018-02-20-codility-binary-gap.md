---
layout: post
title: Codility - CountSemiprimes
category: codility
---

[RESULT](https://app.codility.com/demo/results/trainingQ6NJRH-F2X)  
  
```java
import java.util.*;

class Solution {
    public int solution(int N) {
        String s = Integer.toBinaryString(N);
        int longestGap = 0;
        int gap = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '0') {
                gap++;        
            } else {
                if (gap > longestGap) {
                    longestGap = gap;
                }
                
                gap = 0;
            }
        }
        
        return longestGap;
    }
}
```
