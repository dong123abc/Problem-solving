# Nền Tảng Đọc Sách "Solving Mathematical Problems" - Terence Tao

Một ứng dụng web tĩnh (static web application) hoàn chỉnh, hiện đại, chuẩn học thuật và responsive dùng để đọc, tra cứu và giải toán từ tác phẩm kinh điển **"Solving Mathematical Problems: A Personal Perspective"** (Phiên bản 2, Oxford University Press, 2006) của Giáo sư **Terence Tao**.

---

## 1. Cấu Trúc Thư Mục Dự Án

```
├── index.html              # Điểm khởi đầu của ứng dụng web, nạp MathJax CDN, CSS và các file dữ liệu
├── styles.css              # Phong cách giao diện học thuật (Sáng, Tối, Sepia, Math Containers, Responsive)
├── app.js                  # Engine JavaScript thuần xử lý tìm kiếm, ghi chú, dấu trang, MathJax, kiểm tra dữ liệu
├── book-data-part-01.js    # Dữ liệu Phần 1: Giới thiệu, Lời nói đầu (Preface 1 & 2), Chương 1
├── book-data-part-02.js    # Dữ liệu Phần 2: Chương 2 (Number Theory) & Chương 3 (Algebra & Analysis)
├── book-data-part-03.js    # Dữ liệu Phần 3: Chương 4 (Euclidean Geometry) & Chương 5 (Analytic Geometry)
├── book-data-part-04.js    # Dữ liệu Phần 4: Chương 6 (Sundry Examples), References & Index
├── book-data.js            # Tệp tổng hợp và kết nối toàn bộ các phần dữ liệu thành window.bookData
├── metadata.json           # Thông tin định danh ứng dụng
└── README.md               # Tài liệu hướng dẫn sử dụng, kiểm thử và mở rộng
```

---

## 2. Cách Chạy Website

### Cách 1: Chạy trực tiếp trong trình duyệt (Không cần cài đặt, không cần server)
- Nhấp đúp chuột trực tiếp vào tệp `index.html` hoặc kéo tệp `index.html` vào bất kỳ trình duyệt nào (Chrome, Firefox, Safari, Edge).
- Toàn bộ nội dung sách, bài toán, lời giải và tính năng lưu trữ (localStorage) sẽ hoạt động ngay lập tức.

### Cách 2: Chạy qua Live Server hoặc Vite Dev Server
- Chạy lệnh:
  ```bash
  npm run dev
  ```
- Mở trình duyệt tại địa chỉ `http://localhost:3000`.

---

## 3. Các Tính Năng Nổi Bật

1. **Chuyển đổi ngôn ngữ linh hoạt (Tiếng Việt / English / Song ngữ)**:
   - Chế độ **Tiếng Việt (VI)**: Bản dịch học thuật với thuật ngữ toán học chuẩn mực.
   - Chế độ **English (EN)**: Giữ nguyên 100% văn phong nguyên bản của Terence Tao.
   - Chế độ **Song ngữ (Dual)**: Hiển thị song song bản gốc tiếng Anh và bản dịch tiếng Việt giúp đối chiếu dễ dàng.
   - Phím tắt `L` trên bàn phím để chuyển đổi nhanh ngôn ngữ.
2. **Hiển thị công thức Toán học chuẩn LaTeX**: Tích hợp MathJax v3 render mượt mà các công thức nội tuyến (`\( ... \)`) và độc lập (`\[ ... \]`), tích hợp nút sao chép mã nguồn LaTeX nhanh.
3. **Tìm kiếm toàn văn thông minh**: Hỗ trợ tìm kiếm theo tiêu đề, bài toán, lời giải, đoạn văn không phân biệt hoa/thường, tự động xử lý tiếng Việt có dấu/không dấu và tô sáng (highlight) từ khóa trực tiếp.
4. **Quản lý lời giải linh hoạt**: Thu gọn/mở rộng từng lời giải riêng lẻ hoặc sử dụng nút "Ẩn tất cả lời giải / Hiện tất cả lời giải" phục vụ việc tự luyện giải toán.
5. **Hệ thống Ghi chú & Dấu trang cá nhân**: Cho phép đánh dấu trang và viết ghi chú cho từng bài toán/mục, hỗ trợ xuất (Export) và nhập (Import) lại dữ liệu ghi chú qua định dạng JSON.
6. **Ghi nhớ tiến độ tự động**: Tự động lưu vị trí cuộn trang, chương đang đọc gần nhất và tính phần trăm tiến độ hoàn thành sách.
7. **Tùy biến hiển thị cao cấp**:
   - 3 chế độ màu: **Sáng (Light)**, **Ban đêm (Dark)**, **Sách cổ điển (Sepia)**.
   - Điều chỉnh cỡ chữ từ `14px` đến `24px`.
   - Điều chỉnh kiểu phông chữ: **Serif học thuật**, **Sans-serif hiện đại**, **Monospace**.
   - Tùy biến khoảng cách dòng (`line-height`) và chiều rộng trang đọc (`max-width`).
8. **Phím tắt tiện lợi**:
   - `Ctrl + K` hoặc `Cmd + K`: Mở nhanh khung tìm kiếm toàn văn.
   - `L`: Chuyển đổi ngôn ngữ Tiếng Việt 🇻🇳 / English 🇬🇧 / Song ngữ.
   - `T`: Đổi giao diện Sáng / Tối / Sepia.
   - `+` / `-`: Tăng hoặc giảm cỡ chữ.
   - `N` / `P`: Chuyển nhanh sang chương kế tiếp (Next) hoặc chương trước (Previous).
   - `Esc`: Đóng bất kỳ cửa sổ nổi (Modal) hoặc thanh bên đang mở.

---

## 4. Cách Thay Thế Dữ Liệu & Chia Nhiều Tệp

### Cấu trúc khối dữ liệu chuẩn:
Mỗi khối nội dung trong `book-data-part-0*.js` tuân thủ định dạng:
```javascript
{
  type: "paragraph", // "paragraph" | "heading" | "formula" | "problem" | "solution" | "exercise" | "quote" | "diagram" | "table"
  text: "Nội dung nguyên văn...",
  latex: "a^2 + b^2 = c^2", // Nếu type là formula
  blocks: [ ... ]          // Nếu type là problem, solution hoặc exercise
}
```

### Thêm hoặc chỉnh sửa chương, mục:
1. Mở tệp phần dữ liệu tương ứng (vd: `book-data-part-02.js`).
2. Thêm đối tượng chương mới vào mảng `chapters` hoặc thêm mục con vào `sections`.
3. Tệp `book-data.js` sẽ tự động hợp nhất vào cây dữ liệu chung `window.bookData`.

---

## 5. Sao Lưu & Khôi Phục Ghi Chú

- **Sao lưu**: Nhấn nút biểu tượng **Dấu trang & Ghi chú** trên thanh tiêu đề > Nhấn nút **"📥 Xuất JSON"**. Trình duyệt sẽ tải về tệp `tao_math_notes_backup_*.json`.
- **Khôi phục**: Nhấn nút **"📤 Nhập JSON"** và chọn tệp sao lưu JSON đã lưu từ máy tính để phục hồi toàn bộ ghi chú và dấu trang.

---

## 6. Kiểm Tra Tính Toàn Vẹn Dữ Liệu (Data Integrity)

Hệ thống tích hợp sẵn công cụ tự động kiểm toán dữ liệu:
- Nhấn nút **"Kiểm tra"** (biểu tượng tích xanh trên thanh điều hướng) để mở bảng báo cáo toàn vẹn dữ liệu.
- Công cụ sẽ kiểm tra:
  - Danh sách 6 chương chính và 2 bài Lời nói đầu.
  - Các đoạn văn rỗng hoặc lỗi nội dung.
  - Trùng lặp mã định danh (`id`).
  - Liên kết bảng tra cứu chỉ mục (`Index`) đến các mục nội dung.

---

## 7. Hướng Dẫn Triển Khai (Deployment)

### Triển khai lên GitHub Pages:
1. Đưa toàn bộ các tệp dự án lên repository GitHub.
2. Vào mục **Settings** của repository > Chọn **Pages** > Chọn Source từ branch `main` (hoặc `master`) thư mục `/ (root)`.
3. Nhấn **Save**. Website sẽ hoạt động tại địa chỉ `https://<username>.github.io/<repo-name>/`.

### Triển khai lên Netlify:
1. Kéo thả trực tiếp thư mục dự án vào Netlify Drop tại [app.netlify.com/drop](https://app.netlify.com/drop).
2. Hoặc kết nối kho mã nguồn Git với Netlify (không cần cấu hình build command, publish directory là thư mục gốc `.`).

---

## 8. Lưu Ý Về Kết Nối Mạng & Bản Quyền

- **MathJax CDN**: Để hiển thị các công thức toán học sắc nét dưới dạng vector SVG/HTML, trình duyệt cần kết nối Internet khi tải lần đầu để nạp thư viện MathJax từ `cdn.jsdelivr.net`.
- **Bản quyền**: Nội dung sách thuộc bản quyền của Giáo sư Terence Tao và Nhà xuất bản Đại học Oxford (Oxford University Press, 2006). Dự án này được thiết kế và xây dựng phục vụ mục đích học tập, nghiên cứu và đọc tài liệu toán học chuyên nghiệp.
