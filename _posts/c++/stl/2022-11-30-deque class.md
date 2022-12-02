---
layout: post
title: deque class
subtitle: class
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
> deque class in [&lt;deque&gt;]()

* this ordered seed list will be replaced by the toc
{:toc}
# Header
```c++
#include<deque>
```
# Syntax

```c++
template <class Type, class Allocator =allocator<Type>>
class deque
```

# Constructor

```c++
deque();
```

```c++
explicit deque(const Allocator& Al);
explicit deque(size_type Count);
deque(size_type Count, const Type& Val);
```

```c++
deque(
    size_type Count,
    const Type& Val,
    const Allocator& Al);
```

```c++
deque(const deque& Right);
```

```c++
template <class InputIterator>
deque(InputIterator First,  InputIterator Last);
```

```c++
template <class InputIterator>
deque(
   InputIterator First,
   InputIterator Last,
   const Allocator& Al);
```

```c++
deque(initializer_list<value_type> IList, const Allocator& Al);
```

# Typedefs

### Implement

```c++
template <class _Tp, class _Allocator>
class __deque_base
    : protected __deque_base_common<true>
{
    __deque_base(const __deque_base& __c);
    __deque_base& operator=(const __deque_base& __c);
public:
    typedef _Allocator                               allocator_type;
    typedef allocator_traits<allocator_type>         __alloc_traits;
    typedef typename __alloc_traits::size_type       size_type;

    typedef _Tp                                      value_type;
    typedef value_type&                              reference;
    typedef const value_type&                        const_reference;
    typedef typename __alloc_traits::difference_type difference_type;
    typedef typename __alloc_traits::pointer         pointer;
    typedef typename __alloc_traits::const_pointer   const_pointer;

    /**
    * omitted
    */
    
    typedef __deque_iterator<value_type, pointer, reference, __map_pointer,
                             difference_type>    iterator;
    typedef __deque_iterator<value_type, const_pointer, const_reference, __map_const_pointer,
                             difference_type>    const_iterator;
    
    /**
    * the rest is omitted
    */                         
```

### Typedefs Table

| Name |Description|
|:-------------|:----------|
| allocator_type | deque 의 allocator type |
| value_type | deque에 저장되는 element type|
| size_type | allocator의 size를 나타내는 type |
| iterator | 모든 element 를 access 할 수 있는 iterator |
| const_iterator ||
| pointer |element 를 access 할 수 있는 pointer |
| const_pointer ||
| reference | element의 reference type |
| const_reference ||
| reverse_iterator | reverse order iterator type |
| const_reverse_iterator ||
| difference_type ||

# Functions

### push_back

- deque 의 맨 마지막에 element push

```c++
void push_back(const Type& val);

void push_back(Type&& val); 
```

### pop_back

- deque 의 맨 마지막 element pop

```c++
void pop_back(); 
```

- Example

```c++
int main(){
        deque<int> dq;
        
        dq.push_back(1);
        dq.push_back(2);
        dq.push_back(3);
        dq.pop_back();
}
```

### push_front

- deque 의 맨 앞에 element push

```c++
void push_front(const Type& val);

void push_front(Type&& val); 
```

### pop_front

- deque 의 맨 앞 element pop

```c++
void pop_front(); 
```

- Example

```c++
int main(){
        deque<int> dq;
        
        dq.push_front(3);
        dq.push_front(2);
        dq.push_front(1);
        dq.pop_front();
}
```

### front

- deque 의 처음 element reference 를 return

```c++
reference front();

const_reference front() const;
```

### back
- deque 의 마지막 element reference 를 return

```c++
reference back();

const_reference back() const;
```

- Example

```c++
 int main(){
        deque<int> dq;
        
        dq.push_front(1);
        dq.push_back(2);
        dq.push_back(3);
        int& fr = dq.front();
        int fv = dq.front();
        int& br = dq.back();
        int bv = dq.back();     
 }
```

### begin

- deque의 처음 element 를 가르키는 iterator return

```c++
const_iterator begin() const;

iterator begin();
```

### end

- deque의 마지막의 다음을 가르키는 iterator return

```c++
const_iterator end() const;

iterator end();
```

- Example

```c++
int main(){
    deque<int> dq;

    dq.push_front(1);
    dq.push_back(2);
    dq.push_back(3);

    deque<int> :: iterator begin_it = dq.begin();
    deque<int> :: iterator end_it = dq.end();

    sort(begin_it,end_it);
    reverse(dq.begin(),dq.end());
}
```

### insert

- Where 의 위치부터 Val 을 insert, Val을 가르키는 iterator return

```c++
iterator insert(
    const_iterator Where,
    const Type& Val);
    
    iterator insert(
    const_iterator Where,
    Type&& Val);
```

- Where 의 위치부터 Val 을 count개 insert

```c++
void insert(
    iterator Where,
    size_type Count,
    const Type& Val);
```

- Where 의 위치부터 Frist ~ Last 이전 위치의 element들을 insert

```c++
template <class InputIterator>
void insert(
    iterator Where,
    InputIterator First,
    InputIterator Last);
```

- Where 의 위치부터 initializer_list<Type> insert

```c++
iterator insert(
    iterator Where,initializer_list<Type>
IList);
```

- Example

```c++
int main(){
    deque<int> dq1;
    deque<int> dq2;

    dq1.push_front(1);
    dq1.push_back(2);
    dq1.push_back(6);
    dq1.push_back(7);

    dq2.push_back(3);
    dq2.push_back(5);

    dq2.insert(dq2.begin()+1,4);
    dq1.insert(dq1.begin()+2,dq2.begin(),dq2.end());
    
    for(auto element : dq1) cout<< element <<' ';
}
```

### erase

- Where 위치의 element를 erase

```c++
iterator erase(iterator _Where);
```

- first에서 last 이전 위치의 element 들을 erase

```c++
iterator erase(iterator first, iterator last);
```

- Example

```c++
int main(){
    deque<int> dq;

    dq.push_front(0);
    dq.push_back(1);
    dq.push_back(INT32_MAX);
    dq.push_back(INT32_MAX);
    dq.push_back(INT32_MAX);
    dq.push_back(2);
    dq.push_back(3);

    dq.erase(dq.begin()+2);
    dq.erase(dq.begin()+2,dq.begin()+4);

    for(auto element : dq) cout<< element <<' ';
    
}
```

### at

- pos 위치의 element 의 reference를 return

```c++
reference at(size_type pos);

const_reference at(size_type pos) const;
```

- Example

```c++
int main(){
    deque<int> dq;

    dq.push_front(0);
    dq.push_back(1);
    dq.push_back(2);

    dq.at(0); 
}
```

### clear

- deque 의 모든 element 삭제

```c++
void clear(); 
```

- Example

```c++
int main(){
    deque<int> dq;

    dq.push_front(0);
    dq.push_back(1);
    dq.push_back(2);

    dq.clear();
}
```

### empty

- deque 에 element가 없으면 true

```c++
bool empty() const;
```

- Example

```c++
 int main(){
    deque<int> dq;

    dq.push_front(0);
    dq.push_back(1);
    dq.push_back(2);

    dq.clear();
    if(dq.empty()) cout<<"true";
}
```

### size

- deque 에 있는 element 수 를 return

```c++
size_type size() const;
```

- Example

```c++
int main(){
    deque<int> dq;

    dq.push_front(0);
    dq.push_back(1);
    dq.push_back(2);

    for(int i=0; i<dq.size(); i++){
        cout<<dq[i]<<' ';
    }
}
```

<br><br><br>
> **Source**<br><br>
> [Microsoft](https://learn.microsoft.com/ko-kr/cpp/standard-library/deque-class?view=msvc-170)