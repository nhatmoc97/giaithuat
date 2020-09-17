#include <iostream>
using namespace std;

int choose(int n, int k) {
    if(n == k || k == 0)
    return 1;
    return choose(n-1,k) + choose(n-1,k-1);
}

int main(int argc, char** argv) {
    int n=5;
    int k=3;
    int kq =choose(n,k);
    cout<<kq;
    return 0;
}