---
layout: post
title: Proposition
subtitle: proposition
category: cs
tags: discrete-mathematics
---

> **Description** <br><br>


* this ordered seed list will be replaced by the toc
{:toc}

# Logic

### Logic Vs Intuition

| Logic | Intuition |
|:-------------:|:----------:|
| 논리 | 직관 |
| 정확함 | 정확한 느낌 (논리적인 느낌) 을 줌|
| Hard Logic | Soft Logic |

# Proposition (명제)

### Truth Value

Truth Value (진릿값) : True 나 False 를 가르키는 값

### Proposition (명제) 정의

객관적인 기준으로 Truth Value 를 구분할 수 있는 수식이나 문장

# Combound Proposition (합성명제)

### 개념
하나 이상의 단순명제를 논리 연산자로 결합한 명제

### Logical Operator

|Operation|Operation| Operator | Description |
|:-------:|:-------:|:-----------:|:-----------:|
| Not  | 부정 | ~ or ¬ | 반대의 Truth Value |
| And| 논리곱 | ⋀  | 두개의 Truth Value 가 모두 True 일 떄만 True |
| Or| 논리합 | ⋁ | 두개 중 하나의 Truth Value만 True 이면 True|
| Xor | 배타적 논리합 | ⊕ | 두개의 Truth Value가 다를때만 True |
| Impication | 함축, 조건명제 | ⟶ | 전제 또는 가정이 True 고 결론 또는 결과가 False일때만 False |
| Biconditional | 쌍조건명제 | ⟷ | 두개의 Truth Value 가 같을 경우만 True |
| Equivalance | 동치 | ≡ | 두개의 Truth Value 가 같음 |

### Logical Operator Truth Table

| p   |   q |  ¬p |  p⋀q | p⋁q | p⊕q | p⟶q | p⟷q |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| T  |   T |     F|    T|    T|    F|    T|    T|
| T  |   F |     F|    F|    T|    T|    F|    F|
| F  |   T |     T|    F|    T|    T|    T|    F|
| F  |   F |     T|    F|    F|    F|    T|    T|

### Logical Operator Predence

|Predence|Operator| 
|:-------:|:-------:|
| 1 | ¬ |
| 2 | ⋀ |
| 3 | ⋁ |
| 4 | ⊕ |
| 5 | ⟶ |
| 6 | ⟷ |


### Logical Operation Law

<table class="tg">
<thead>
  <tr>
    <th class="tg-7btt" colspan="2">Logical Equivalance</th>
    <th class="tg-7btt">Law</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow">p⋁F ≡ p</td>
    <td class="tg-c3ow">p⋀T ≡ p</td>
    <td class="tg-0pky">항등법칙 (identity law)</td>
  </tr>
  <tr>
    <td class="tg-c3ow">p⋁T ≡ T</td>
    <td class="tg-baqh">p⋀F ≡ F</td>
    <td class="tg-0pky">지배법칙 (Domination Law)</td>
  </tr>
  <tr>
    <td class="tg-c3ow">p⋁¬p ≡ T</td>
    <td class="tg-baqh">p⋀¬p ≡ F</td>
    <td class="tg-0pky">부정법칙 (Negation Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow" colspan="2">¬(¬p) ≡ p</td>
    <td class="tg-0pky">이중 부정법칙 (Double Negation Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow">p⋁p ≡ p</td>
    <td class="tg-baqh">p⋀p ≡ p</td>
    <td class="tg-0pky">멱등법칙 (Idempotent Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow">p⋁q ≡ q⋁p</td>
    <td class="tg-baqh">p⋀q ≡ q⋀p </td>
    <td class="tg-0pky">교환법칙 (Communtative Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow">p⋁(q⋁r) ≡ (p⋁q)⋁r</td>
    <td class="tg-baqh">p⋀(q⋀r) ≡ (p⋀q)⋀r</td>
    <td class="tg-0pky">결합법칙 (Associative Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow"><span style="font-weight:400;font-style:normal">p⋁(q⋀r) ≡ (p⋁q)⋀(p⋁r)</span></td>
    <td class="tg-baqh"><span style="font-weight:400;font-style:normal">p⋀(q⋁r) ≡ (p⋀q)⋁(p⋀r)</span></td>
    <td class="tg-0pky">분배법칙 (Distribute Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow">¬(p⋁q) ≡ ¬p⋀¬q</td>
    <td class="tg-baqh">¬(p⋀q) ≡ ¬p ⋁ ¬q</td>
    <td class="tg-0pky">드 모르간의 법칙 (De Morgan's Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow">p⋀(p⋁q) ≡ p</td>
    <td class="tg-baqh">p⋁(p⋀q) ≡ p</td>
    <td class="tg-0pky">흡수법칙 (Absorption Law) </td>
  </tr>
  <tr>
    <td class="tg-c3ow" colspan="2">p⟶q ≡ ¬p ⋁ q</td>
    <td class="tg-0pky">함축법칙 (Implication Law) </td>
  </tr>
</tbody>
</table>



### 진리값에 따른 종류

| Proposition | Description |
|:-------------:|:----------:|
| Tautology(항진명제) | 항상 True 명제 |
| Contradiction(모순명제) | 항상 False 인 명제|
| Contigency(사건명제) | Tautologcy도 Contradiction도 아닌 명제 |

### 분류

어떤 Logical Operation이 주가 되느냐에 따라서 합성 명제를 분류할 수 있음

| Type |Operator | Description |
|:---:|:-------:|:-----------:|
| Negation | ~ or ¬ | 부정문 |
| Conjunction |  ⋀  | 연언문 |
| Disjunction |  ⋁ | 선언문 |
| Exclusive Disjunction | ⊕ | 배타적 선언문 |
| Conditional Proposition | ⟶ | 조건문 (조건명제) |
| Biconditional Proposition | ⟷ | 쌍조건문 (쌍조건명제) |
| Logical Equivalance | ≡ | 동치 |

# Conjunction Proposition


```
p ⟶ q
```

### 정의
- 명제 p,q에 대하여 명제 p가 전제이고 명제 q가 결론인 명제
- 명제 p가 True 이고 q가 False 일때만 전체 명제가 False

### converse (역)

```
q ⟶ p
```

### inverse (이)

```
¬p ⟶ ¬q
```

### contraposition (대우)

```
¬q ⟶ ¬p
```

<br><br><br>
> **Source**<br><br>
> [Microsoft]()