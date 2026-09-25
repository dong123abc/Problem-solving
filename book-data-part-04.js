/**
 * Solving Mathematical Problems: A Personal Perspective
 * Author: Terence Tao
 * Source Data - Part 4: Chapter 6 (Sundry examples), References, and Index
 * Dual Language: English Original (text) & Vietnamese Translation (textVi)
 */

window.bookDataPart4 = {
  chapters: [
    {
      id: "chapter-6",
      number: 6,
      title: "Sundry examples",
      titleVi: "Các ví dụ hỗn hợp và Trò chơi toán học",
      pageRef: "83",
      sections: [
        {
          id: "chapter-6-intro",
          title: "Introduction and Game / Invariant Problems",
          titleVi: "Mở đầu và Các bài toán Bất biến / Trò chơi",
          blocks: [
            {
              type: "problem",
              id: "problem-6-1",
              title: "Problem 6.1 (Chameleon Island - Taylor 1989)",
              titleVi: "Bài toán 6.1 (Tắc kè hoa đổi màu - Taylor 1989)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Suppose on a certain island there are 13 grey, 15 brown, and 17 crimson chameleons. If two chameleons of different colour meet, they both change to the third colour. Is it possible for all chameleons to eventually be the same colour?",
                  textVi: "Giả sử trên một hòn đảo có 13 con tắc kè màu xám, 15 con màu nâu và 17 con màu đỏ thẫm. Mỗi khi hai con tắc kè khác màu gặp nhau, chúng đều cùng đổi sang màu thứ ba. Liệu có thể xảy ra trường hợp sau một thời gian, tất cả các con tắc kè trên đảo đều có cùng một màu hay không?"
                }
              ]
            },
            {
              type: "solution",
              id: "solution-6-1",
              title: "Analysis & Proof",
              titleVi: "Phân tích & Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Proof. Assign scores: grey = 0, brown = 1, crimson = 2 (mod 3). The total score modulo 3 is invariant: 13(0) + 15(1) + 17(2) = 49 = 1 (mod 3). However, any monochromatic state of 45 chameleons has total score 45(0) = 0, 45(1) = 0, or 45(2) = 0 (mod 3). Since 1 != 0 (mod 3), it is impossible for all chameleons to become the same colour.",
                  textVi: "Chứng minh (Sử dụng Đại lượng bất biến Modulo 3). Gán điểm cho mỗi màu tắc kè: Xám = 0, Nâu = 1, Đỏ thẫm = 2. Mỗi lần hai con khác màu gặp nhau và đổi sang màu thứ ba, tổng điểm của toàn bộ đàn tắc kè theo modulo 3 không hề thay đổi. Tổng điểm ban đầu: \\(13 \\times 0 + 15 \\times 1 + 17 \\times 2 = 49 \\equiv 1 \\pmod 3\\). Để toàn bộ 45 con tắc kè có cùng một màu, tổng điểm phải là \\(45 \\times 0 = 0\\), \\(45 \\times 1 = 45 \\equiv 0\\), hoặc \\(45 \\times 2 = 90 \\equiv 0 \\pmod 3\\). Vì \\(1 \\not\\equiv 0 \\pmod 3\\), điều này không bao giờ xảy ra. Đáp án là KHÔNG THỂ."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-6-2",
              title: "Problem 6.2 (Exam Marks - Alice, Betty, Carol) (*)",
              titleVi: "Bài toán 6.2 (Điểm thi của Alice, Betty, Carol) (*)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Alice, Betty, and Carol took exams. Marks were x > y > z positive integers. Alice scored 20, Betty 10, Carol 9. If Betty was 1st in Algebra, who was 2nd in Geometry?",
                  textVi: "Alice, Betty và Carol tham dự cùng một đợt thi gồm một số môn. Trong mỗi môn, điểm số của 3 người lần lượt là x, y, z với x > y > z là các số nguyên dương. Sau tất cả các bài thi, Alice đạt tổng điểm 20, Betty đạt 10, Carol đạt 9. Biết Betty xếp thứ nhất môn Đại số, hỏi ai là người xếp thứ nhì môn Hình học?"
                }
              ]
            },
            {
              type: "solution",
              id: "solution-6-2",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Total score is 20 + 10 + 9 = 39 = N(x + y + z). Since x + y + z >= 6, N = 3 exams and x + y + z = 13. Alice scored 20 = 2x + y. The unique integer solution is x = 8, y = 4, z = 1. In Geometry, Alice was 1st (8), Carol was 2nd (4), Betty was 3rd (1). Carol was placed second in Geometry.",
                  textVi: "Tổng điểm của 3 bạn qua tất cả các bài thi là \\(20 + 10 + 9 = 39 = N(x + y + z)\\) (với N là số bài thi). Vì \\(x > y > z \\ge 1\\) nên \\(x + y + z \\ge 3 + 2 + 1 = 6\\). Ước số phù hợp duy nhất của 39 là \\(N = 3\\) môn thi và \\(x + y + z = 13\\). Alice đạt 20 điểm thì chỉ có thể gồm hai điểm x và một điểm y (\\(2x + y = 20\\)). Kết hợp với \\(x + y + z = 13\\) và \\(x \\le 8\\) (vì Betty đạt 10 điểm và có 1 điểm x), ta tìm được duy nhất: \\(x = 8, y = 4, z = 1\\). Trong môn Hình học, Alice đạt 8 điểm (nhất), Carol đạt 4 điểm (nhì), Betty đạt 1 điểm (ba). Đáp án: Carol xếp thứ nhì môn Hình học."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-6-3",
              title: "Problem 6.3 (Chocolate-Breaking Game)",
              titleVi: "Bài toán 6.3 (Trò chơi bẻ thanh sô-cô-la)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Two people play with a 6 x 10 chocolate bar. Players take turns breaking off a part along the grooves and eating it. The last to move (leaving a 1 x 1 piece) wins. Who has a winning strategy?",
                  textVi: "Hai người chơi bẻ một thanh sô-cô-la gồm 60 ô vuông kích thước 6 x 10. Lần lượt từng người bẻ đi một phần theo rãnh phân chia và bỏ phần bẻ đi. Người bẻ nước cuối cùng để lại ô 1 x 1 là người chiến thắng. Ai là người có chiến thuật chắc chắn thắng?"
                }
              ]
            },
            {
              type: "solution",
              id: "solution-6-3",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "The first player has a winning strategy: initially break the 6 x 10 bar to leave a 6 x 6 square, and always convert any move back to a square (n x n), eventually leaving 1 x 1 to win.",
                  textVi: "Người đi đầu tiên có chiến thuật luôn thắng: Ở nước đầu tiên, bẻ thanh 6 x 10 thành hình vuông 6 x 6 (vị trí thua cho đối thủ). Sau đó bất kể người thứ hai bẻ thế nào, người thứ nhất luôn bẻ lại thành hình vuông \\(n \\times n\\), cuối cùng buộc người thứ hai phải nhận ô 1 x 1 và thua cuộc."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-6-4",
              title: "Problem 6.4 (Brothers Selling Sheep and the Penknife)",
              titleVi: "Bài toán 6.4 (Hai anh em bán cừu và chiếc dao găm)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Two brothers sold s sheep for s rubles each, totaling s^2 rubles. They took turns taking 10-ruble packs. The younger brother was shortchanged at the end and received a penknife to make it fair. How much was the penknife worth?",
                  textVi: "Hai anh em bán một đàn gồm s con cừu, mỗi con có giá s rúp, tổng thu về là \\(s^2\\) rúp. Họ chia tiền bằng cách lần lượt người anh lấy 10 rúp, rồi người em lấy 10 rúp, rồi người anh lấy 10 rúp... Đến lượt cuối cùng, số tiền còn lại ít hơn 10 rúp nên người em lấy toàn bộ phần còn lại đó. Để chia đều công bằng, người anh đưa cho người em chiếc dao găm có giá tiền nguyên rúp. Hỏi chiếc dao găm có giá bao nhiêu rúp?"
                }
              ]
            },
            {
              type: "solution",
              id: "solution-6-4",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Total revenue is s^2 = 10(2n + 1) + a with 0 < a < 10. To equalize: 10 - p = a + p => a = 10 - 2p => s^2 = 20(n + 1) - 2p. Modulo 20, squares can only be 0, 1, 4, 5, 9, 16. Thus -2p = 16 (mod 20) => p = 2 rubles.",
                  textVi: "Tổng số tiền là \\(s^2 = 10(2n + 1) + a\\) (với số cọc 10 rúp là số lẻ \\(2n + 1\\) và phần dư \\(0 < a < 10\\)). Để công bằng, nếu giá dao găm là p thì \\(10 - p = a + p \\implies a = 10 - 2p\\). Suy ra \\(s^2 = 20(n + 1) - 2p \\implies s^2 \\equiv -2p \\pmod{20}\\). Các số chính phương theo modulo 20 chỉ có thể nhận giá trị trong tập \\(\\{0, 1, 4, 5, 9, 16\\}\\). Vì \\(2p\\) chẵn và \\(0 < p < 5\\) (do \\(0 < a < 10\\)), ta có \\(-2p \\equiv 16 \\pmod{20} \\implies p = 2\\). Chiếc dao găm có giá đúng 2 rúp."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  references: [
    {
      id: "ref-amoc",
      citation: "AMOC (Australian Mathematical Olympiad Committee) Correspondence Programme (1986–1987), Set 1 questions."
    },
    {
      id: "ref-amc-1984",
      citation: "Australian Mathematics Competition (1984), Mathematical Olympiads: The 1984 Australian Scene, Canberra College of Advanced Education, Belconnen, ACT."
    },
    {
      id: "ref-amc-1987",
      citation: "Australian Mathematics Competition (1987), Mathematical Olympiads: The 1987 Australian Scene, Canberra College of Advanced Education, Belconnen, ACT."
    },
    {
      id: "ref-borchardt",
      citation: "Borchardt, W.G. (1961), A Sound Course in Mechanics, Rivingston, London."
    },
    {
      id: "ref-greitzer",
      citation: "Greitzer, S.L. (1978), International Mathematical Olympiads 1959–1977 (New Mathematical Library 27), Mathematical Association of America, Washington, DC."
    },
    {
      id: "ref-hajos",
      citation: "Hajós, G., Neukomm, G., and Surányi, J. (eds) (1963), Hungarian Problem Book I, based on the Eötvös Competitions 1894–1905, (New Mathematical Library 11), orig. comp. J. Kürschák, tr. E. Rapaport, Mathematical Association of America, Washington, DC."
    },
    {
      id: "ref-hardy",
      citation: "Hardy, G.A. (1975), A course of Pure Mathematics, 10th eds., Cambridge University Press, Cambridge."
    },
    {
      id: "ref-polya",
      citation: "Polya, G. (1957), How to solve it, 2nd ed, Princeton University, Princeton."
    },
    {
      id: "ref-shklarsky",
      citation: "Shklarsky, D.O., Chentzov, N.N., and Yaglom, I.M. (1962), The USSR Olympiad Problem Book: Selected Problems and Theorems of Elementary Mathematics, revd. and ed. I. Sussmar, tr. J. Maykovich, W.H. Freeman and Company, San Francisco, CA."
    },
    {
      id: "ref-taylor",
      citation: "Taylor, P.J. (1989), International Mathematics: Tournament of the Towns, Questions, and Solutions, Tournaments 6 to 10 (1984 to 1988), Australian Mathematics Foundation Ltd, Belconnen, ACT."
    },
    {
      id: "ref-thomas",
      citation: "Thomas, G.B. and Finney, R.L. (1988), Calculus and Analytic Geometry, Addison-Wesley, Reading, MA."
    }
  ],
  index: [
    { term: "2, powers of (Lũy thừa của 2)", page: "14–18", link: "chapter-2-section-1" },
    { term: "9, multiples of (Bội số của 9)", page: "9, 11–13", link: "chapter-2-section-1" },
    { term: "18, multiples of (Bội số của 18)", page: "12–13", link: "chapter-2-section-1" },
    { term: "algebra (Đại số)", page: "35", link: "chapter-3-intro" },
    { term: "examination marks problem (Bài toán điểm thi)", page: "86–9", link: "problem-6-2" },
    { term: "polynomials (Đa thức)", page: "41–7", link: "chapter-3-section-2" },
    { term: "analysis of functions (Giải tích hàm)", page: "36–40", link: "chapter-3-section-1" },
    { term: "analytic geometry (Hình học giải tích)", page: "69", link: "chapter-5-intro" },
    { term: "line segments (Đoạn thẳng)", page: "77–9", link: "problem-5-3" },
    { term: "partitioning of rectangles (Phân chia hình chữ nhật)", page: "74–7", link: "problem-5-2" },
    { term: "square swimming pool problem (Bài toán hồ bơi)", page: "79–82", link: "problem-5-4" },
    { term: "vector arithmetic (Hình học vector)", page: "69–74", link: "chapter-5-intro" },
    { term: "angles in circles (Góc trong đường tròn)", page: "50–1", link: "chapter-4-intro" },
    { term: "angles notation (Ký hiệu góc)", page: "3, 51", link: "chapter-1-section-1" },
    { term: "proof of equality (Chứng minh bằng nhau)", page: "58, 66–8", link: "problem-4-6" },
    { term: "angles of triangles (Góc tam giác)", page: "50–4", link: "chapter-4-intro" },
    { term: "anti-symmetry (Phản đối xứng)", page: "25, 26, 30", link: "chapter-2-section-3" },
    { term: "areas of triangles (Diện tích tam giác)", page: "58", link: "chapter-1-section-1" },
    { term: "arithmetic progression, lengths of triangle (Cấp số cộng)", page: "1, 2–7", link: "problem-1-1" },
    { term: "Bernoulli polynomials (Đa thức Bernoulli)", page: "24", link: "problem-2-6" },
    { term: "chains, partitioning of rectangle (Chuỗi khối)", page: "76–7", link: "problem-5-2" },
    { term: "chameleon colour combinations (Tắc kè hoa đổi màu)", page: "83–5", link: "problem-6-1" },
    { term: "chessboard problem (Bàn cờ vua)", page: "84", link: "chapter-6-intro" },
    { term: "chocolate-breaking game (Trò chơi bẻ sô-cô-la)", page: "90–3", link: "problem-6-3" },
    { term: "circle theorems (Định lý đường tròn)", page: "49–50, 57, 67", link: "chapter-4-intro" },
    { term: "concurrence, perpendicular bisectors (Đồng quy trung trực)", page: "ix", link: "preface-first-edition" },
    { term: "constructions (Dựng hình)", page: "58–61", link: "problem-4-4" },
    { term: "contradiction, proof by (Chứng minh phản chứng)", page: "65–6, 76–7", link: "problem-4-5" },
    { term: "coordinate geometry (Hình học tọa độ)", page: "55, 58", link: "chapter-4-intro" },
    { term: "coprime numbers (Số nguyên tố cùng nhau)", page: "10", link: "chapter-2-intro" },
    { term: "cosine rule (Định lý cosin)", page: "3, 53", link: "chapter-1-section-1" },
    { term: "cubes, sum of (Tổng các lập phương)", page: "35", link: "chapter-3-intro" },
    { term: "digits rearrangement and sums (Chữ số và hoán vị)", page: "10–19", link: "chapter-2-section-1" },
    { term: "Diophantine equations (Phương trình Diophante)", page: "19–22", link: "chapter-2-section-2" },
    { term: "divisibility, sums of powers (Tính chia hết)", page: "23–26", link: "chapter-2-section-3" },
    { term: "divisibility, sums of reciprocals (Tổng phân số nghịch đảo)", page: "27–33", link: "problem-2-7" },
    { term: "division system, price of penknife (Chiếc dao găm)", page: "95–7", link: "problem-6-4" },
    { term: "elegance of solutions (Vẻ đẹp thanh lịch của lời giải)", page: "ix", link: "preface-first-edition" },
    { term: "equilateral triangles, construction (Dựng tam giác đều)", page: "58–60", link: "problem-4-4" },
    { term: "Euclidean geometry (Hình học Euclid)", page: "49–50", link: "chapter-4-intro" },
    { term: "Heron’s formula (Công thức Heron)", page: "3, 4, 6–7", link: "chapter-1-section-1" },
    { term: "induction, proof by (Chứng minh quy nạp)", page: "37–8, 40, 92", link: "chapter-3-section-1" },
    { term: "modular arithmetic (Số học đồng dư)", page: "9, 10, 17–18, 21–2, 28–33, 85, 96", link: "chapter-2-intro" },
    { term: "power of a point (Phương tích điểm)", page: "57", link: "problem-4-3" },
    { term: "prime numbers (Số nguyên tố)", page: "10", link: "chapter-2-intro" },
    { term: "sine rule (Định lý sin)", page: "3, 53, 54", link: "problem-4-2" },
    { term: "Thales’ theorem (Định lý Thales)", page: "49–50, 57, 67", link: "chapter-4-intro" },
    { term: "Wilson’s theorem (Định lý Wilson)", page: "9", link: "chapter-2-intro" }
  ]
};
