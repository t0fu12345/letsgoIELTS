# **Design Specification: letsgoIELTS Sign Up Page**

## **1. Chiến lược Bố cục (Split-Screen Layout)**
Trang Đăng ký sử dụng thiết kế tràn viền (100vh), chia màn hình thành 2 nửa (Left Brand Column & Right Form Column).

### **Cột Trái: Không gian Thương hiệu (Brand & Motivation)**
*   **Background Container:** Phủ màu Secondary (`#F3C41B` - Vàng thương hiệu).
*   **Nội dung trung tâm:** 
    *   **Logo:** `letsgoIELTS` màu Đen (`#1A1A1A`) đặt ở góc trái trên cùng.
    *   **[UPDATE] Hình minh họa (Raster Image with CSS Blending):**
        *   **Cấu trúc HTML:** Sử dụng thẻ `<img>` cho file đồ họa chiếc cúp vàng và cành nguyệt quế.
        *   **Xử lý hòa nền (Blend Mode Magic):** Do nền là màu vàng `#F3C41B`, áp dụng CSS sau để lọc sạch lớp caro xám/đen phía sau:
            ```css
            .illustration-blend {
                /* Dùng color-burn hoặc multiply tùy thuộc vào màu caro để "đốt" sạch nền rác */
                mix-blend-mode: color-burn; 
                opacity: 0.9;
                background: transparent;
                border-radius: 0;
            }
            ```
        *   *Ghi chú cho Developer/AI:* Nếu `color-burn` làm ảnh quá gắt, hãy tự động chuyển đổi sang CSS `mask-image` hoặc `mix-blend-mode: multiply; filter: brightness(1.1);` để đảm bảo chiếc cúp chìm mượt mà vào lớp nền vàng.
    *   **Quote:** *"Start your IELTS mastery today. Free tests, AI grading, and more!"* (Font: 24px, Medium, màu Đen).

### **Cột Phải: Khu vực Tương tác (The Sign Up Form)**
*(Giữ nguyên các thành phần M3: Create an Account, First/Last Name, Email, Target Score Dropdown, Password, Nút Create Account màu `#1CB0F6`, Social Logins).*