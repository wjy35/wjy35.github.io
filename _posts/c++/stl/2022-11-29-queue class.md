---
layout: post
title: queue class
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
> class queue in <[queue](https://velog.io/@wangsun7/queue)> library<br>

* this ordered seed list will be replaced by the toc
{:toc}

# Syntax

```c++
template <class Type, class Container = deque <Type>>
class queue
```

# Constructor

```c++
queue();
```
```c++
explicit queue(const container_type& right);
```

# Typedefs

### Implement
```c++
template <class _Tp, class _Container /*= deque<_Tp>*/>
class _LIBCPP_TEMPLATE_VIS queue
{
public:
    typedef _Container                               container_type;
    typedef typename container_type::value_type      value_type;
    typedef typename container_type::reference       reference;
    typedef typename container_type::const_reference const_reference;
    typedef typename container_type::size_type       size_type;
    
/**
* the rest is omitted
*/

}
```
### Typedefs Table

| Name |Description|
|:-------------|:----------|
| container_type | queue의 container type |
| value_type | container에 저장되는 element type|
| size_type | element의 size를 표현하기 위한 unsigned int |
| reference | element의 reference type |
| const_reference | element의 const reference type |


# Functions

### empty

- queue가 비어있으면 true를 return

```c++
bool empty() const;
```

- Example

```c++
int main(){
    queue<int> q;

    if(q.empty()) cout<<"true";
}
```

### push

- queue 의 맨 뒤에 val을 push

```c++
void push(const Type& val);
void push(const Type&& val);
```

### pop

- queue 의 맨 앞 element 를 pop

```c++
void pop();
```

- Example

```c++
int main(){
    queue<int> q;
    int x=3;

    q.push(3); // void push(const Type&& val);
    q.push(x); // void push(const Type& val);

    q.pop();
    q.pop();

    if(q.empty()) cout<<"true";
}
```

### front

- queue 의 맨 앞 element의 reference 를 return

```c++
reference front();

const_reference front() const;
```

### back

- queue 의 맨 뒤 element의 reference 를 return

```c++
reference back();

const_reference back() const;
```

- Example

```c++
int main(){
    queue<int> q;
    int x=3;

    q.push(3);
    q.push(x);

    int& fr = q.front();
    int& br = q.back();

    int fv = q.front();
    int bv = q.back();

    q.front()++;
    fr++;

    if( fr==5 && fv==3 ) cout<<"true";
    
}
```

### size

- queue의 element 개수를 return

```c++
size_type size() const;
```

- Example

```c++
int main(){
    queue<int> q;
    int x=3;

    q.push(3);
    q.push(x);
    int size = q.size();
    for(int i=0; i<size; i++){
        cout<<i<<" ";
    }
}
```
<br><br><br>
> **Source**<br><br>
> [Microsoft](https://learn.microsoft.com/ko-kr/cpp/standard-library/queue-class?view=msvc-170)   

