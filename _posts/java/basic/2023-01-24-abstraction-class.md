---
layout: post
title: Abstraction - class
subtitle: 
category: java
tags: java-basic
---

> **Java Abstraction**<br>
> class

* this ordered seed list will be replaced by the toc
{:toc}

## class
<hr>

#### class?

Instance를 생성하기 위한 구조를 정의하는 틀 <br>

#### Keyword: class

class 를 통해 class 를 선언 할 수 있음 <br>


#### Structure

class 는 두개의 Memeber로 구성됨 <br>

- Member variable (Field) : 변수<br>
- Member Method (Method) : 함수<br>


#### Area

class의 Member는 Instance (객체) 와 Class (클래스) 영역으로 나누어짐 <br>

| | Instance | Class |
|:----:|:--------:|:----: |
| 생성 시점 | 객체 생성시 | class 로딩시 |
| 소멸 시점 | Heap에서 Garbage Collector 가 Instance 삭제시 | 프로그램이 종료시 |
| Access|Instance 이름. | class 이름.|

#### Keyword: static

static Keyword를 통해 class 영역에 변수와 메서드를 생성할 수 있음 <br>
Class Area 에서 Instance Area로 Access는 불가능<br>

```java 

class Example{
    
    // Instance
    int instanceNum;
    int getInstanceNum(){
        return instanceNum;
    }
    
    // Class 
    static int staticNum;
    static int getStaticNum(){
        return staticNum; //instanceNum Access 불가
    }
    
}

public class Main{

    public static void main(String[] args) {
        Example ex = new Example();
        
        // Access Instance Member
        ex.instanceNum = 3;
        
        //Access Class Member
        Example.staticNum = 3;
        
    }
}
```


## Constructor
<hr>

#### Constructor?

Instance 생성시 Initialize를 위한 Method <br>

#### Point

Class 이름과 같은 이름의 Method를 구현해 Constructor를 구현 할 수 있음 <br>
new Keyword 와 Constructor를 이용해 Heap에 Instance를 생성할 수 있음 <br>
class Reference Variable 를 통해 Heap에 생성된 Instance를 Access할 수 있음 <br>

```java
class Example{
    int instanceNumber;

    //Constructor
    Example(int number){
       instanceNumber = number;
    }

}

public class Main{

    public static void main(String[] args) {
        Example example = new Example(3);

        // Access Instance Memeber
        example.instanceNumber = 4;

    }
}
```



## Overloading
<hr>

#### Overloading?

Method를 같은 이름으로 Parameter의 개수,타입,순서를 바꿔 여러개 정의하는것

```java

class Example{
    int instanceNumber1;
    long instanceNumber2;
    
    //Constructor
    Example(int number){
       instanceNumber1 = number;
       instanceNumber2 = number;
    }

    
    //Overloading
    Example(int number1,long number2){
        instanceNumber1 = number1;
        instanceNumber2 = number2;
    }

    Example(int number1,int number2){
        instanceNumber1 = number1;
        instanceNumber2 = number2;
    }
    
    Example(long number1,int number2){
        instanceNumber1 = number2;
        instanceNumber2 = number1;
    }
    
}

public class Main{

    public static void main(String[] args) {
        Example example1 = new Example(3);
        Example example2 = new Example(10l,3);
    }
}
```

#### Keyword: this

this 는 현재의 Instance를 참조하는 변수 <br>
Method가 실행될떄 StackFrame의 Local Variable Area에 자동 생성됨 <br>

```java
class Example{
    int instanceNumber;

    Example(int instanceNumber){
       this.instanceNumber = instanceNumber;
    }
}
```

this() 는 현재 class의 다른 Constructor를 의미 <br>
this() 는 Constructor 내의 제일 첫 줄에만 사용 가능 <br>

```java
class Example{
    int instanceNumber1;
    long instanceNumber2;
    Example(int instanceNumber){
       this.instanceNumber1 = instanceNumber;
    }
    
    Example(int instanceNumber1,long instanceNumber2){
        this(instanceNumber1);
        this.instanceNumber2 = instanceNumber2;
    }
}
```








