#include <iostream>
using namespace std;

bool isEven(int n);
bool isOdd(int n);
bool isEven(int n)
{
    if(n == 0)
return true;
else return isOdd(n-1);
}
bool isOdd(int n)
{
    return !isEven(n);
}

int main(int argc, char** argv) {
int n1 = 8;
bool kq = isEven(n1);
if (kq == true)
cout<<n1<<" la so chan";
else cout<<n1<<" la so le";
return 0;
}