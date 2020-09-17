#include <iostream>
using namespace std;

void nhapMang(int M[], int n);
void xuatMang(int M[], int n);
int BSearch(int M[], int n, int x);
int BSearchRecur(int M[], int x,int left,int right);
int main(int argc, char** argv) {
    int n = 5;
    int M[n];
    nhapMang(M, n);
    cout<<"Mang sau khi nhap:\n";
    xuatMang(M,n);
    cout<<"\nNhap so muon tim:";
    int x;
    cin>>x;
    int kq = BSearchRecur(M, x, 0, n-1);
    if(kq == -1){
        cout<<"Khong thay"<<x;
    } else {
        cout<<"Thay"<<x<<"o vi tri"<<kq;
    }
    return 0;
}

void nhapMang(int M[], int n) {
    for(int i=0;i<n;i++) {
        cout<<"M["<<i<<"]=";
        cin>>M[i];
    }
};
void xuatMang(int M[], int n) {
    for(int i=0;i<n;i++) {
        cout<<M[i]<<"\t";
    }
};

int BSearch(int M[], int n, int x) {
    int left =0;
    int right = n-1;
    int mid;
    do {
        mid = (left + right)/2;
        if(M[mid]== x) {
            return mid;
        } else if(M[mid] > x) {
            right = mid -1;
        } else {
            left = mid + 1;
        }
    } while (left <= right);
    return -1;
}

int BSearchRecur(int M[], int x,int left,int right) {
    //diem dung thu nhat khi khong tim thay x trong ds
if(left > right) {
    return -1;
}

int mid = (left + right)/2;
//diem dung thu 2 khi tim thay x tai vi tri mid
if(M[mid] == x) {
    return mid;
} else if(M[mid] > x) {
    return BSearchRecur(M, x, left, right -1);
} else {
    return BSearchRecur(M, x, left +1, right);
}
}