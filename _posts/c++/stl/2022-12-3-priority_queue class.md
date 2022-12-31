---
layout: post
title: priority_queue class
subtitle: library
category: c++
tags: stl
---

> **Description** <br><br>
> class priority_queue in <[queue](https://velog.io/@wangsun7/queue)> library<br>

* this ordered seed list will be replaced by the toc
{:toc}
# Haeder

```c++
#include<queue>
```

# Syntax

```c++
template <class Type,
        class Container= vector <Type>,
                class Compare= less <typename Container ::value_type>>
class priority_queue
```
### Compare

- 두가지 기본 struct 를 제공

| Name | Top |
|:-------------|:----------|
|greater|MIN VALUE priority_queue|
|less|MAX VALUE priority_queue|

# Constructor

```c++
priority_queue();
```

```c++
template <class InputIterator>
priority_queue(InputIterator first, InputIterator last);
```


# Typedef

### Implement

```c++
template <class _Tp, class _Container = vector<_Tp>,
          class _Compare = less<typename _Container::value_type> >
class _LIBCPP_TEMPLATE_VIS priority_queue
{
public:
    typedef _Container                               container_type;
    typedef _Compare                                 value_compare;
    typedef typename container_type::value_type      value_type;
    typedef typename container_type::reference       reference;
    typedef typename container_type::const_reference const_reference;
    typedef typename container_type::size_type       size_type;
    static_assert((is_same<_Tp, value_type>::value), "" );
    
    /**
    * the rest is omitted
    */  
```

### Typedef table

| Name |Description|
|:-------------|:----------|
| container_type | priority_queue의 container type |
| value_type | container에 저장되는 element type|
| size_type | element의 size를 표현하기 위한 unsigned int |


# Functions


### top

- priority 의 Compare에 의해 올라온 top element  의 reference 를 return;

```c++
const_reference top() const; 
```

### push

- priority_queue 에 value 를 push;

```c++
void push(const Type& val);
```

### pop

- priority_queue 의 top 에 있는 element 를 pop;

```c++
void pop();
```

- Example

```c++
int main(){
    priority_queue<int,deque<int>,greater<int>> pq;
    pq.push(1);
    pq.push(10);
    pq.push(100);
    pq.push(1000);
    cout<<pq.top();
}
```

### size

- priority_queue 의 element 개수를 return

```c++
size_type size() const; 
```

- Example

```c++
int main(){
    priority_queue<int,vector<int>,less<int>> pq;

    pq.push(1);
    pq.push(10);
    pq.push(100);
    pq.push(1000);

    if(pq.size()==4)cout<<"true";
} 
```

### empty

- priority_queue 의 element 가 없을 경우 true return

```c++
bool empty() const;
```

- Example

```c++
int main(){
    priority_queue<int,vector<int>,less<int>> pq;

    pq.push(1);
    pq.push(10);
    pq.pop();
    pq.pop();

    if(pq.empty())cout<<"true";
}
```


<br><br><br>
> **Source**<br><br>
> [Microsoft](https://learn.microsoft.com/en-us/cpp/standard-library/priority-queue-class?view=msvc-170#priority_queue)