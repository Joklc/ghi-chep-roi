// ============================================================
//  ĐÂY LÀ FILE DUY NHẤT BẠN CẦN SỬA KHI VIẾT BÀI MỚI
//
//  Cách thêm bài: copy khối mẫu bên dưới, dán lên TRÊN CÙNG
//  của danh sách (ngay sau dòng "const POSTS = ["), rồi sửa nội dung.
//
//  Khối mẫu:
//  {
//    title: "Tiêu đề bài viết",
//    category: "chủ đề",           // ví dụ: du lịch, công nghệ, suy nghĩ
//    date: "2026-07-17",           // năm-tháng-ngày
//    content: `
//  Đoạn văn thứ nhất viết ở đây.
//
//  Để một dòng trống giữa các đoạn văn.
//    `
//  },
//
//  Lưu ý: nội dung nằm giữa hai dấu ` (backtick, phím cạnh số 1),
//  và đừng quên dấu phẩy sau dấu } đóng mỗi bài.
// ============================================================

const POSTS = [

  {
    title: "Một ý nghĩ giữa tuần",
    category: "suy nghĩ",
    date: "2026-06-30",
    content: `
Không phải ngày nào cũng cần một bài học lớn. Có ngày chỉ cần nhận ra mình đã cười nhiều hơn hôm qua một chút, vậy là đủ.
    `
  },

  {
    title: "Về việc học một công cụ mới",
    category: "công nghệ",
    date: "2026-05-18",
    content: `
Tuần này mình thử viết lại một macro tự động hoá việc làm mới dữ liệu trong Excel. Có những đoạn code chạy êm re, có những đoạn báo lỗi mà chẳng biết vì sao.

Học công cụ mới luôn giống nhau: vài giờ đầu bực bội, rồi đến lúc mọi thứ khớp lại, cảm giác đó rất đáng.
    `
  },

  {
    title: "Sương sớm ở Đà Lạt",
    category: "du lịch",
    date: "2026-03-02",
    content: `
Có những chuyến đi không cần lịch trình. Sáng sớm, sương còn giăng trên đồi thông, mình chỉ ngồi im ở quán cà phê nhỏ ven đường, nhìn người ta dắt xe qua con dốc.

Đôi khi du lịch không phải để check-in, mà để chậm lại một nhịp mình đã quên mất.
    `
  }

];
