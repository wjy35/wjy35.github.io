---
layout: post
title: algorithm
subtitle: library
category: c++
tags: stl
---
<style>
blockquote {
  margin-left: 0px;
  border-left: 5px solid #A6CAE5;
}
.a {
  color: rgb(166,202,229);
  text-decoration-color : rgb(166,202,229);
}
</style>

> **Description** <br><br>
> &lt;algorithm&gt; library

* this ordered seed list will be replaced by the toc
{:toc}
# Header

```c++
#include<algorithm>
```

# Functions

### sort
- first부터 last 전까지의 element들을 pred를 활용해 정렬함

```c++
template<class RandomAccessIterator>
void sort(
    RandomAccessIterator first,
    RandomAccessIterator last);
```
```c++
template<class RandomAccessIterator, class Compare>
void sort(
    RandomAccessIterator first,
    RandomAccessIterator last,
    Compare pred);
```

```c++
template<class ExecutionPolicy, class RandomAccessIterator>
void sort(
    ExecutionPolicy&& exec,
    RandomAccessIterator first,
    RandomAccessIterator last);
```

```c++
template<class ExecutionPolicy, class RandomAccessIterator, class Compare>
void sort(
    ExecutionPolicy&& exec,
    RandomAccessIterator first,
    RandomAccessIterator last,
    Compare pred);
```

- pred 는 두개의 인자를 받아서 두개의 인자가 순서대로 되어있는 경우 true 를 return

- Example

```c++
bool cmp(int a , int b){
	return a<b;  // a<b일때 순서가 true => 오름차순
}
```
```c++
int main(){
	vector<int> v;
    
    v.push_back(1);
    v.push_back(3);
    v.push_back(2);
    
    sort(v.begin(),v.end());
    
}
```

### find

- first부터 last 전까지의 element들 중 value와 일치하는 값 검색
- 일치 연산을 위해 == Operator가 정의되어 있어야함

```c++
template<class InputIterator, class Type>
InputIterator find(
    InputIterator first,
    InputIterator last,
    const Type& value);
```

- Example

```c++
int main(){
    int a[5] = {0,1,2,3,4};
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);
    v.push_back(4);
    
    int* p =find(a,a+3,2);
    vector<int>::iterator it = find(v.begin(),v.end(),3);
}
```

### fill_n

- first 부터 count개의 element 들을 value 로 채움

```c++
template<class OutputIterator, class Size, class Type>
OutputIterator fill_n(
    OutputIterator first,
    Size count,
    const Type& value);
```

- Example

```c++
int main(){
    vector<int> v(5);

    for(vector<int>::iterator it=v.begin(); it<v.end(); it++){
        cout<<*it<<'\n';
    }

    fill_n(v.begin(),5,5);

    for(vector<int>::iterator it=v.begin(); it<v.end(); it++){
        cout<<*it<<'\n';
    }
}
```

### next_permutation

- first에서 last 전까지의 element 들이 다음 순열이 되도록 재정렬,재정렬 할수 없을 경우 false

```c++
template<class BidirectionalIterator>
bool next_permutation(
    BidirectionalIterator first,
    BidirectionalIterator last);
```

```c++
template<class BidirectionalIterator, class BinaryPredicate>
bool next_permutation(
    BidirectionalIterator first,
    BidirectionalIterator last,
    BinaryPredicate pred);
```

### prev_permutation

- first에서 last 전까지의 element 들이 이전 순열이 되도록 재정렬,재정렬 할수 없을 경우 false

```c++
template<class BidirectionalIterator>
bool prev_permutation(
    BidirectionalIterator first,
    BidirectionalIterator last);
```

```c++
template<class BidirectionalIterator, class BinaryPredicate>
bool prev_permutation(
    BidirectionalIterator first,
    BidirectionalIterator last,
    BinaryPredicate pred);
```

- Example

```c++
int main(){
	vector<int> v;
    v.push_back(2);
   	v.push_back(3);
    v.push_back(4);
    
    do{
    	for(vector<int>::iterator it = v.begin(); it<v.end(); it++){
        	cout<<*it<<" ";
        }
    }while(next_permutation(v.begin(),v.end()));
    
    do{
    	for(vector<int>::iterator it = v.begin(); it<v.end(); it++){
        	cout<<*it<<" ";
        }
    }while(prev_permutation(v.begin(),v.end()));

}
```

### reverse

- first부터 last 전까지의 element 들의 순서를 반대로 바꿈

```c++
template<class BidirectionalIterator>
void reverse(
    BidirectionalIterator first,
    BidirectionalIterator last);
```

- Example

```c++
int main(){
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);
    v.push_back(4);
    v.push_back(5);

    reverse(v.begin(),v.end());
}
```
### lower_bound
- first부터 last 전까지 element들 중 value보다 크거나 같은 element가 있는 첫 iterator 반환
- binary search 방식으로 찾기 때문에 정렬되어 있어야함
- value 보다 크거나 같은 element가 없을경우 last iterator 를 반환

### upper_bound

- first부터 last 전까지 element들 중 value보다 큰 element가 있는 첫 iterator 반환
- binary search 방식으로 찾기 때문에 정렬되어 있어야함
- value 보다 큰 element가 없을경우 last iterator 를 반환

```c++
template<class ForwardIterator, class Type>
ForwardIterator upper_bound(
    ForwardIterator first,
    ForwardIterator last,
    const Type& value);
```

```c++
template<class ForwardIterator, class Type, class Compare>
ForwardIterator upper_bound(
    ForwardIterator first,
    ForwardIterator last,
    const Type& value,
    Compare pred);
```

- Example

```c++
int main(){
    vector<int> v;
    v.push_back(1);
    v.push_back(3);
    v.push_back(5);
    v.push_back(7);
    v.push_back(9);

    vector<int>::iterator lit = lower_bound(v.begin(),v.end(),7);
    vector<int>::iterator uit = upper_bound(v.begin(),v.end(),7);

    cout<<*lit<<" "<<*uit;
}
```

### binary_search

- first부터 last전 까지 element들 중 value를 검색
- binary_search 이므로 정렬이 선행되어 있어야 함

```c++
template<class ForwardIterator, class Type>
bool binary_search(
    ForwardIterator first,
    ForwardIterator last,
    const Type& value);

```

- Example

```c++
int main(){
    vector<int> v;
    v.push_back(1);
    v.push_back(3);
    v.push_back(5);
    v.push_back(7);
    v.push_back(9);

    binary_search(v.begin(),v.end(),5);
}
```

<br><br><br>
> **Source**<br><br>
> [Microsoft](https://learn.microsoft.com/ko-kr/cpp/standard-library/algorithm?view=msvc-170
)