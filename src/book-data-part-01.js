/**
 * Solving Mathematical Problems: A Personal Perspective
 * Author: Terence Tao
 * Source Data - Part 1: Front Matter, Prefaces, and Chapter 1
 * Dual Language: English Original (text) & Vietnamese Translation (textVi)
 */

window.bookDataPart1 = {
  title: "Solving Mathematical Problems: A Personal Perspective",
  titleVi: "Giải các bài toán: Một góc nhìn cá nhân",
  author: "Terence Tao",
  authorVi: "Terence Đào (Terence Tao)",
  affiliation: "Department of Mathematics, UCLA, Los Angeles, CA 90095",
  affiliationVi: "Khoa Toán học, Đại học California tại Los Angeles (UCLA)",
  publisher: "Oxford University Press",
  edition: "Second Edition (2006)",
  isbn: "ISBN 0-19-920561-2 / 978-0-19-920561-5 (Hbk), ISBN 0-19-920560-4 / 978-0-19-920560-8 (Pbk.)",
  coverImage: "/src/assets/images/book_cover_tao_1790313174825.jpg",
  dedication: "Dedicated to all my mentors, who taught me the meaning (and joy) of mathematics.",
  dedicationVi: "Kính tặng tất cả những người thầy của tôi, những người đã dạy tôi ý nghĩa (và niềm vui) của toán học.",
  frontMatter: [
    {
      id: "preface-first-edition",
      title: "Preface to the first edition",
      titleVi: "Lời nói đầu cho ấn bản thứ nhất",
      pageRef: "viii",
      blocks: [
        {
          type: "quote",
          text: "Proclus, an ancient Greek philosopher, said:\nThis therefore, is mathematics: she reminds you of the invisible forms of the soul; she gives life to her own discoveries; she awakens the mind and purifies the intellect; she brings to light our intrinsic ideas; she abolishes oblivion and ignorance which are ours by birth ...",
          textVi: "Triết gia Hy Lạp cổ đại Proclus từng nói:\nĐây chính là toán học: nàng nhắc nhở bạn về những hình tướng vô hình của tâm hồn; nàng thổi sức sống vào những khám phá của chính nàng; nàng đánh thức tâm trí và thanh lọc trí tuệ; nàng soi sáng những ý niệm nội tại của chúng ta; nàng xua tan sự lãng quên và ngu muội vốn có từ lúc chúng ta sinh ra...",
          attribution: "Proclus"
        },
        {
          type: "paragraph",
          text: "But I just like mathematics because it is fun.",
          textVi: "Nhưng tôi chỉ đơn giản thích toán học vì nó rất thú vị."
        },
        {
          type: "paragraph",
          text: "Mathematical problems, or puzzles, are important to real mathematics (like solving real-life problems), just as fables, stories, and anecdotes are important to the young in understanding real life. Mathematical problems are ‘sanitized’ mathematics, where an elegant solution has already been found (by someone else, of course), the question is stripped of all superfluousness and posed in an interesting and (hopefully) thought-provoking way. If mathematics is likened to prospecting for gold, solving a good mathematical problem is akin to a ‘hide-and-seek’ course in gold-prospecting: you are given a nugget to find, and you know what it looks like, that it is out there somewhere, that it is not too hard to reach, that it is unearthing within your capabilities, and you have conveniently been given the right equipment (i.e. data) to get it. It may be hidden in a cunning place, but it will require ingenuity rather than digging to reach it.",
          textVi: "Các bài toán, hay những câu đố toán học, có vai trò quan trọng đối với toán học thực sự (như việc giải quyết các vấn đề trong đời thực), giống như truyện ngụ ngôn, truyện kể và giai thoại rất quan trọng giúp trẻ em thấu hiểu cuộc sống. Các bài toán thi là một thứ toán học đã được 'tinh lọc', nơi một lời giải thanh lịch đã được tìm ra sẵn (tất nhiên là bởi người khác), câu hỏi đã được lược bỏ mọi chi tiết thừa thãi và được đặt ra một cách lôi cuốn, khơi gợi suy nghĩ. Nếu toán học được ví như công việc đãi vàng, thì việc giải một bài toán hay cũng giống như một khóa huấn luyện 'trốn tìm' đãi vàng: bạn được biết trước hình dáng thỏi vàng cần tìm, biết nó nằm ở đâu đó ngoài kia, không quá xa tầm với, hoàn toàn có thể đào được bằng năng lực của bạn, và bạn đã được trang bị đầy đủ dụng cụ (tức là dữ liệu bài toán) để tìm thấy nó. Nó có thể ẩn giấu ở một nơi kín đáo, nhưng đòi hỏi sự khéo léo và trí tuệ thay vì chỉ dùng sức đào bới."
        },
        {
          type: "paragraph",
          text: "In this book I shall solve selected problems from various levels and branches of mathematics. Starred problems (*) indicate an additional level of difficulty, either because some higher mathematics or some clever thinking are required; double-starred questions (**) are similar, but to a greater degree. Some problems have additional exercises at the end that can be solved in a similar manner or involve a similar piece of mathematics.",
          textVi: "Trong cuốn sách này, tôi sẽ giải các bài toán chọn lọc từ nhiều cấp độ và phân ngành toán học khác nhau. Các bài toán có dấu sao (*) biểu thị mức độ khó cao hơn, đòi hỏi kiến thức toán cao cấp hơn hoặc tư duy sắc bén hơn; các bài có hai dấu sao (**) cũng tương tự nhưng ở mức độ cao hơn nữa. Một số bài toán có các bài tập bổ sung ở cuối có thể được giải theo cách tương tự hoặc liên quan đến một phần toán học tương đương."
        },
        {
          type: "paragraph",
          text: "While solving these problems, I will try to demonstrate some tricks of the trade when problem-solving. Two of the main weapons—experience and knowledge—are not easy to put into a book: they have to be acquired over time. But there are many simpler tricks that take less time to learn. There are ways of looking at a problem that make it easier to find a feasible attack plan. There are systematic ways of reducing a problem into successively simpler sub-problems. But, on the other hand, solving the problem is not everything. To return to the gold nugget analogy, strip-mining the neighbourhood with bulldozers is clumsier than doing a careful survey, a bit of geology, and a small amount of digging. A solution should be relatively short, understandable, and hopefully have a touch of elegance. It should also be fun to discover. Transforming a nice, short little geometry question into a ravening monster of an equation by textbook coordinate geometry does not have the same taste of victory as a two-line vector solution.",
          textVi: "Khi giải các bài toán này, tôi sẽ cố gắng trình bày một số 'ngón nghề' khi tư duy giải toán. Hai thứ vũ khí chính—kinh nghiệm và kiến thức—thực sự rất khó đưa trọn vẹn vào một cuốn sách: chúng phải được tích lũy theo thời gian. Nhưng có rất nhiều mẹo đơn giản hơn chỉ mất ít thời gian để học. Có những góc nhìn bài toán giúp việc tìm ra kế hoạch tiếp cận khả thi trở nên dễ dàng hơn. Có những cách có hệ thống để quy giản một bài toán lớn thành các bài toán con đơn giản hơn nối tiếp nhau. Nhưng mặt khác, giải ra bài toán chưa phải là tất cả. Quay lại phép ẩn dụ thỏi vàng: cày xới cả khu vực bằng máy ủi thì vụng về hơn nhiều so với việc khảo sát cẩn thận, hiểu biết địa chất và đào đúng chỗ. Một lời giải nên tương đối ngắn gọn, dễ hiểu và hy vọng là mang nét thanh lịch. Nó cũng phải mang lại niềm vui khi khám phá. Biến một câu hỏi hình học ngắn gọn xinh xắn thành một 'quái vật phương trình' cồng kềnh bằng phương pháp tọa độ sách giáo khoa sẽ không thể mang lại cảm giác chiến thắng trọn vẹn như một lời giải bằng vector chỉ vỏn vẹn hai dòng."
        },
        {
          type: "paragraph",
          text: "As an example of elegance, here is a standard result in Euclidean geometry:",
          textVi: "Như một ví dụ về vẻ đẹp thanh lịch, đây là một kết quả kinh điển trong hình học Euclid:"
        },
        {
          type: "problem",
          id: "preface-example-1",
          title: "Standard Result",
          titleVi: "Kết quả kinh điển",
          blocks: [
            {
              type: "paragraph",
              text: "Show that the perpendicular bisectors of a triangle are concurrent.",
              textVi: "Chứng minh rằng ba đường trung trực của một tam giác đồng quy."
            }
          ]
        },
        {
          type: "paragraph",
          text: "This neat little one-liner could be attacked by coordinate geometry. Try to do so for a few minutes (hours?), then look at this solution:",
          textVi: "Phát biểu một dòng ngắn gọn này có thể bị tấn công bằng hình học giải tích tọa độ. Hãy thử làm theo hướng đó trong vài phút (hay vài giờ?), rồi hãy xem lời giải sau:"
        },
        {
          type: "diagram",
          caption: "Perpendicular bisectors of triangle ABC intersecting at P (Ba đường trung trực tam giác ABC cắt nhau tại P)",
          svg: `<svg viewBox="0 0 320 220" class="mx-auto max-w-xs w-full text-slate-800 dark:text-slate-200" stroke="currentColor" fill="none" stroke-width="1.5">
            <polygon points="160,30 40,180 280,180" class="stroke-slate-800 dark:stroke-slate-200" fill="none" stroke-width="2"/>
            <text x="160" y="20" text-anchor="middle" fill="currentColor" stroke="none" class="text-xs font-serif italic">C</text>
            <text x="25" y="190" text-anchor="middle" fill="currentColor" stroke="none" class="text-xs font-serif italic">A</text>
            <text x="295" y="190" text-anchor="middle" fill="currentColor" stroke="none" class="text-xs font-serif italic">B</text>
            <circle cx="160" cy="140" r="3" fill="currentColor"/>
            <text x="175" y="140" text-anchor="start" fill="currentColor" stroke="none" class="text-xs font-serif italic">P</text>
            <line x1="100" y1="105" x2="160" y2="140" stroke-dasharray="3 3"/>
            <line x1="220" y1="105" x2="160" y2="140" stroke-dasharray="3 3"/>
            <line x1="160" y1="180" x2="160" y2="140" stroke-dasharray="3 3"/>
            <rect x="150" y="170" width="10" height="10" stroke-width="1"/>
            <line x1="160" y1="30" x2="160" y2="140" stroke="#94a3b8"/>
            <line x1="40" y1="180" x2="160" y2="140" stroke="#94a3b8"/>
            <line x1="280" y1="180" x2="160" y2="140" stroke="#94a3b8"/>
          </svg>`
        },
        {
          type: "solution",
          id: "preface-solution-1",
          title: "Proof",
          titleVi: "Chứng minh",
          blocks: [
            {
              type: "paragraph",
              text: "Proof. Call the triangle ABC. Now let P be the intersection of the perpendicular bisectors of AB and AC. Because P is on the AB bisector, |AP| = |PB|. Because P is on the AC bisector, |AP| = |PC|. Combining the two, |BP| = |PC|. But this means that P has to be on the BC bisector. Hence all three bisectors are concurrent. (Incidentally, P is the circumcentre of ABC.)",
              textVi: "Chứng minh. Gọi tam giác là ABC. Giả sử P là giao điểm của các đường trung trực của AB và AC. Vì P nằm trên trung trực AB nên |AP| = |PB|. Vì P nằm trên trung trực AC nên |AP| = |PC|. Kết hợp cả hai điều này, ta có |BP| = |PC|. Nhưng điều này có nghĩa là P cũng phải nằm trên đường trung trực của BC. Do đó cả ba đường trung trực đều đồng quy. (Đồng thời, P chính là tâm đường tròn ngoại tiếp tam giác ABC.)"
            }
          ]
        },
        {
          type: "paragraph",
          text: "The following reduced diagram shows why |AP| = |PB| if P is on the AB perpendicular bisector: congruent triangles will pull it off nicely.",
          textVi: "Hình vẽ rút gọn dưới đây giải thích tại sao |AP| = |PB| khi P nằm trên trung trực của đoạn AB: hai tam giác bằng nhau sẽ giải quyết điều đó một cách đẹp đẽ."
        },
        {
          type: "diagram",
          caption: "Congruent triangles (Hai tam giác bằng nhau với P trên trung trực AB)",
          svg: `<svg viewBox="0 0 300 100" class="mx-auto max-w-xs w-full text-slate-800 dark:text-slate-200" stroke="currentColor" fill="none" stroke-width="1.5">
            <line x1="30" y1="80" x2="270" y2="80" stroke-width="2"/>
            <line x1="150" y1="20" x2="150" y2="80" stroke-dasharray="3 3"/>
            <line x1="30" y1="80" x2="150" y2="20"/>
            <line x1="270" y1="80" x2="150" y2="20"/>
            <circle cx="150" cy="20" r="3" fill="currentColor"/>
            <text x="150" y="12" text-anchor="middle" fill="currentColor" stroke="none" class="text-xs font-serif italic">P</text>
            <text x="20" y="85" text-anchor="middle" fill="currentColor" stroke="none" class="text-xs font-serif italic">A</text>
            <text x="280" y="85" text-anchor="middle" fill="currentColor" stroke="none" class="text-xs font-serif italic">B</text>
            <line x1="85" y1="76" x2="85" y2="84"/>
            <line x1="205" y1="76" x2="205" y2="84"/>
            <rect x="140" y="70" width="10" height="10" stroke-width="1"/>
          </svg>`
        },
        {
          type: "paragraph",
          text: "This kind of solution—and the strange way that obvious facts mesh to form a not-so-obvious fact—is part of the beauty of mathematics. I hope that you too will appreciate this beauty.",
          textVi: "Kiểu lời giải như thế này—và cách kỳ diệu mà những sự thật hiển nhiên gắn kết lại để tạo thành một sự thật không hề hiển nhiên—chính là một phần vẻ đẹp của toán học. Tôi hy vọng rằng bạn cũng sẽ cảm nhận và trân trọng vẻ đẹp này."
        },
        {
          type: "heading",
          level: 3,
          text: "Acknowledgements",
          textVi: "Lời cảm ơn"
        },
        {
          type: "paragraph",
          text: "Thanks to Peter O’Halloran, Vern Treilibs, and Lenny Ng for their contributions of problems and advice.",
          textVi: "Xin chân thành cảm ơn Peter O’Halloran, Vern Treilibs và Lenny Ng vì những đóng góp về các bài toán và lời khuyên quý báu."
        },
        {
          type: "paragraph",
          text: "Special thanks to Basil Rennie for his corrections and ingenious short-cuts in solutions, and finally thanks to my family for their support, encouragement, spelling corrections, and put-downs when I was behind schedule.",
          textVi: "Đặc biệt cảm ơn Basil Rennie vì những đính chính và các đường tắt khéo léo trong lời giải, và cuối cùng cảm ơn gia đình tôi vì sự ủng hộ, động viên, sửa lỗi chính tả và cả những lời nhắc nhở khi tôi bị trễ hạn."
        },
        {
          type: "paragraph",
          text: "Almost all of the problems in this book come from published collections of problem sets for mathematics competitions. These are sourced in the texts, with full details given in the reference section of the book. I also used a small handful of problems from friends or from various mathematical publications; these have no source listed.",
          textVi: "Hầu hết các bài toán trong cuốn sách này được lấy từ các tuyển tập đề thi toán đã xuất bản. Nguồn gốc của chúng được trích dẫn cụ thể trong phần Tài liệu tham khảo ở cuối sách. Tôi cũng sử dụng một số ít bài toán từ bạn bè hoặc từ các ấn phẩm toán học khác nhau; những bài này không ghi kèm nguồn trích."
        }
      ]
    },
    {
      id: "preface-second-edition",
      title: "Preface to the second edition",
      titleVi: "Lời nói đầu cho ấn bản thứ hai",
      pageRef: "xi",
      blocks: [
        {
          type: "paragraph",
          text: "This book was written 15 years ago; literally half a lifetime ago, for me. In the intervening years, I have left home, moved to a different country, gone to graduate school, taught classes, written research papers, advised graduate students, married my wife, and had a son. Clearly, my perspective on life and on mathematics is different now than it was when I was 15. I have not been involved in problem-solving competitions for a very long time now, and if I were to write a book now on the subject it would be very different from the one you are reading here.",
          textVi: "Cuốn sách này được viết cách đây 15 năm; đúng nghĩa là nửa đời người đối với tôi lúc bấy giờ. Trong những năm tháng trôi qua, tôi đã rời quê nhà, chuyển đến một đất nước khác, học cao học, giảng dạy các lớp đại học, viết các bài báo nghiên cứu khoa học, hướng dẫn nghiên cứu sinh, kết hôn và đã có một cậu con trai. Rõ ràng, góc nhìn của tôi về cuộc sống và về toán học bây giờ đã rất khác so với khi tôi 15 tuổi. Tôi đã không còn tham gia các kỳ thi giải toán từ rất lâu rồi, và nếu bây giờ tôi viết một cuốn sách về chủ đề này thì nó sẽ rất khác với cuốn sách bạn đang đọc ở đây."
        },
        {
          type: "paragraph",
          text: "Mathematics is a multifaceted subject, and our experience and appreciation of it changes with time and experience. As a primary school student, I was drawn to mathematics by the abstract beauty of formal manipulation, and the remarkable ability to repeatedly use simple rules to achieve non-trivial answers. As a high-school student, competing in mathematics competitions, I enjoyed mathematics as a sport, taking cleverly designed mathematical puzzle problems (such as those in this book) and searching for the right ‘trick’ that would unlock each one. As an undergraduate, I was awed by my first glimpses of the rich, deep, and fascinating theories and structures which lie at the core of modern mathematics today. As a graduate student, I learnt the pride of having one’s own research project, and the unique satisfaction that comes from creating an original argument that resolved a previously open question. Upon starting my career as a professional research mathematician, I began to see the intuition and motivation that lay behind the theories and problems of modern mathematics, and was delighted when realizing how even very complex and deep results are often at heart be guided by very simple, even common-sensical, principles. The ‘Aha!’ experience of grasping one of these principles, and suddenly seeing how it illuminates and informs a large body of mathematics, is a truly remarkable one. And there are yet more aspects of mathematics to discover; it is only recently for me that I have grasped enough fields of mathematics to begin to get a sense of the endeavour of modern mathematics as a unified subject, and how it connects to the sciences and other disciplines.",
          textVi: "Toán học là một chủ đề đa diện, và trải nghiệm cũng như sự trân trọng của chúng ta đối với nó thay đổi theo thời gian và kinh nghiệm tích lũy. Khi còn là học sinh tiểu học, tôi bị cuốn hút vào toán học bởi vẻ đẹp trừu tượng của các phép biến đổi hình thức, và khả năng kỳ diệu trong việc lặp đi lặp lại những quy tắc đơn giản để thu được những đáp số không tầm thường. Là một học sinh trung học tham gia thi đấu các kỳ thi toán, tôi say mê toán học như một môn thể thao, đón nhận những bài toán đố được thiết kế thông minh (như trong cuốn sách này) và tìm kiếm 'ngón nghề' phù hợp để mở khóa từng bài. Khi là sinh viên đại học, tôi kinh ngạc trước những cái nhìn đầu tiên về các lý thuyết và cấu trúc sâu sắc, phong phú nằm ở cốt lõi của toán học hiện đại. Khi là nghiên cứu sinh, tôi cảm nhận được niềm tự hào khi có đề tài nghiên cứu của riêng mình, và sự thỏa mãn đặc biệt khi tạo ra một lập luận nguyên bản giải quyết được một bài toán mở trước đó. Khi bắt đầu sự nghiệp nhà toán học nghiên cứu chuyên nghiệp, tôi bắt đầu nhận thấy trực giác và động lực đằng sau các lý thuyết và bài toán của toán học hiện đại, và vui sướng khi nhận ra ngay cả những kết quả rất phức tạp và sâu sắc thường ở cốt lõi lại được dẫn dắt bởi những nguyên lý rất đơn giản, thậm chí là trực quan thông thường. Trải nghiệm 'Aha!' khi nắm bắt được một trong những nguyên lý này, và bất chợt thấy nó soi sáng cho cả một khối lượng toán học đồ sộ, là một trải nghiệm phi thường. Và vẫn còn rất nhiều khía cạnh toán học đang chờ được khám phá."
        },
        {
          type: "paragraph",
          text: "As I wrote this book before my professional mathematics career, many of these insights and experiences were not available to me, and so in many places the exposition has a certain innocence, or even naivety. I have been reluctant to tamper too much with this, as my younger self was almost certainly more attuned to the world of the high-school problem solver than I am now. However, I have made a number of organizational changes: formatting the text into LaTeX, arranging the material into what I believe is a more logical order, and editing those parts of the text which were inaccurate, badly worded, confusing, or unfocused. I have also added some more exercises. In some places, the text is a bit dated (Fermat’s last theorem, for instance, has now been proved rigorously), and I now realize that several of the problems here could be handled more quickly and cleanly by more ‘high-tech’ mathematical tools; but the point of this text is not to present the slickest solution to a problem or to provide the most up-to-date survey of results, but rather to show how one approaches a mathematical problem for the first time, and how the painstaking, systematic experience of trying some ideas, eliminating others, and steadily manipulating the problem can lead, ultimately, to a satisfying solution.",
          textVi: "Vì tôi viết cuốn sách này trước sự nghiệp toán học chuyên nghiệp của mình, nhiều hiểu biết sâu sắc và trải nghiệm này lúc đó chưa có, do đó ở nhiều chỗ phần trình bày mang nét ngây thơ nhất định. Tôi không muốn can thiệp quá nhiều vào điều này, bởi vì con người trẻ tuổi của tôi trước đây chắc chắn đồng điệu hơn với thế giới của học sinh giải toán thi hơn tôi bây giờ. Dẫu vậy, tôi đã thực hiện một số chỉnh sửa cấu trúc: định dạng văn bản sang LaTeX, sắp xếp tài liệu theo trật tự logic hơn, và hiệu đính những phần diễn đạt chưa chuẩn xác, khó hiểu. Tôi cũng bổ sung thêm một số bài tập. Ở một số chỗ, văn bản có phần hơi cũ (chẳng hạn Định lý lớn Fermat nay đã được chứng minh trọn vẹn), và tôi nhận ra nhiều bài toán ở đây có thể được giải nhanh và gọn hơn bằng các công cụ toán học 'cao cấp' hơn; nhưng mục đích của cuốn sách này không phải là phô diễn lời giải bóng bẩy nhất hay đưa ra khảo sát kết quả mới nhất, mà là chỉ ra cách một người tiếp cận một bài toán lần đầu tiên như thế nào, và trải nghiệm thử nghiệm kiên trì, loại bỏ các ý tưởng sai lầm và biến đổi bài toán có hệ thống có thể dẫn tới một lời giải thỏa mãn ra sao."
        },
        {
          type: "paragraph",
          text: "I am greatly indebted to Tony Gardiner for encouraging and supporting the reprinting of this book, and to my parents for all their support over the years. I am also touched by all the friends and acquaintances I have met over the years who had read the first edition of the book. Last, but not least, I owe a special debt to my parents and the Flinders Medical Centre computer support unit for retrieving a 15-year old electronic copy of this book from our venerable Macintosh Plus computer!",
          textVi: "Tôi vô cùng biết ơn Tony Gardiner vì đã khuyến khích và hỗ trợ việc tái bản cuốn sách này, và cảm ơn cha mẹ tôi vì mọi sự hỗ trợ trong suốt những năm qua. Tôi cũng cảm kích tất cả bạn bè và người quen đã đọc ấn bản đầu tiên. Cuối cùng nhưng không kém phần quan trọng, tôi mang món nợ ân tình đặc biệt với cha mẹ và đội ngũ hỗ trợ máy tính Trung tâm Y tế Flinders vì đã khôi phục bản sao điện tử 15 năm tuổi của cuốn sách này từ chiếc máy tính Macintosh Plus huyền thoại của chúng tôi!"
        },
        {
          type: "paragraph",
          text: "Terence Tao\nDepartment of Mathematics,\nUniversity of California, Los Angeles\nDecember 2005",
          textVi: "Terence Đào (Terence Tao)\nKhoa Toán học,\nĐại học California, Los Angeles (UCLA)\nTháng 12 năm 2005"
        }
      ]
    }
  ],
  chapters: [
    {
      id: "chapter-1",
      number: 1,
      title: "Strategies in problem solving",
      titleVi: "Chiến lược trong giải toán",
      pageRef: "1",
      sections: [
        {
          id: "chapter-1-section-1",
          title: "Introduction and General Strategies",
          titleVi: "Giới thiệu và Các chiến lược tổng quát",
          blocks: [
            {
              type: "quote",
              text: "The journey of a thousand miles begins with one step.",
              textVi: "Hành trình vạn dặm bắt đầu từ một bước chân.",
              attribution: "Lao Tzu (Lão Tử)"
            },
            {
              type: "paragraph",
              text: "Like and unlike the proverb above, the solution to a problem begins (and continues, and ends) with simple, logical steps. But as long as one steps in a firm, clear direction, with long strides and sharp vision, one would need far, far less than the millions of steps needed to journey a thousand miles. And mathematics, being abstract, has no physical constraints; one can always restart from scratch, try new avenues of attack, or backtrack at an instant’s notice. One does not always have these luxuries in other forms of problem-solving (e.g. trying to go home if you are lost).",
              textVi: "Vừa giống lại vừa không giống câu danh ngôn trên, lời giải cho một bài toán bắt đầu (tiếp diễn và kết thúc) bằng những bước logic đơn giản. Nhưng miễn là ta bước đi với phương hướng rõ ràng, vững chãi, sải bước dài và tầm nhìn sắc bén, ta sẽ cần ít hơn rất nhiều so với hàng triệu bước chân của chuyến đi vạn dặm. Và toán học, với tính chất trừu tượng, không bị ràng buộc bởi vật lý; ta luôn có thể làm lại từ đầu, thử các hướng tấn công mới, hoặc quay lui trong tích tắc. Người ta không phải lúc nào cũng có được sự thuận lợi xa xỉ này trong các hình thức giải quyết vấn đề khác (ví dụ: cố gắng tìm đường về nhà khi bị lạc)."
            },
            {
              type: "paragraph",
              text: "Of course, this does not necessarily make it easy; if it was easy, then this book would be substantially shorter. But it makes it possible.",
              textVi: "Tất nhiên, điều này không nhất thiết làm cho việc giải toán trở nên dễ dàng; nếu dễ dàng thì cuốn sách này đã ngắn hơn rất nhiều. Nhưng nó khiến mọi thứ trở nên khả thi."
            },
            {
              type: "paragraph",
              text: "There are several general strategies and perspectives to solve a problem correctly; (Polya 1957) is a classic reference for many of these. Some of these strategies are discussed below, together with a brief illustration of how each strategy can be used on the following problem:",
              textVi: "Có một số chiến lược và góc nhìn tổng quát để giải quyết bài toán một cách chính xác; tác phẩm kinh điển của (Polya 1957) là tài liệu tham khảo mẫu mực cho những chiến lược này. Một số chiến lược được thảo luận dưới đây cùng với minh họa ngắn gọn cách áp dụng từng chiến lược vào bài toán sau:"
            },
            {
              type: "problem",
              id: "problem-1-1",
              title: "Problem 1.1",
              titleVi: "Bài toán 1.1",
              blocks: [
                {
                  type: "paragraph",
                  text: "A triangle has its lengths in an arithmetic progression, with difference d. The area of the triangle is t. Find the lengths and angles of the triangle.",
                  textVi: "Một tam giác có độ dài các cạnh lập thành một cấp số cộng với công sai d. Diện tích tam giác là t. Hãy tìm độ dài các cạnh và các góc của tam giác đó."
                }
              ]
            },
            {
              type: "heading",
              level: 3,
              text: "Understand the problem",
              textVi: "1. Thấu hiểu bài toán"
            },
            {
              type: "paragraph",
              text: "What kind of problem is it? There are three main types of problems:",
              textVi: "Đây là loại bài toán nào? Có ba loại bài toán chính:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "‘Show that ...’ or ‘Evaluate ...’ questions, in which a certain statement has to be proved true, or a certain expression has to be worked out;",
                "‘Find a ...’ or ‘Find all ...’ questions, which requires one to find something (or everything) that satisfies certain requirements;",
                "‘Is there a ...’ questions, which either require you to prove a statement or provide a counterexample (and thus is one of the previous two types of problem)."
              ],
              itemsVi: [
                "Câu hỏi ‘Chứng minh rằng...’ hoặc ‘Tính giá trị...’, trong đó một mệnh đề cần được chứng minh là đúng, hoặc một biểu thức cần được tính toán cụ thể;",
                "Câu hỏi ‘Tìm một...’ hoặc ‘Tìm tất cả...’, đòi hỏi phải tìm một đối tượng (hoặc toàn bộ) thỏa mãn các điều kiện đặt ra;",
                "Câu hỏi ‘Có tồn tại hay không...’, đòi hỏi bạn phải chứng minh mệnh đề hoặc đưa ra phản ví dụ (và do đó quy về một trong hai dạng bài trên)."
              ]
            },
            {
              type: "paragraph",
              text: "The type of problem is important because it determines the basic method of approach. ‘Show that ...’ or ‘Evaluate ...’ problems start with given data and the objective is to deduce some statement or find the value of an expression; this type of problem is generally easier than the other two types because there is a clearly visible objective, one that can be deliberately approached. ‘Find a ...’ questions are more hit-and-miss; generally one has to guess one answer that nearly works, and then tweak it a bit to make it more correct; or alternatively one can alter the requirements that the object-to-find must satisfy, so that they are easier to satisfy. ‘Is there a ...’ problems are typically the hardest, because one must first make a decision on whether an object exists or not, and provide a proof on one hand, or a counter-example on the other.",
              textVi: "Loại bài toán đóng vai trò quan trọng vì nó quyết định phương pháp tiếp cận cơ bản. Các bài ‘Chứng minh rằng...’ hoặc ‘Tính giá trị...’ bắt đầu bằng dữ liệu đã cho và mục tiêu là suy ra mệnh đề hoặc tính giá trị biểu thức; dạng này thường dễ hơn hai dạng còn lại vì mục tiêu nhìn thấy rõ ràng và có thể chủ động tiến tới. Các câu hỏi ‘Tìm...’ mang tính thử-sai nhiều hơn; ta thường phải đoán một đáp án gần đúng rồi tinh chỉnh lại, hoặc biến đổi yêu cầu cho dễ thỏa mãn hơn. Các câu hỏi ‘Có tồn tại hay không...’ thường là khó nhất vì trước hết phải phán đoán xem đối tượng có tồn tại hay không, rồi chứng minh hoặc tìm phản ví dụ."
            },
            {
              type: "paragraph",
              text: "In Problem 1.1 question, we have an ‘Evaluate ...’ type of problem. We need to find several unknowns, given other variables. This suggests an algebraic solution rather than a geometric one, with a lot of equations connecting d, t, and the sides and angles of the triangle, and eventually solving for our unknowns.",
              textVi: "Trong Bài toán 1.1, chúng ta có một bài toán dạng ‘Tính giá trị...’. Ta cần tìm một số ẩn số dựa trên các biến số đã cho. Điều này gợi ý một lời giải theo hướng đại số hơn là hình học thuần túy, với các phương trình kết nối d, t và các cạnh, góc của tam giác, rồi từ đó giải tìm các ẩn số."
            },
            {
              type: "heading",
              level: 3,
              text: "Understand the data",
              textVi: "2. Thấu hiểu dữ liệu bài toán"
            },
            {
              type: "paragraph",
              text: "What is given in the problem? Usually, a question talks about a number of objects which satisfy some special requirements. To understand the data, one needs to see how the objects and requirements react to each other. This is important in focusing attention on the proper techniques and notation to handle the problem. For example, in our sample question, our data are a triangle, the area of the triangle, and the fact that the sides are in an arithmetic progression with separation d. Because we have a triangle, and are considering the sides and area of it, we would need theorems relating sides, angles, and areas to tackle the question: the sine rule, cosine rule, and the area formulas, for example. Also, we are dealing with an arithmetic progression, so we would need some notation to account for that; for example, the side lengths could be a, a + d, and a + 2d.",
              textVi: "Đề bài cho những gì? Thông thường, câu hỏi đề cập đến một số đối tượng thỏa mãn những yêu cầu đặc biệt. Để hiểu dữ liệu, ta cần xem các đối tượng và điều kiện tương tác với nhau như thế nào. Ví dụ trong bài mẫu, dữ liệu là một tam giác, diện tích t, và các cạnh lập thành cấp số cộng với công sai d. Vì xét các cạnh và diện tích tam giác, ta cần các định lý liên hệ cạnh, góc và diện tích: định lý sin, định lý cosin, công thức diện tích Heron. Đồng thời ta cần đặt ký hiệu phù hợp cho cấp số cộng: chẳng hạn a, a + d, a + 2d."
            },
            {
              type: "heading",
              level: 3,
              text: "Understand the objective",
              textVi: "3. Thấu hiểu mục tiêu"
            },
            {
              type: "paragraph",
              text: "What do we want? One may need to find an object, prove a statement, determine the existence of an object with special properties, or whatever. Like the flip side of this strategy, ‘understand the data’, knowing the objective helps focus attention on the best weapons to use. Knowing the objective also helps in creating tactical goals which we know will bring us closer to solving the question. Our example question has the objective of ‘find all the sides and angles of the triangle’. This means, as mentioned before, that we will need theorems and results concerning sides and angles. It also gives us the tactical goal of ‘find equations involving the sides and angles of the triangle’.",
              textVi: "Chúng ta muốn tìm cái gì? Biết rõ mục tiêu giúp tập trung vào những vũ khí sắc bén nhất. Mục tiêu bài mẫu là 'tìm tất cả các cạnh và góc của tam giác'. Điều này đặt ra mục tiêu chiến thuật: 'thiết lập các phương trình chứa độ dài cạnh và góc tam giác'."
            },
            {
              type: "heading",
              level: 3,
              text: "Select good notation",
              textVi: "4. Chọn ký hiệu tốt"
            },
            {
              type: "paragraph",
              text: "Now that we have our data and objective, we must represent it in an efficient way, so that the data and objective are both represented as simply as possible. This usually involves the thoughts of the past two strategies. In our sample question, we are already thinking of equations involving d, t, and the sides and angles of the triangle. We need to express the sides and angles in terms of variables: one could choose the sides to be a, b, and c, while the angles could be denoted α, β, γ. But we can use the data to simplify the notation: we know that the sides are in arithmetic progression, so instead of a, b, and c, we can have a, a + d, and a + 2d instead. But the notation can be even better if we make it more symmetrical, by making the side lengths b - d, b, and b + d. The only slight drawback to this notation is that b is forced to be larger than d. But on further thought, we see that this is actually not a restriction; in fact the knowledge that b > d is an extra piece of data for us.",
              textVi: "Biểu diễn bài toán bằng các ký hiệu thuận tiện và đối xứng. Thay vì dùng 3 cạnh a, b, c hay a, a+d, a+2d, ký hiệu sẽ đối xứng và đẹp hơn nhiều nếu đặt 3 cạnh là: b - d, b, và b + d (với b > d). Đặt góc là α, β, γ với α + β + γ = 180°."
            },
            {
              type: "heading",
              level: 3,
              text: "Write down what you know in the notation selected; draw a diagram",
              textVi: "5. Viết ra những gì đã biết theo ký hiệu đã chọn; vẽ hình"
            },
            {
              type: "paragraph",
              text: "Putting everything down on paper helps in three ways:\n(a) you have an easy reference later on;\n(b) the paper is a good thing to stare at when you are stuck;\n(c) the physical act of writing down of what you know can trigger new inspirations and connections.",
              textVi: "Viết mọi thứ ra giấy giúp ích theo 3 cách:\n(a) bạn có tài liệu tham khảo dễ dàng khi làm tiếp;\n(b) giấy nháp là thứ tuyệt vời để nhìn vào suy ngẫm khi bế tắc;\n(c) hành động viết giúp khơi nguồn cảm hứng và tạo liên tưởng mới."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "(physical constraints) \\(\\alpha, \\beta, \\gamma, t > 0\\), and \\(b \\ge d\\); we can also assume \\(d \\ge 0\\) without loss of generality;",
                "(sum of angles in a triangle) \\(\\alpha + \\beta + \\gamma = 180^\\circ\\);",
                "(sine rule) \\(\\frac{b - d}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{b + d}{\\sin \\gamma}\\);",
                "(cosine rule) \\(b^2 = (b - d)^2 + (b + d)^2 - 2(b - d)(b + d) \\cos \\beta\\), etc.;",
                "(area formula) \\(t = \\frac{1}{2}(b - d)b \\sin \\gamma = \\frac{1}{2}(b - d)(b + d)\\sin \\beta = \\frac{1}{2}b(b + d)\\sin \\alpha\\);",
                "(Heron’s formula) \\(t^2 = s(s - b + d)(s - b)(s - b - d)\\), where \\(s = ((b - d) + b + (b + d))/2\\) is the semiperimeter;",
                "(triangle inequality) \\(b + d \\le b + (b - d)\\)."
              ],
              itemsVi: [
                "(Ràng buộc vật lý) \\(\\alpha, \\beta, \\gamma, t > 0\\), và \\(b \\ge d\\); giả sử \\(d \\ge 0\\);",
                "(Tổng các góc tam giác) \\(\\alpha + \\beta + \\gamma = 180^\\circ\\);",
                "(Định lý sin) \\(\\frac{b - d}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{b + d}{\\sin \\gamma}\\);",
                "(Định lý cosin) \\(b^2 = (b - d)^2 + (b + d)^2 - 2(b - d)(b + d) \\cos \\beta\\), v.v.;",
                "(Công thức diện tích) \\(t = \\frac{1}{2}(b - d)b \\sin \\gamma = \\frac{1}{2}(b - d)(b + d)\\sin \\beta = \\frac{1}{2}b(b + d)\\sin \\alpha\\);",
                "(Công thức Heron) \\(t^2 = s(s - b + d)(s - b)(s - b - d)\\), với nửa chu vi \\(s = 3b/2\\);",
                "(Bất đẳng thức tam giác) \\(b + d < b + (b - d) \\implies d < b/2\\)."
              ]
            },
            {
              type: "diagram",
              caption: "Triangle with sides b - d, b, b + d and area t (Tam giác có 3 cạnh b-d, b, b+d và diện tích t)",
              svg: `<svg viewBox="0 0 320 180" class="mx-auto max-w-xs w-full text-slate-800 dark:text-slate-200" stroke="currentColor" fill="none" stroke-width="1.5">
                <polygon points="120,30 30,150 290,150" stroke-width="2"/>
                <text x="65" y="85" fill="currentColor" stroke="none" class="text-xs font-serif italic">b − d</text>
                <text x="215" y="85" fill="currentColor" stroke="none" class="text-xs font-serif italic">b</text>
                <text x="160" y="170" fill="currentColor" stroke="none" class="text-xs font-serif italic">b + d</text>
                <text x="145" y="110" fill="currentColor" stroke="none" class="text-xs font-sans">area t</text>
                <text x="120" y="45" fill="currentColor" stroke="none" class="text-xs font-serif italic">γ</text>
                <text x="45" y="145" fill="currentColor" stroke="none" class="text-xs font-serif italic">β</text>
                <text x="270" y="145" fill="currentColor" stroke="none" class="text-xs font-serif italic">α</text>
              </svg>`
            },
            {
              type: "heading",
              level: 3,
              text: "Simplify, exploit data, and reach tactical goals",
              textVi: "6. Rút gọn, khai thác dữ liệu và đạt mục tiêu chiến thuật"
            },
            {
              type: "paragraph",
              text: "In Problem 1.1, we are already concentrating on Heron’s formula. We can use this to attain our tactical goal of solving for b. Herons formula in terms of d, t, b becomes:",
              textVi: "Trong Bài toán 1.1, chúng ta tập trung vào công thức Heron để đạt mục tiêu giải ra b theo d và t. Công thức Heron trở thành:"
            },
            {
              type: "formula",
              latex: "t^2 = \\frac{3b}{2}\\left(\\frac{3b}{2} - b + d\\right)\\left(\\frac{3b}{2} - b\\right)\\left(\\frac{3b}{2} - b - d\\right)"
            },
            {
              type: "paragraph",
              text: "which we can simplify to",
              textVi: "rút gọn thành"
            },
            {
              type: "formula",
              latex: "t^2 = \\frac{3b^2(b - 2d)(b + 2d)}{16} = \\frac{3b^2(b^2 - 4d^2)}{16}."
            },
            {
              type: "paragraph",
              text: "Now we have to solve for b. The right-hand side is a quadratic in b^2:",
              textVi: "Bây giờ ta giải tìm b. Vế phải là một phương trình bậc hai đối với \\(b^2\\):"
            },
            {
              type: "formula",
              latex: "3b^4 - 12d^2b^2 - 16t^2 = 0"
            },
            {
              type: "paragraph",
              text: "so, using the quadratic formula,",
              textVi: "áp dụng công thức nghiệm phương trình bậc hai:"
            },
            {
              type: "formula",
              latex: "b^2 = \\frac{12d^2 \\pm \\sqrt{144d^4 + 196t^2}}{6} = 2d^2 \\pm \\sqrt{4d^4 + \\frac{16}{3}t^2}."
            },
            {
              type: "paragraph",
              text: "Because b has to be positive, we get:",
              textVi: "Vì b phải là số thực dương, ta có:"
            },
            {
              type: "formula",
              latex: "b = \\sqrt{2d^2 + \\sqrt{4d^4 + \\frac{16}{3}t^2}},"
            },
            {
              type: "paragraph",
              text: "as a check, we can verify that when d = 0 this agrees with our previous computation of b = 2t^{1/2}/3^{1/4}. Once we compute the sides b - d, b, b + d, the evaluation of the angles α, β, γ then follows from the cosine laws, and we are done!",
              textVi: "Kiểm tra lại: khi \\(d = 0\\) (tam giác đều), kết quả hoàn toàn trùng khớp với \\(b = 2t^{1/2}/3^{1/4}\\). Khi đã có các cạnh \\(b - d, b, b + d\\), các góc \\(\\alpha, \\beta, \\gamma\\) được tính dễ dàng theo định lý cosin. Bài toán được giải quyết trọn vẹn!"
            }
          ]
        }
      ]
    }
  ]
};
