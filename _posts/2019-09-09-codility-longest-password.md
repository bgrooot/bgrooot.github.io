---
  layout: post
  title: Codility - LongestPassword 
  category: codility
---
[RESULIT](https://app.codility.com/demo/results/trainingCR3WXZ-22T)
```java
import java.util.*;

class Solution {

    private int max = -1;

    public int solution(String S) {
        String[] words = S.split(" ");
        for (String word : words) {
            int digitsCount = 0;
            int lettersCount = 0;
            boolean found = true;

            for (int i = 0; i < word.length(); i++) {
                char character = word.charAt(i);
                if (Character.isDigit(character)) {
                    digitsCount++;
                } else if (Character.isLetter(character)) {
                    lettersCount++;
                } else {
                    found = false;
                    break;
                }
            }

            if (found && digitsCount % 2 == 1 && lettersCount % 2 == 0) {
                max = Math.max(word.length(), max);
            }
        }

        return max;
    }
}
```
