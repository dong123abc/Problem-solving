/**
 * Solving Mathematical Problems: A Personal Perspective
 * Author: Terence Tao
 * Source Data - Part 2: Chapter 2 and Chapter 3
 * Dual Language: English Original (text) & Vietnamese Translation (textVi)
 */

window.bookDataPart2 = {
  chapters: [
    {
      id: "chapter-2",
      number: 2,
      title: "Examples in number theory",
      titleVi: "Các ví dụ trong Lý thuyết số",
      pageRef: "9",
      sections: [
        {
          id: "chapter-2-intro",
          title: "Introduction to Number Theory",
          titleVi: "Mở đầu về Lý thuyết số",
          blocks: [
            {
              type: "quote",
              text: "There is divinity in odd numbers, either in nativity, chance, or death.",
              textVi: "Có sự linh thiêng trong những con số lẻ, dù là lúc chào đời, sự tình cờ, hay trong cái chết.",
              attribution: "William Shakespeare, The Merry Wives of Windsor"
            },
            {
              type: "paragraph",
              text: "Number theory may not necessarily be divine, but it still has an aura of mystique about it. Unlike algebra, which has as its backbone the laws of manipulating equations, number theory seems to derive its results from a source unknown. Take, for example, Lagrange’s theorem (first conjectured by Fermat) that every positive integer is a sum of four perfect squares (e.g. \\(30 = 4^2 + 3^2 + 2^2 + 1^2\\)).",
              textVi: "Lý thuyết số có thể không nhất thiết mang tính thần thánh, nhưng nó vẫn luôn toát lên vẻ huyền bí quyến rũ. Không giống như đại số vốn lấy các quy tắc biến đổi phương trình làm xương sống, lý thuyết số dường như bắt nguồn từ một nguồn cảm hứng vô tận. Chẳng hạn, định lý Lagrange (được Fermat dự đoán đầu tiên) phát biểu rằng mọi số nguyên dương đều là tổng của 4 số chính phương (ví dụ \\(30 = 4^2 + 3^2 + 2^2 + 1^2\\))."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "(a) n always has the same last digit as its fifth power n^5.",
                "(b) n is a multiple of 9 if and only if the sum of its digits is a multiple of 9.",
                "(c) (Wilson’s theorem) (n - 1)! + 1 is a multiple of n if and only if n is a prime number.",
                "(d) If k is a positive odd number, then 1^k + 2^k + ... + n^k is divisible by n + 1.",
                "(e) There are exactly four numbers that are n digits long and have the same last digits as their square (000, 001, 625, 876 for n=3)."
              ],
              itemsVi: [
                "(a) n luôn có chữ số tận cùng giống hệt lũy thừa bậc 5 của nó (n^5).",
                "(b) n là bội số của 9 khi và chỉ khi tổng các chữ số của nó chia hết cho 9.",
                "(c) (Định lý Wilson) (n - 1)! + 1 là bội số của n khi và chỉ khi n là một số nguyên tố.",
                "(d) Nếu k là số nguyên dương lẻ, thì 1^k + 2^k + ... + n^k chia hết cho n + 1.",
                "(e) Có đúng 4 số có n chữ số có các chữ số tận cùng trùng khớp với bình phương của chính nó (với n=3 là 000, 001, 625, và 876)."
              ]
            }
          ]
        },
        {
          id: "chapter-2-section-1",
          title: "2.1 Digits",
          titleVi: "2.1 Các chữ số",
          blocks: [
            {
              type: "problem",
              id: "problem-2-1",
              title: "Problem 2.1 (Taylor 1989, p. 7)",
              titleVi: "Bài toán 2.1 (Taylor 1989)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Show that among any 18 consecutive three-digit numbers there is at least one which is divisible by the sum of its digits.",
                  textVi: "Chứng minh rằng trong 18 số nguyên có ba chữ số liên tiếp bất kỳ, luôn có ít nhất một số chia hết cho tổng các chữ số của nó."
                }
              ]
            },
            {
              type: "solution",
              id: "solution-2-1",
              title: "Analysis & Proof",
              titleVi: "Phân tích & Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Proof. Within the 18 consecutive numbers, one must be a multiple of 18, say abc10. Because abc10 is a multiple of 9 as well, a + b + c must be a multiple of 9. Because a + b + c ranges between 1 and 27, a + b + c must be 9, 18, or 27. 27 only occurs when abc = 999, but that is not a multiple of 18. Hence a + b + c is 9 or 18, and so (a+b+c)|18. But 18|abc10 by definition, so (a+b+c)|abc10, as desired.",
                  textVi: "Chứng minh. Trong 18 số liên tiếp, chắc chắn có đúng một số là bội số của 18, ký hiệu là \\(abc_{10}\\). Vì \\(abc_{10}\\) chia hết cho 18 nên nó cũng chia hết cho 9, do đó tổng các chữ số \\(a + b + c\\) phải là bội số của 9. Vì \\(1 \\le a + b + c \\le 27\\), nên \\(a + b + c\\) chỉ có thể nhận giá trị 9, 18, hoặc 27. Trường hợp tổng bằng 27 chỉ xảy ra khi số đó là 999, nhưng 999 không chia hết cho 18. Vậy \\(a + b + c\\) chỉ có thể là 9 hoặc 18. Cả hai số 9 và 18 đều là ước của 18, tức là \\((a + b + c) \\mid 18\\). Mà \\(18 \\mid abc_{10}\\), suy ra \\((a + b + c) \\mid abc_{10}\\). Điều phải chứng minh!"
                }
              ]
            },
            {
              type: "exercise",
              id: "exercise-2-1",
              title: "Exercise 2.1",
              titleVi: "Bài tập 2.1",
              blocks: [
                {
                  type: "paragraph",
                  text: "In a parlour game, the ‘magician’ asks one of the participants to think of a three-digit number abc10. Then the magician asks the participant to add the five numbers acb10, bac10, bca10, cab10, and cba10, and reveal their sum. Suppose the sum was 3194. What was abc10 originally?",
                  textVi: "Trong một trò chơi ảo thuật, 'nhà ảo thuật' yêu cầu một người chơi nghĩ ra một số có ba chữ số \\(abc_{10}\\). Sau đó yêu cầu người đó cộng 5 hoán vị còn lại là \\(acb_{10}, bac_{10}, bca_{10}, cab_{10}\\) và \\(cba_{10}\\) rồi đọc kết quả tổng. Giả sử tổng là 3194. Hỏi số ban đầu \\(abc_{10}\\) là số nào?"
                }
              ]
            },
            {
              type: "problem",
              id: "problem-2-2",
              title: "Problem 2.2 (Taylor 1989, p. 37)",
              titleVi: "Bài toán 2.2 (Taylor 1989)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Is there a power of 2 such that its digits could be rearranged and made into another power of 2? (No zeroes are allowed in the leading digit.)",
                  textVi: "Có tồn tại một lũy thừa của 2 nào mà các chữ số của nó có thể hoán vị lại để tạo thành một lũy thừa khác của 2 hay không? (Không cho phép chữ số 0 đứng đầu)."
                }
              ]
            },
            {
              type: "solution",
              id: "solution-2-2",
              title: "Proof",
              titleVi: "Chứng minh",
              blocks: [
                {
                  type: "paragraph",
                  text: "Proof. Suppose two powers of 2 are related by digit-switching. This means that they have the same number of digits, and also have the same digit-sum (mod 9). But the digit-sums (mod 9) are periodic with a period of 6: 1, 2, 4, 8, 7, 5, with no repetitions within any period, so the two powers are at least six steps apart (i.e. one is at least 2^6 = 64 times larger). But then it is impossible for them to have the same number of digits, a contradiction.",
                  textVi: "Chứng minh. Giả sử tồn tại hai lũy thừa của 2 là hoán vị chữ số của nhau. Khi đó chúng phải có cùng số lượng chữ số và cùng số dư khi chia cho 9 (vì hoán vị chữ số bảo toàn tổng các chữ số, do đó bảo toàn số dư mod 9). Tuy nhiên, dãy số dư của \\(2^n \\pmod 9\\) tuần hoàn chu kỳ 6: \\(1, 2, 4, 8, 7, 5\\) và không hề lặp lại trong một chu kỳ. Vì vậy, hai lũy thừa có cùng số dư mod 9 phải cách nhau ít nhất 6 bậc lũy thừa (tức là một số lớn hơn số kia ít nhất \\(2^6 = 64\\) lần). Nhưng khi gấp ít nhất 64 lần thì hai số không thể nào có cùng số lượng chữ số, mâu thuẫn! Vậy câu trả lời là KHÔNG."
                }
              ]
            }
          ]
        },
        {
          id: "chapter-2-section-2",
          title: "2.2 Diophantine equations",
          titleVi: "2.2 Phương trình Diophante",
          blocks: [
            {
              type: "problem",
              id: "problem-2-3",
              title: "Problem 2.3 (AMC 1987)",
              titleVi: "Bài toán 2.3 (AMC 1987)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Find all integers n such that the equation 1/a + 1/b = n/(a + b) is satisfied for some non-zero integer values of a and b (with a + b != 0).",
                  textVi: "Tìm tất cả các số nguyên n sao cho phương trình \\(1/a + 1/b = n/(a + b)\\) được thỏa mãn với các số nguyên a, b khác 0 nào đó (với \\(a + b \\neq 0\\))."
                }
              ]
            },
            {
              type: "solution",
              id: "solution-2-3",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Cross-multiplying gives (a + b)^2 = nab => a^2 + (2 - n)ab + b^2 = 0. Using the quadratic formula, the discriminant (n - 2)^2 - 4 must be a perfect square. Testing small values gives n = 4 (which works for a = b) and n = 0 (rejected since it requires a + b = 0). Thus n = 4.",
                  textVi: "Quy đồng và nhân chéo ta được \\((a + b)^2 = nab \\implies a^2 + (2 - n)ab + b^2 = 0\\). Coi đây là phương trình bậc hai đối với a, biệt thức \\(\\Delta = b^2[(n - 2)^2 - 4]\\) phải là một số chính phương. Do đó \\((n - 2)^2 - 4\\) phải là bình phương của một số nguyên. Hiệu của hai số chính phương bằng 4 chỉ xảy ra khi \\((n - 2)^2 = 4 \\implies n = 0\\) hoặc \\(n = 4\\). Trường hợp \\(n = 0\\) loại vì dẫn tới \\(a + b = 0\\). Trường hợp \\(n = 4\\) thỏa mãn với \\(a = b\\). Vậy đáp số là \\(n = 4\\)."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-2-4",
              title: "Problem 2.4 (Taylor 1989)",
              titleVi: "Bài toán 2.4 (Taylor 1989)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Find all solutions of 2^n + 7 = x^2 where n and x are integers.",
                  textVi: "Tìm tất cả các nghiệm nguyên của phương trình \\(2^n + 7 = x^2\\) với n và x là các số nguyên."
                }
              ]
            },
            {
              type: "solution",
              id: "solution-2-4",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Modulo 4: 2^n + 7 = x^2 (mod 4). If n > 1, 0 + 3 = x^2 (mod 4), impossible as squares are 0 or 1 mod 4. If n = 0, 1 + 7 = 8 != x^2. If n = 1, 2 + 7 = 9 = 3^2. Hence the only solutions are n = 1, x = +3 or -3.",
                  textVi: "Xét đồng dư modulo 4: \\(2^n + 7 \\equiv x^2 \\pmod 4\\). Nếu \\(n > 1\\), vế trái đồng dư \\(0 + 3 \\equiv 3 \\pmod 4\\), vô nghiệm vì số chính phương chỉ có thể đồng dư 0 hoặc 1 mod 4. Nếu \\(n = 0\\), \\(1 + 7 = 8\\) không phải số chính phương. Nếu \\(n = 1\\), ta có \\(2^1 + 7 = 9 = (\\pm 3)^2\\). Vậy phương trình có các nghiệm \\((n, x) = (1, 3)\\) và \\((1, -3)\\)."
                }
              ]
            }
          ]
        },
        {
          id: "chapter-2-section-3",
          title: "2.3 Sums of powers",
          titleVi: "2.3 Tổng các lũy thừa",
          blocks: [
            {
              type: "problem",
              id: "problem-2-5",
              title: "Problem 2.5 (Hajós et al. 1963)",
              titleVi: "Bài toán 2.5 (Hajós et al. 1963)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Prove that for any non-negative integer n, the number 1^n + 2^n + 3^n + 4^n is divisible by 5 if and only if n is not divisible by 4.",
                  textVi: "Chứng minh rằng với mọi số nguyên không âm n, số \\(1^n + 2^n + 3^n + 4^n\\) chia hết cho 5 khi và chỉ khi n không chia hết cho 4."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-2-6",
              title: "Problem 2.6 (Shklarsky et al. 1962) (**)",
              titleVi: "Bài toán 2.6 (Shklarsky et al. 1962) (**)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Let k, n be natural numbers with k odd. Prove that the sum 1^k + 2^k + ... + n^k is divisible by 1 + 2 + ... + n.",
                  textVi: "Cho k, n là các số tự nhiên với k lẻ. Chứng minh rằng tổng \\(1^k + 2^k + \\cdots + n^k\\) chia hết cho \\(1 + 2 + \\cdots + n\\)."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-2-7",
              title: "Problem 2.7 (Shklarsky et al. 1962)",
              titleVi: "Bài toán 2.7 (Shklarsky et al. 1962)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Let p be a prime number greater than 3. Show that the numerator of the (reduced) fraction 1/1 + 1/2 + 1/3 + ... + 1/(p - 1) is divisible by p^2.",
                  textVi: "Cho p là số nguyên tố lớn hơn 3. Chứng minh rằng tử số của phân số tối giản \\(1/1 + 1/2 + 1/3 + \\cdots + 1/(p - 1)\\) chia hết cho \\(p^2\\)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "chapter-3",
      number: 3,
      title: "Examples in algebra and analysis",
      titleVi: "Các ví dụ trong Đại số và Giải tích",
      pageRef: "35",
      sections: [
        {
          id: "chapter-3-intro",
          title: "Introduction to Algebra and Analysis",
          titleVi: "Mở đầu về Đại số và Giải tích",
          blocks: [
            {
              type: "quote",
              text: "One cannot escape the feeling ... that these mathematical formulae have an independent existence and an intelligence of their own ...",
              textVi: "Người ta không thể tránh khỏi cảm giác... rằng các công thức toán học này có một sự tồn tại độc lập và một trí tuệ của riêng chúng...",
              attribution: "Heinrich Hertz"
            },
            {
              type: "formula",
              latex: "1^3 + 2^3 + 3^3 + \\cdots + n^3 = (1 + 2 + 3 + \\cdots + n)^2."
            }
          ]
        },
        {
          id: "chapter-3-section-1",
          title: "3.1 Analysis of functions",
          titleVi: "3.1 Giải tích hàm số & Phương trình hàm",
          blocks: [
            {
              type: "problem",
              id: "problem-3-1",
              title: "Problem 3.1 (Greitzer 1978) (*)",
              titleVi: "Bài toán 3.1 (Greitzer 1978) (*)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Suppose f is a function mapping the positive integers to the positive integers, such that f satisfies f(n + 1) > f(f(n)) for all positive integers n. Show that f(n) = n for all positive integers n.",
                  textVi: "Giả sử f là hàm số ánh xạ từ tập các số nguyên dương vào tập các số nguyên dương, thỏa mãn \\(f(n + 1) > f(f(n))\\) với mọi số nguyên dương n. Chứng minh rằng \\(f(n) = n\\) với mọi n nguyên dương."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-3-2",
              title: "Problem 3.2 (AMC 1984)",
              titleVi: "Bài toán 3.2 (AMC 1984)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Suppose f is a function on the positive integers with properties: (a) f(2) = 2, (b) f(mn) = f(m)f(n), (c) f(m) > f(n) if m > n. Find f(1983).",
                  textVi: "Giả sử f là hàm số xác định trên tập các số nguyên dương thỏa mãn: (a) \\(f(2) = 2\\), (b) \\(f(mn) = f(m)f(n)\\) với mọi m, n, (c) \\(f(m) > f(n)\\) khi \\(m > n\\). Hãy tìm \\(f(1983)\\)."
                }
              ]
            },
            {
              type: "solution",
              id: "solution-3-2",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Using strong induction, f(n) = n for all positive integers. Therefore, f(1983) = 1983.",
                  textVi: "Sử dụng quy nạp mạnh kẹp giữa các lũy thừa của 2, ta chứng minh được \\(f(n) = n\\) với mọi số nguyên dương n. Do đó, \\(f(1983) = 1983\\)."
                }
              ]
            }
          ]
        },
        {
          id: "chapter-3-section-2",
          title: "3.2 Polynomials",
          titleVi: "3.2 Đa thức",
          blocks: [
            {
              type: "problem",
              id: "problem-3-3",
              title: "Problem 3.3 (AMC 1987)",
              titleVi: "Bài toán 3.3 (AMC 1987)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Let a, b, c be real numbers such that 1/a + 1/b + 1/c = 1/(a + b + c). Prove that 1/a^5 + 1/b^5 + 1/c^5 = 1/(a + b + c)^5.",
                  textVi: "Cho a, b, c là các số thực thỏa mãn \\(1/a + 1/b + 1/c = 1/(a + b + c)\\). Chứng minh rằng \\(1/a^5 + 1/b^5 + 1/c^5 = 1/(a + b + c)^5\\)."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-3-4",
              title: "Problem 3.4 (**)",
              titleVi: "Bài toán 3.4 (**)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Prove that any polynomial of the form f(x) = (x - a0)^2(x - a1)^2...(x - an)^2 + 1 cannot be factorized into two non-trivial polynomials with integer coefficients.",
                  textVi: "Chứng minh rằng đa thức có dạng \\(f(x) = (x - a_0)^2(x - a_1)^2 \\cdots (x - a_n)^2 + 1\\) (với các \\(a_i\\) là các số nguyên phân biệt) bất khả quy trên vành đa thức hệ số nguyên \\(\\mathbb{Z}[x]\\)."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
