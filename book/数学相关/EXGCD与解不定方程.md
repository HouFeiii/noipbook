# EXGCD

## GCD 表示最大公数

假如我们用GCD的方法来求a =32 b = 12 的最大公约数,那么过程如下：

| a  | b          |
|----|------------|
| 32 | 12         |
| 12 | 32 %12 = 8 |
| 8  | 12 % 8 = 4 |
| 4  | 8 % 4=0    |

最后得到GCD(32,12) = 4

### 拓展欧几里得定理：
  
如果公式： $$a*x + b*y  = gcd(a,b)$$ 那么一定有解，且有无数解

### 证明

方程1:$$32*x + 12*y = 4$$ 其中$$x_1,y_1$$为一组解

方程2:$$12*x + 8 *y = 4$$ 其中$$x_0,y_0$$为一组解

那么$$x_0,y_0,x_1,y_1$$有什么关系呢？


可以知道 

```math
8= 32 - 32/12*12 = 32-2*12
```

代入 $$12*x_0 +(32-2*12)y_0=4$$

化简得到:

```math
32*y_0 + 12(x_0-2*y_0)=4
```

对照:

$$32*x_1 -12*y_1 =4$$

**得到重要的关系式**=>


```math
\left\{\begin{matrix}
 x_1=&y_0 \\ 
y_1=&x_0-2*y_0
\end{matrix}\right.
```


其中$$ 2= 32 /12$$

如果$$a=32,b=12$$也可以这样认为  ==>
    $$x_1=y_0$$
    $$y_1=x_0-a/b*y_0$$
 

我们又知道：
    $$gcd(32,12) = gcd(12,8) = gcd(8,4) = gcd(4,0)$$

所有我们一定可以通过$$ 4x+0*y =4$$ 的一组解 返推出 $$32*x+12*y =4$$ 的一组,那我们取$$4*x+0*y = 4$$,$$  x =1,y=0 $$这一组解

### 验证

公式1:

$$4x+0*y =4$$

 的一组解为:

```math
\left\{\begin{matrix}
 x_0=&1 \\
y_0=&0
\end{matrix}\right.
```

-------------

公式2:

$$8x+4y =4$$
 的一组解为$$x_1,y_1$$,那么

```math
\left\{\begin{matrix}
 x_1=&y_0&=&0 \\ 
y_1=&x_0-8/4*y_0&=&1
\end{matrix}\right.
```

带入验证,确实正确.

-----------------

同理:
$$12x+8y =4$$
的一组解$$x_2,y_2$$,那么

```math
\left\{\begin{matrix}
 x_2=&y_1&=&1 \\ 
y_2=&x_1-12/8*y_1&=&-1
\end{matrix}\right.
```

------------

同理:
$$32x+12y =4$$
的一组解$$x_3,y_3$$,那么

```math
\left\{\begin{matrix}
 x_3=&y_2&=&-1 \\ 
y_3=&x_2-32/12*y_2&=&3
\end{matrix}\right.
```


## 结论

知道了$$ 32*x+12*y =4$$ 的一个解$$x_0,y_0$$，其它解：

$$  x= x_0+(b/gcd(a,b))*t$$

$$  y= y_0-(a/gcd(a,b))*t$$

因为:

$$a*x_0 + a*b/gcd*t +b*y_0 -a*b/gcd*t =gcd$$

$$a(x_0+b/gcd*t) + b(y_0-a/gcd*t) = gcd$$


可以看到如果有一个解,就有无数的解

### exgcd代码模板

```cpp
int ex_gcd(int a,int b,int c,int &x,int &y){
    if(b == 0){
        x=c/a;
        y=0;
        return a;
    }
    int ans = ex_gcd(b,a%b,c2,x,y);
    int tmp =x;
    x = y;
    y = tmp -a/b*y;
    return ans;
}
```

## cojs上的代码

```c
#include <iostream>
using namespace std;

//扩展欧几里德算法
int ExGCD(int a, int b, int& x, int& y)
{
if(b == 0)
{
x = 1, y = 0;
return a;
}
int d = ExGCD(b, a%b, x, y);
int temp = x;
x = y;
y = temp - a/b*y;
return d;
}

int main()
{
int x, y, d;
d = ExGCD(99, 78, x, y);
cout << d << " " << x << " " << y << endl;
return 0;
}

//定理一: 如果a,b是不都为0的任意整数,则d=gcd(a,b)是a,b的线性组合{ax+by: x,y∈Z}的最小元素.
// 已知d=gcd(a,b)=gcd(b,a mod b)
//
//由gcd(b,a mod b)得知,d = bx + a mod b = bx + (a-floor(a/b)*b)*y = a*y + b(x-floor(a/b)*y)
//当推到gcd(a,b)时,d′ = d = a*y + b(x-floor(a/b)*y)

//其他比较重要定理:
//定理二:d|a, d|b => d|(ax+by)  注:d|a表示a mod b == 0,即a能被b整除
//定理一推论: 对任意整数a,b如果d|a,d|b,则d|gcd(a,b)

//附:
int GCD(int a, int b)
{
  　　if(b == 0)
　　return a;
　　return GCD(b, a % b);
}
//迭代形式:
int GCD(int a, int b)
{
while(b != 0)
{
int r = b;
b = a % b;
a = r;
}
return a;
```
