  module.exports={
     answers : [`#include <cmath>
     #include <cstdio>
     #include <vector>
     #include <iostream>
     #include <algorithm>
     using namespace std;
     
     int solveMeFirst(int a, int b) {
      // Hint: Type return a+b; below:
          return a+b;
     }
     
     int main() {
       int num1, num2;
       int sum;
       cin>>num1>>num2;
       sum = solveMeFirst(num1,num2);
       cout<<sum;
       return 0;
     }`
,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
       
          int numbers;
          cin>>numbers;
          vector<int> array(numbers);
          int sum  = 0;
   for(int i = 0; i<numbers ; i++){
      cin>>array[i];
      sum+=array[i];
   }
   cout<<sum;
          return 0;
        }
        `
     ]

     
 
  
  }