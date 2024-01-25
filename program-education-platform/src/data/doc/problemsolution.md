# 实验二: 分治法算法的设计与实现

## 练习1  逆序对

### 实验内容

 

### 算法思想

基于归并排序的算法，计算一个长度为n的序列的逆序对数量

归并排序的思想：将当前的序列分割为左右两半，并对分为两半的区间继续分割，直到每个被分割出来的区间l==r时，也就是只有一个元素不能再分割的时候，开始对之前被分割为两半，相邻的两个区间进行**排序**且**合并**，这样每次合并的两个区间是各自有序的，合并完返回，直到合并为长度为n的完整序列。

本题计算逆序对思路：1.在相邻区间合并的过程若处于左边区间的首部元素大于首部右边的元素，此时将右边区间的元素放入新区间中，将逆序对计数t++，表明当前左边区间首部元素与右边区间元素有一个逆序对2.若左边区间的首部元素小于等于首部右边的元素，则将左边首部元素放入新区间，计数t不变化，但将s+=t,但不重置t，因为区间有序且单增，所以能左边首部元素的构成逆序对的元素，也是左边区间中比该元素更大元素的能够成逆序对的元素。

该思路能成立的前提：在归并排序各层的过程中中所计数的逆序对数等于长度为n完整序列的逆序对数，这是因为两个区间归并以后，区间内逆序对数为0,在之前存在的逆序对数已计数进s变量中，且在后续的排序中之前排序过的**区间内关系不会发生改变**，发生改变的只会是**未进行排序过的两个区间**元素的逆序关系，因为同一区间内放入新区间的先后顺序一直是从从小元素到大元素的，逆序对数一直保持0。


### 复杂度

$O(nlogn)$

### 实验代码

```C++
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
int   a[500005],b[500005];
long long ans;
void merge_sort(int q[], int l, int r)  // 归并排序
{
if(l==r)
return ;
int mid=l+r>>1;
long long s=0;
merge_sort(q,l,mid);
merge_sort(q,mid+1,r);
int i=l,j=mid+1,k=1;
long long t=0;
while(i<=mid&&j<=r)
{
    if(q[i]>q[j])
    {
        t++;
    b[k++]=q[j++];
    // b[k++]=q[j++];
    }
    else
    {
    s+=t;
    b[k++]=q[i++];
    // b[k++]=q[i++];
  
    }
  
}

while(i<=mid)
{
    s+=t;
    b[k++]=q[i++];
}

while(j<=r)
{
    b[k++]=q[j++];
  
}
ans+=s;
for(int z=l,m=1;z<=r;z++,m++)
{
    q[z]=b[m];
}


}

int main()
{
    int n,cnt=0;
    cin>>n;
    for (int i = 1; i <= n; i ++ )
    {
        cin>>a[i];
    }
   
    merge_sort(a,1,n);
    cout << ans<<endl;
  
  
    return 0;
}
```

### 运行结果




## 练习2 快速幂取模

### 实验内容

 

### 算法思想

将指数b不断除以2，而底数a不断平方保持，比起b个a相乘，将求幂的时间复杂度$O(b)$优化到$O(log_2b)$  

根据模运算法则

$$
(a^b) mod\ p = ((a\ mod\ p)^b) mod\ p
$$

我们将$a^b$拆分为 $(a^2)^{b/2}$,并按照上述法则将$(a^2)^{b/2}mod\ p$变为 $((a^2 \ mod\ p)^{b/2}) mod\ p$  

当b%2==0时:

$$
(a^b) mod\ p=(a^{2*b/2})mod \ p=(a^2)^{b/2}mod\ p
$$

$$
(a^2)^{b/2}mod\ p = ((a^2 \ mod\ p)^{b/2}) mod\ p
$$

此时的b更新为b/2，a更新为a*a

```C++
        a *= a;
        a %= p;
        // cout<<a<<endl;
        b /= 2;
```

当b%2==1时:

$$
(a^b) mod\ p=(a^{2*(b-1)/2+1})mod \ p=((a^2)^{(b-1)/2}*a)\mod\ p
$$

根据模运算法则:

$$
(a*b) mod \ p=((a  \ mod \ p)*(b\ mod \ p))   mod \ p
$$

$$
(a^{2*(b-1)/2+1})mod \ p=(((a^2)^{(b-1)/2}mod\ p)*(a\ mod\ p) )mod\ p
$$

```C++
        if (b & 1)
        {
            sum *= a % p;
            sum %= p;
        }
```

设初始变量 $a=a_0 \ b= b_0$， $a0\ b0$表示题目要求的$a^b$ 中的a 和 b

1.当sum=1时，当b%2==1时，sum在原来的值的基础上乘以(a mod p),再对p取模此时sum值为a%p,此时b/2会自动向下取整,就可以将b更新为b/2，a更新为a*a

2.在1基础上若后续仍有b%2==1的情况，则且此时$sum=a'\% p \ ( a'表示之前的a变量里的a^k)$,不等于1时,sum 在原来的值的基础上乘以(a mod p),再对p取模，得到的$sum=((a' \ mod \ p) *(a \ mod\  p))mod \ p=(a' * a) mod \ p$  ,因为每次将**a因子分离出一个**，此时 $(a^2)^{b/2} * a'*a$仍然等于**初始时**的a^b，sum乘以(a mod p)并取模的时候，构造出了$sum=(a^m)mod \ p$, 将因子分离后可以更新a，b

这样最终当b=1时，计算得出来的最终$sum \ mod\ p$为$a^b mod \ p$

### 复杂度

$O(log_2b)$

### 实验代码

```C++
#include <bits/stdc++.h>
using namespace std;

long long ksm(long long a, long long b, long long p)
{
    long long sum = 1;
    while (b)
    {

        if (b & 1)
        {
            sum *= a % p;
            sum %= p;
        }
        // cout<<a<<"m"<<endl;
        a *= a;
        a %= p;
        // cout<<a<<endl;
        b /= 2;
    }

    return sum;
}
int main()
{
    long long a, b, p;
    cin >> a >> b >> p;
    long long ans = ksm(a, b, p);
    printf("%lld^%lld mod %lld=%lld", a, b, p, ans);
}
```

### 运行结果


 

### 实验结论

比起减治法缩小规模后只需计算小规模问题从而推回大规模问题的方法，分治法将大问题分为小问题后要逐一计算每个小问题并在最后合成为原来的大问题，且在划分为小问题时，可以将问题的时空复杂度简化。
