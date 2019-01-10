--- 
 layout: post
 title: Codility - MinMaxDivisions
 category: codility
---

[RESULT](https://app.codility.com/demo/results/training3MEQQJ-B5R)

어렵다.  
원하는 값을 찾기 위해 이진탐색을 적용한 것도 생각지도 못했으며  
구간으로 찾는 값을 구성할 수 있는지 판별하는 로직도 직관적으로 와닿지 않는다.  
한달 뒤에 다시 푸려면 풀 수있을까?  

```java
import java.util.*;

class Solution {
    public int solution(int K, int M, int[] A) {
    	int low = Arrays.stream(A).max().getAsInt();
    	int up = Arrays.stream(A).sum();
    	int res = up;

    	while (low <= up) {
    		int mid = (low + up) / 2;
    		if (isDivision(K, mid, A)) {
    			res = mid;
    			up = mid - 1;
    		} else {
    			low = mid + 1;
    		}
    	}

    	return res;
    }

    private boolean isDivision(int K, int target, int[] A) {
    	int sum = 0;
    	int count = 1;
    	for (int a: A) {
    		sum += a;
    		if (sum > target) {
    			sum = a;
    			count++;
    		}

    		if (count > K) return false;
    	}

    	return true;
    }
}
```
