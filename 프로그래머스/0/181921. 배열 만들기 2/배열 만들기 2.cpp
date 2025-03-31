#include <string>
#include <vector>

using namespace std;

vector<int> solution(int l, int r) {
    vector<int> answer;
    string num;
    for (int i = l; i <= r; i++) {
        bool b = true;
        num = to_string(i);
        for (auto l : num) {
            if (l != '5' && l != '0'){
                b = false;
            }
        }
        if (b)
            answer.push_back(i);
    }
    if(answer.empty())
        answer.push_back(-1);
    return answer;
}