/**
 * Solving Mathematical Problems: A Personal Perspective
 * Author: Terence Tao
 * Source Data - Part 3: Chapter 4 and Chapter 5
 * Dual Language: English Original (text) & Vietnamese Translation (textVi)
 */

window.bookDataPart3 = {
  chapters: [
    {
      id: "chapter-4",
      number: 4,
      title: "Euclidean geometry",
      titleVi: "Hình học Euclid",
      pageRef: "49",
      sections: [
        {
          id: "chapter-4-intro",
          title: "Introduction and Thales’ Theorem",
          titleVi: "Mở đầu và Định lý Thales",
          blocks: [
            {
              type: "quote",
              text: "Archimedes will be remembered when Aeschylus is forgotten, because languages die and mathematical ideas do not.",
              textVi: "Archimedes sẽ luôn được ghi nhớ ngay cả khi Aeschylus đã bị quên lãng, bởi vì các ngôn ngữ sẽ tàn lụi nhưng các tư tưởng toán học thì bất tử.",
              attribution: "G.H. Hardy, ‘A Mathematicians Apology’"
            },
            {
              type: "heading",
              level: 4,
              text: "Theorem 4.1 (Thales’ theorem)",
              textVi: "Định lý 4.1 (Định lý Thales về góc nội tiếp chắn nửa đường tròn)"
            },
            {
              type: "paragraph",
              text: "The angle subtended by a diameter is a right angle. In other words, in the diagram below, we have ∠APB = 90°.",
              textVi: "Góc nội tiếp chắn một đường kính là một góc vuông. Nói cách khác, trong hình dưới đây, ta có \\(\\angle APB = 90^\\circ\\)."
            },
            {
              type: "diagram",
              caption: "Thales’ theorem: angle APB = 90° (Định lý Thales: góc APB = 90 độ)",
              svg: `<svg viewBox="0 0 320 220" class="mx-auto max-w-xs w-full text-slate-800 dark:text-slate-200" stroke="currentColor" fill="none" stroke-width="1.5">
                <circle cx="160" cy="110" r="90" stroke-width="1.5"/>
                <line x1="70" y1="110" x2="250" y2="110" stroke-width="2"/>
                <line x1="70" y1="110" x2="190" y2="25"/>
                <line x1="250" y1="110" x2="190" y2="25"/>
                <line x1="160" y1="110" x2="190" y2="25" stroke-dasharray="3 3"/>
                <circle cx="160" cy="110" r="2.5" fill="currentColor"/>
                <circle cx="190" cy="25" r="2.5" fill="currentColor"/>
                <text x="60" y="115" fill="currentColor" stroke="none" class="text-xs font-serif italic">A</text>
                <text x="260" y="115" fill="currentColor" stroke="none" class="text-xs font-serif italic">B</text>
                <text x="160" y="125" fill="currentColor" stroke="none" class="text-xs font-serif italic">O</text>
                <text x="195" y="20" fill="currentColor" stroke="none" class="text-xs font-serif italic">P</text>
              </svg>`
            }
          ]
        },
        {
          id: "chapter-4-section-1",
          title: "Problems on Triangles and Circles",
          titleVi: "Các bài toán về Tam giác và Đường tròn",
          blocks: [
            {
              type: "problem",
              id: "problem-4-1",
              title: "Problem 4.1 (AMC 1987)",
              titleVi: "Bài toán 4.1 (AMC 1987)",
              blocks: [
                {
                  type: "paragraph",
                  text: "ABC is a triangle that is inscribed in a circle. The angle bisectors of A, B, C meet the circle at D, E, F, respectively. Show that AD is perpendicular to EF.",
                  textVi: "Tam giác ABC nội tiếp trong một đường tròn. Các đường phân giác của các góc A, B, C lần lượt cắt đường tròn tại D, E, F. Chứng minh rằng AD vuông góc với EF."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-4-2",
              title: "Problem 4.2 (Taylor 1989)",
              titleVi: "Bài toán 4.2 (Taylor 1989)",
              blocks: [
                {
                  type: "paragraph",
                  text: "In triangle BAC the bisector of B meets AC at D; bisector of C meets AB at E. These meet at O. If |OD| = |OE|, prove that ∠BAC = 60° or BAC is isosceles.",
                  textVi: "Trong tam giác BAC, phân giác góc B cắt AC tại D; phân giác góc C cắt AB tại E. Hai phân giác này cắt nhau tại O. Nếu \\(|OD| = |OE|\\), chứng minh rằng \\(\\angle BAC = 60^\\circ\\) hoặc tam giác BAC là tam giác cân."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-4-4",
              title: "Problem 4.4 (Equilateral Triangle Construction)",
              titleVi: "Bài toán 4.4 (Dựng tam giác đều giữa 3 đường song song)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Given three parallel lines, construct (with straightedge and compass) an equilateral triangle with each parallel line containing one of the vertices of the triangle.",
                  textVi: "Cho ba đường thẳng song song phân biệt. Bằng thước thẳng và compa, hãy dựng một tam giác đều sao cho mỗi đường thẳng song song chứa đúng một đỉnh của tam giác."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-4-5",
              title: "Problem 4.5 (Taylor 1989)",
              titleVi: "Bài toán 4.5 (Phân chia hình vuông thành 5 hình chữ nhật)",
              blocks: [
                {
                  type: "paragraph",
                  text: "A square is divided into five rectangles. The four outer rectangles R1, R2, R3, R4 all have the same area. Prove that the inner rectangle R0 is a square.",
                  textVi: "Một hình vuông lớn được chia thành 5 hình chữ nhật. Bốn hình chữ nhật bên ngoài R1, R2, R3, R4 đều có diện tích bằng nhau. Chứng minh rằng hình chữ nhật ở giữa R0 là một hình vuông."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "chapter-5",
      number: 5,
      title: "Analytic geometry",
      titleVi: "Hình học giải tích",
      pageRef: "69",
      sections: [
        {
          id: "chapter-5-intro",
          title: "Introduction and Vector Geometry",
          titleVi: "Mở đầu và Phương pháp Vector",
          blocks: [
            {
              type: "quote",
              text: "The geometrical mind is not so closely bound to geometry that it cannot be drawn aside and transferred to other departments of knowledge...",
              textVi: "Tư duy hình học không bị bó hẹp cứng nhắc trong hình học đến mức không thể áp dụng và lan tỏa sang các lĩnh vực tri thức khác...",
              attribution: "Bernard le Bovier de Fontenelle, 1729"
            },
            {
              type: "problem",
              id: "problem-5-1",
              title: "Problem 5.1 (AMC 1987)",
              titleVi: "Bài toán 5.1 (AMC 1987)",
              blocks: [
                {
                  type: "paragraph",
                  text: "A regular polygon with n vertices is inscribed in a circle of radius 1. Let L be the set of all possible distinct lengths of all line segments joining the vertices of the polygon. What is the sum of the squares of the elements of L?",
                  textVi: "Một đa giác đều n đỉnh nội tiếp trong đường tròn bán kính 1. Gọi L là tập hợp tất cả các độ dài phân biệt có thể có của các đoạn thẳng nối hai đỉnh bất kỳ của đa giác. Tính tổng bình phương các phần tử của L."
                }
              ]
            },
            {
              type: "solution",
              id: "solution-5-1",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "If n is odd, X = n. If n is even, X = n + 2.",
                  textVi: "Bằng phương pháp vector và đối xứng quay \\(360^\\circ/n\\), ta chứng minh được: Nếu n lẻ thì \\(X = n\\); nếu n chẵn thì \\(X = n + 2\\)."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-5-2",
              title: "Problem 5.2 (*)",
              titleVi: "Bài toán 5.2 (*)",
              blocks: [
                {
                  type: "paragraph",
                  text: "A rectangle is partitioned into several smaller rectangles. Each of the smaller rectangles has at least one side of integer length. Prove that the big rectangle has at least one side of integer length.",
                  textVi: "Một hình chữ nhật lớn được phân chia thành nhiều hình chữ nhật nhỏ hơn. Mỗi hình chữ nhật nhỏ đều có ít nhất một cạnh có độ dài nguyên. Chứng minh rằng hình chữ nhật lớn cũng có ít nhất một cạnh có độ dài nguyên."
                }
              ]
            },
            {
              type: "problem",
              id: "problem-5-4",
              title: "Problem 5.4 (Boy and Teacher in Swimming Pool)",
              titleVi: "Bài toán 5.4 (Cậu bé và Thầy giáo trong hồ bơi)",
              blocks: [
                {
                  type: "paragraph",
                  text: "In the centre of a square swimming pool is a boy, while his teacher is at one corner. The teacher runs 3 times faster than the boy swims, but the boy runs faster than the teacher. Can the boy escape from the teacher?",
                  textVi: "Ở chính giữa một bể bơi hình vuông có một cậu bé, trong khi thầy giáo (không biết bơi) đang đứng ở một góc bể bơi. Thầy giáo chạy nhanh gấp 3 lần tốc độ bơi của cậu bé, nhưng khi lên bờ cậu bé lại chạy nhanh hơn thầy giáo. Cậu bé có thể thoát khỏi thầy giáo hay không?"
                }
              ]
            },
            {
              type: "solution",
              id: "solution-5-4",
              title: "Solution",
              titleVi: "Lời giải",
              blocks: [
                {
                  type: "paragraph",
                  text: "Yes, the boy can escape by threatening to swim towards midpoint M of an adjacent side, forcing the teacher to run to that side, and then suddenly turning towards the opposite edge.",
                  textVi: "Có, cậu bé hoàn toàn có thể trốn thoát bằng chiến thuật nghi binh: bơi hết tốc lực hướng về trung điểm M của cạnh đối diện góc của thầy giáo, ép thầy giáo phải chạy hết tốc lực về phía đó, sau đó đột ngột đổi hướng bơi thẳng về mép bờ vuông góc đối diện. Khi đó thầy giáo bị kẹt ở quá xa và không thể đuổi kịp."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
