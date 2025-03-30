def solution(arr, n):
    if len(arr) % 2 == 1:
        return [arr[i] + n if i % 2 == 0 else arr[i] for i in range(len(arr))]
    else:
        return [arr[i] + n if i % 2 == 1 else arr[i] for i in range(len(arr))]
    
# 시간복잡도 : O(n) ; n은 arr의 길이
## 리턴하는 배열 내의 for문이 arr의 길이만큼 돌기 때문에 
# 공간복잡도 : O(n) ; n은 arr의 길이
## 리턴하는 배열의 크기가 arr의 길이이기 때문에
