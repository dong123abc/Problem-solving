/**
 * Solving Mathematical Problems: A Personal Perspective
 * Author: Terence Tao
 * Master Book Data Combiner (Bilingual Edition)
 */

(function() {
  const p1 = window.bookDataPart1 || {};
  const p2 = window.bookDataPart2 || { chapters: [] };
  const p3 = window.bookDataPart3 || { chapters: [] };
  const p4 = window.bookDataPart4 || { chapters: [], references: [], index: [] };

  const allChapters = [
    ...(p1.chapters || []),
    ...(p2.chapters || []),
    ...(p3.chapters || []),
    ...(p4.chapters || [])
  ];

  window.bookData = {
    title: p1.title || "Solving Mathematical Problems: A Personal Perspective",
    titleVi: p1.titleVi || "Giải các bài toán: Một góc nhìn cá nhân",
    author: p1.author || "Terence Tao",
    authorVi: p1.authorVi || "Terence Đào (Terence Tao)",
    affiliation: p1.affiliation || "Department of Mathematics, UCLA, Los Angeles, CA 90095",
    affiliationVi: p1.affiliationVi || "Khoa Toán học, Đại học California tại Los Angeles (UCLA)",
    publisher: p1.publisher || "Oxford University Press, 2006",
    edition: p1.edition || "Second Edition (2006)",
    isbn: p1.isbn || "ISBN 0-19-920561-2",
    coverImage: p1.coverImage || "/src/assets/images/book_cover_tao_1790313174825.jpg",
    dedication: p1.dedication || "Dedicated to all my mentors, who taught me the meaning (and joy) of mathematics.",
    dedicationVi: p1.dedicationVi || "Kính tặng tất cả những người thầy của tôi, những người đã dạy tôi ý nghĩa (và niềm vui) của toán học.",
    frontMatter: p1.frontMatter || [],
    chapters: allChapters,
    appendices: p4.appendices || [],
    references: p4.references || [],
    index: p4.index || []
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.bookData;
  }
})();
