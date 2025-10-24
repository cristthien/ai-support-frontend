"use client";
import React, { useState } from "react";
import insertApiRequest from "@/apiRequests/insert";
import { InsertRequest } from "@/schemaValidation/insert.schema";

export function Insert() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    let doc = {
  "doc_type": "program",
  "source_name": "Cử nhân ngành Công nghệ Thông tin (Áp dụng từ Khoá 19 - 2024)",
  "source_url": "https://daa.uit.edu.vn/content/cu-nhan-nganh-cong-nghe-thong-tin-ap-dung-tu-khoa-19-2024",
  "title": "Ngành Công Nghệ Thông Tin tại UIT",
  "slug": "nganh-cong-nghe-thong-tin-tai-uit",
  "sections": [
    {
      "title": "Mô tả chung",
      "sub_sections": [
        {
          "title": "Mục tiêu đào tạo",
          "content": "Chương trình Cử nhân Công nghệ Thông tin đào tạo những cử nhân ngành Công nghệ thông tin có phẩm chất chính trị tốt, có đạo đức nghề nghiệp, có ý thức trách nhiệm tổ chức, và có sức khỏe tốt; nắm vững các kiến thức cơ bản và chuyên môn sâu về công nghệ thông tin (CNTT); đáp ứng các yêu cầu về nghiên cứu phát triển và ứng dụng công nghệ thông tin của xã hội; có năng lực tham mưu, tư vấn và có khả năng tổ chức thực hiện nhiệm vụ với tư cách của một chuyên viên trong lĩnh vực CNTT. Bên cạnh đó, trên cơ sở các kiến thức được trang bị ở trình độ đại học, người học có đủ năng lực từng bước hoàn thiện khả năng độc lập nghiên cứu, tự bồi dưỡng và tiếp tục lên học các trình độ cao hơn.\n\n"
        },
        {
          "title": "Vị trí và khả năng làm việc sau tốt nghiệp",
          "content": "Sinh viên tốt nghiệp Chương trình đào tạo Cử nhân Công nghệ Thông tin có khả năng làm việc ở những phạm vi và lĩnh vực khác nhau như:\n\n1) Chuyên viên thiết kế, xây dựng và quản lý các dự án nghiên cứu và ứng dụng CNTT, chủ yếu trong lĩnh vực: giao thông, xây dựng, địa lý, môi trường, viễn thám.\n\n2) Chuyên viên quản lý, giám sát, đầu tư các dự án công nghệ thông tin.\n\n3) Chuyên viên khai thác dữ liệu và thông tin ứng dụng cho các doanh nghiệp trong vấn đề phân tích định lượng.\n\n4) Chuyên viên có kĩ năng phát triển các ứng dụng truyền thông xã hội và công nghệ Web.\n\n5) Cán bộ giảng dạy, nghiên cứu khoa học và ứng dụng CNTT ở các trường đại học và cao đẳng trên cả nước."
        },
        {
          "title": "Quan điểm xây dựng chương trình đào tạo",
          "content": "Chương trình được thiết kế sao cho đảm bảo đủ độ phủ, độ sâu nhất định nhằm tạo điều kiện, cơ hội phát triển cho sinh viên làm việc, và có thể tiếp tục nghiên cứu chuyên sâu về các chuyên ngành CNTT, trong đó độ phủ được đặt trọng tâm.\n\nChương trình được thiết kế với mục tiêu phát triển nguồn nhân lực phục vụ cho công cuộc phát triển và hội nhập của đất nước:\n\n- Đào tạo nguồn nhân lực có khả năng để vận hành, quản lý, giám sát; phân tích và phát triển các ứng dụng công nghệ thông tin tại các doanh nghiệp, các đơn vị không chuyên về CNTT nhằm tạo ra các giá trị lợi ích gia tăng cho các doanh nghiệp;\n\n- Đào tạo nguồn nhân lực có khả năng khai thác dữ liệu và thông tin ứng dụng cho các doanh nghiệp trong vấn đề phân tích định lượng;\n\n- Đào tạo nguồn nhân lực có kĩ năng phát triển ứng dụng truyền thông xã hội và công nghệ Web;\n\n- Đào tạo nguồn nhân lực kỹ thuật tham gia các quy trình thiết kế, xây dựng, quản lý các dự án nghiên cứu và ứng dụng CNTT, chủ yếu trong lĩnh vực: địa lý, môi trường, viễn thám.\n\nChương trình được thiết kế, xây dựng dựa vào tầm nhìn và sứ mệnh nhà trường; phiếu góp ý của doanh nghiệp, sinh viên tốt nghiệp, giảng viên giảng dạy và tài liệu tham khảo chính là Chương trình đào tạo Đại học về Công nghệ Thông tin của ACM (Association for Computing Machinery) và IEEE Computer Society ấn hành.\n\n![](/sites/daa/files/uploads/image001_4.png)\n\n**Hình 1: Mô tả ngành Công nghệ Thông tin**\n\nNhững **trụ cột** của CNTT bao gồm lập trình, mạng máy tính, giao tiếp người-máy, cơ sở dữ liệu, và hệ thống web, được xây dựng trên một nền tảng kiến thức về các **nền tảng cơ bản** của CNTT. Bao quát toàn bộ **phần nền tảng** và **trụ cột** là những ứng dụng trong CNTT như là Đảm bảo và An ninh Thông tin, ứng dụng, v.v. Tuy không mô tả hết tất cả các khía cạnh của ngành CNTT, nhưng nó sẽ làm rõ mô tả của những mối quan hệ của các thành phần chính trong CNTT.\n\n"
        },
        {
          "title": "Hình thức và thời gian đào tạo",
          "content": "Hình thức đào tạo: Chính quy tập trung.\n\n- Số tín chỉ đào tạo: Tối thiểu 125 tín chỉ (bao gồm cả ngoại ngữ).\n\n- Thời gian đào tạo: 04 năm (8 học kỳ chính)."
        }
      ]
    },
    {
      "title": "Chuẩn đầu ra",
      "content": "Chuẩn đầu ra (Learning Outcomes – LO) của CTĐT bao gồm những chuẩn đầu ra chung dưới đây, được tham chiếu theo Khung trình độ quốc gia Việt Nam, chuẩn đầu ra của ABET 2021-2022, Bộ năng lực SV tốt nghiệp ĐHQG ban hành theo quyết định 1658/QĐ-ĐHQG năm 2020 (GAC), Tầm nhìn - sứ mạng - Triết lý giáo dục của Trường ĐHCNTT.\n\nSinh viên tốt nghiệp chương trình đào tạo Cử nhân chính quy ngành Công nghệ thông tin phải đáp ứng các yêu cầu về chuẩn đầu ra (CĐR) sau:\n\n− (LO1) Nắm vững kiến thức nền tảng về khoa học tự nhiên, khoa học xã hội và hiểu khả năng vận dụng những kiến thức đó vào ngành Công nghệ thông tin và thực tiễn (abet 3.1).\n\n− (LO2) Nắm vững kiến thức nền tảng và một số kiến thức chuyên sâu của ngành Công nghệ thông tin để ứng dụng vào thực tiễn (abet 3.2, gac 2.b).\n\n− (LO3) Khảo sát tài liệu, lập luận, phân tích và đề xuất giải pháp cho vấn đề liên quan đến ngành Hệ thống thông tin; nhận thức về sự cần thiết của học tập suốt đời (abet 3.6, abet 3.7, gac 2.a).\n\n− (LO4) Thiết kế, hiện thực hóa và đánh giá hệ thống, giải pháp của ngành Công nghệ thông tin (abet 3.2, abet 3.6, gac 2.a).\n\n− (LO5) Giao tiếp, hợp tác hiệu quả với các cá nhân và tập thể trong những ngữ cảnh chuyên ngành nhất định (abet 3.5, gac 2.c).\n\n− (LO6) Giao tiếp trong công việc, đọc hiểu tài liệu và trình bày các giải pháp chuyên ngành bằng ngoại ngữ.\n\n− (LO7) Hiểu biết về lãnh đạo và quản lý (gac2.d).\n\n− (LO8) Hiểu biết về trách nhiệm nghề nghiệp, tôn trọng pháp luật và các giá trị đạo đức (abet 3.4).\n\n---\n\n**Chuẩn đầu ra trên được cụ thể hóa như sau:**\n\n| **CĐR** | **MÔ TẢ CĐR** |\n| --- | --- |\n| **1** | **(LO1) Kiến thức nền tảng về khoa học tự nhiên và khoa học xã hội** |\n| 1.1 | Kiến thức nền tảng về khoa học tự nhiên |\n| 1.2 | Kiến thức nền tảng về khoa học xã hội |\n| **2** | **(LO2) Kiến thức nền tảng và chuyên sâu ngành Công nghệ thông tin** |\n| 2.1 | Kiến thức hệ điều hành |\n| 2.2 | Kiến thức lập trình |\n| 2.3 | Kiến thức giải thuật |\n| 2.4 | Kiến thức quản lý thông tin |\n| 2.5 | Kiến thức ngành |\n| **3** | **(LO3) Khảo sát tài liệu, lập luận, phân tích và đề xuất giải pháp** |\n| 3.1 | Kỹ năng khảo sát |\n| 3.2 | Kỹ năng lập luận, phân tích |\n| 3.3 | Kỹ năng xây dựng ý tưởng, giải pháp |\n| 3.4 | Kỹ năng học tập suốt đời |\n| **4** | **(LO4) Thiết kế, hiện thực hóa hệ thống** |\n| 4.1 | Kỹ năng thiết kế, hiện thực hệ thống |\n| 4.2 | Kỹ năng đánh giá hệ thống |\n| **5** | **(LO5) Giao tiếp, hợp tác hiệu quả với các cá nhân và tập thể** |\n| **6** | **(LO6) Đọc hiểu, thuyết trình bằng ngoại ngữ** |\n| 6.1 | Kỹ năng giao tiếp nói, viết tổng quát |\n| 6.2 | Đọc hiểu tài liệu chuyên môn bằng ngoại ngữ |\n| **7** | **(LO7) Lãnh đạo và quản lý** |\n| **8** | **(LO8) Trách nhiệm nghề nghiệp, pháp luật và các giá trị đạo đức** |"
    },
    {
      "title": "Khối kiến thức và chương trình học",
      "sub_sections": [
        {
          "title": "Tỷ lệ các khối kiến thức",
          "content": "Không kể giáo dục thể chất và giáo dục quốc phòng.\n\n|     |     |     |     |\n| --- | --- | --- | --- |\n| **Khối kiến thức** |     |     | **Khối lượng** |     |\n| **Tổng số tín chỉ** | **%** |\n| **Khối kiến thức giáo dục đại cương**<br><br>**(45 TC)** | Lý luận chính trị và pháp luật |     | 13  | 36  |\n| Toán-Tin học-Khoa học tự nhiên |     | 18  |\n| Ngoại ngữ |     | 12  |\n| Giáo dục thể chất – Giáo dục Quốc phòng |     | Tính riêng |\n| Các môn học khác |     | 2   |\n| **Khối kiến thức giáo dục chuyên nghiệp** **(70 TC)** | Cơ sở ngành |     | 44  | 56  |\n| Chuyên ngành (*) |     | 26 |\n| **Khối kiến thức**<br><br>**tốt nghiệp**  <br>**(10 TC)** | Chọn 1 trong 3 hình thức sau (**): |     |     | 8   |\n| (1) | Khóa luận tốt nghiệp | 10  |\n| (2) | Chuyên đề tốt nghiệp | 4   |\n| Đồ án tốt nghiệp | 6   |\n| (3) | Đồ án tốt nghiệp tại doanh nghiệp | 10  |\n| **Tổng số tín chỉ tích lũy tối thiểu toàn khóa** |     |     | 125 | 100 |\n\n**Lưu ý:**\n\n- (*) Sinh viên chọn các môn chuyên ngành theo hướng dẫn tại mục 3.4.2.\n- (**) Sinh viên chọn hình thức tốt nghiệp theo hướng dẫn tại mục 3.5."
        },
        {
          "title": "Phân bố các khối kiến thức",
          "content": "![](https://daa.uit.edu.vn/sites/daa/files/uploads/image001_4.png)"
        },
        {
          "title": "Khối kiến thức giáo dục đại cương",
          "content": "**Tổng cộng 45 tín chỉ** (đã tính số tín chỉ của Anh văn và không tính các học phần Giáo dục quốc phòng và Giáo dục thể chất vào điểm trung bình chung tích lũy).\n\n| **STT** | **Mã môn** | **Tên môn** | **TC** | **LT** | **TH** |\n| --- | --- | --- | --- | --- | --- |\n| **Các môn lý luận chính trị và pháp luật** |     |     | 13 |     |     |\n| 1.  | SS003 | Tư tưởng Hồ Chí Minh | 2   | 2   | 0   |\n| 2.  | SS007 | Triết học Mác – Lênin | 3   | 3   | 0   |\n| 3.  | SS008 | Kinh tế chính trị Mác – Lênin | 2   | 2   | 0   |\n| 4.  | SS009 | Chủ nghĩa xã hội khoa học | 2   | 2   | 0   |\n| 5.  | SS010 | Lịch sử Đảng Cộng sản Việt Nam | 2   | 2   | 0   |\n| 6.  | SS006 | Pháp luật đại cương | 2   | 2   | 0   |\n| **Toán – Tin học – Khoa học tự nhiên** |     |     | 18 |     |     |\n| 1.  | MA006 | Giải tích | 4   | 4   | 0   |\n| 2.  | MA003 | Đại số tuyến tính | 3   | 3   | 0   |\n| 3.  | MA004 | Cấu trúc rời rạc | 4   | 4   | 0   |\n| 4.  | MA005 | Xác suất thống kê | 3   | 3   | 0   |\n| 5.  | IT001 | Nhập môn lập trình | 4   | 3   | 1   |\n| **Ngoại ngữ** |     |     | 12 |     |     |\n| 1.  | ENG01 | Anh văn 1 | 4   | 4   | 0   |\n| 2.  | ENG02 | Anh văn 2 | 4   | 4   | 0   |\n| 3.  | ENG03 | Anh văn 3 | 4   | 4   | 0   |\n| **Giáo dục thể chất – Giáo dục quốc phòng** |     |     |     |     |     |\n| 1.  | PE231 | Giáo dục thể chất 1 | Tính riêng |     |     |\n| 2.  | PE232 | Giáo dục thể chất 2 | Tính riêng |     |     |\n| 3.  | ME001 | Giáo dục quốc phòng | Tính riêng |     |     |\n| **Các môn học khác** |     |     | 2 |     |     |\n| 1.  | SS004 | Kỹ năng nghề nghiệp | 2   | 2   | 0   |\n| **Tổng số tín chỉ** |     |     | 45 |     |     |\n\n**Ghi chú:** TC: Tín chỉ, LT: Lý thuyết, TH: Thực hành."
        },
        {
          "title": "Khối kiến thức giáo dục chuyên nghiệp",
          "content": "**Tổng cộng 70 tín chỉ.**\n\n### 3.4.1. Nhóm các môn học cơ sở ngành\n\n**Tổng cộng 44 tín chỉ,** gồm 2 phần:\n\n- **Phần 1: Bắt buộc** đối với tất cả sinh viên của ngành, cung cấp kiến thức nền tảng về lập trình, cơ sở dữ liệu, mạng máy tính, phần cứng máy tính. **Tổng cộng 25 tín chỉ**.\n\n| STT | Mã môn | Tên môn | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE005 | Giới thiệu ngành Công nghệ Thông tin | 1   | 1   | 0   |\n| 2.  | IT002 | Lập trình hướng đối tượng | 4   | 3   | 1   |\n| 3.  | IT003 | Cấu trúc dữ liệu và giải thuật | 4   | 3   | 1   |\n| 4.  | IT004 | Cơ sở dữ liệu | 4   | 3   | 1   |\n| 5.  | IT005 | Nhập môn mạng máy tính | 4   | 3   | 1   |\n| 6.  | IT012 | Tổ chức và cấu trúc máy tính II | 4   | 3   | 1   |\n| 7.  | IT007 | Hệ điều hành | 4   | 3   | 1   |\n| **Tổng số tín chỉ** |     |     | 25 | 19 | 6 |\n\n- **Phần 2: Bắt buộc** đối với tất cả sinh viên, cung cấp kiến thức nền tảng CNTT. **Tối thiểu 19 tín chỉ**, sinh viên chọn học 5/6 môn.\n\n| STT | Mã môn | Tên môn | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE101 | Cơ sở hạ tầng công nghệ thông tin | 3   | 2   | 1   |\n| 2.  | IE103 | Quản lý thông tin | 4   | 3   | 1   |\n| 3.  | IE104 | Internet và công nghệ Web | 4   | 3   | 1   |\n| 4.  | IE105 | Nhập môn bảo đảm và an ninh thông tin | 4   | 3   | 1   |\n| 5.  | IE106 | Thiết kế giao diện người dùng | 4   | 3   | 1   |\n| 6.  | IE108 | Phân tích thiết kế phần mềm | 4   | 3   | 1   |\n| **Tổng số tín chỉ** |     |     | 19 |     |     |\n\n### 3.4.2. Nhóm các môn học chuyên ngành\n\n**Bắt buộc** đối với sinh viên ngành CNTT (**Tối thiểu 26 tín chỉ**). Sinh viên chọn các môn để đạt tối thiểu 26 tín chỉ, trong đó tích lũy tối thiểu 6 tín chỉ từ danh mục 3.4.2.3.\n\n#### 3.4.2.1. Hướng Truyền thông xã hội và công nghệ Web\n\n| STT | Mã môn | Tên môn | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE213 | Kỹ thuật phát triển hệ thống Web | 4 | 3 | 1 |\n| ...  | ... | ... | ... | ... | ... |\n\n#### 3.4.2.2. Hướng Khoa học thông tin\n\n| STT | Mã môn | Tên môn | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE201 | Xử lý dữ liệu thống kê | 3 | 3 | 0 |\n| ...  | ... | ... | ... | ... | ... |\n\n#### 3.4.2.3. Tự chọn tự do\n\nTối thiểu 6, tối đa 10 tín chỉ. Sinh viên có thể chọn thêm các môn chuyên ngành chưa tính, hoặc các môn tự chọn từ chương trình khác.\n\n| STT | Mã môn | Tên môn | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | BUS1125 | Khởi nghiệp kinh doanh | 3 | 2 | 1 |\n| ...  | ... | ... | ... | ... | ... |"
        },
        {
          "title": "3.5. Khối kiến thức tốt nghiệp",
          "content": "**Tổng cộng 10 tín chỉ.** Sinh viên chọn 1 trong 3 hình thức.\n\n### 3.5.1. Hình thức 1: Khóa luận tốt nghiệp\n\n| STT | Mã môn học | Tên môn học | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE505 | Khóa luận tốt nghiệp | 10 | 10 | 0 |\n\n### 3.5.2. Hình thức 2: Chuyên đề tốt nghiệp và Đồ án tốt nghiệp\n\n| STT | Mã môn học | Tên môn học | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE400 | Chuyên đề tốt nghiệp | 4 | 4 | 0 |\n| 2.  | IE501 | Đồ án tốt nghiệp | 6 | 6 | 0 |\n\n### 3.5.3. Hình thức 3: Đồ án tốt nghiệp tại doanh nghiệp\n\n| STT | Mã môn học | Tên môn học | TC | LT | TH |\n| --- | --- | --- | --- | --- | --- |\n| 1.  | IE502 | Đồ án tốt nghiệp tại doanh nghiệp | 10 | 10 | 0 |\n\n## 3.6. Quy định đối với sinh viên từ khóa 2023 trở về trước\n\n| STT | Môn học trong CTĐT cũ | Mã môn | Môn học tương đương mới | Tên môn học |\n| --- | --- | --- | --- | --- |\n| 1.  | IT009 | Giới thiệu ngành | IE005 | Giới thiệu ngành Công nghệ thông tin |\n| 2.  | IE202 | Quản trị doanh nghiệp | IE231 | Quản trị doanh nghiệp Công nghệ thông tin |\n| 3.  | IS353 | Mạng xã hội | IE233 | Phân tích và mô hình mạng xã hội |\n| 4.  | IE224 | Phân tích dữ liệu | IE313 | Phân tích và trực quan dữ liệu |\n| 5.  | PE012 | Giáo dục thể chất | PE231 | Giáo dục thể chất 1 |\n| Và | PE232 | Giáo dục thể chất 2 |     |     |\n\nNgoài danh sách môn học tự chọn thuộc chương trình đào tạo cũ, sinh viên có thể chọn thêm các môn học tự chọn trong chương trình đào tạo này, hướng dẫn tại mục 3.4.2.3."
        }
      ]
    },
    {
      "title": "Kế hoạch giảng dạy mẫu",
      "sub_sections": [
        {
          "title": "Học kì 1",
          "content": "| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| --- | --- | --- | --- | --- | --- |\n| **Học kỳ 1** | IT001 | Nhập môn Lập trình | 4   | 3   | 1   |\n|  | MA006 | Giải tích | 4   | 4   | 0   |\n|  | MA003 | Đại số tuyến tính | 3   | 3   | 0   |\n|  | IE005 | Giới thiệu ngành Công nghệ Thông tin | 1   | 1   | 0   |\n|  | SS006 | Pháp luật đại cương | 2   | 2   | 0   |\n|  | ENG01 | Anh văn 1 (*) | 4   | 4   | 0   |\n|  | ME001 | Giáo dục Quốc phòng | **Tính riêng** |     |     |\n|  | **Tổng số tín chỉ HK1** | **18** |     |     |     |"
        },
        {
          "title": "Học kì 2",
          "content": "| --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| **Học kỳ 2** | IT002 | Lập trình hướng đối tượng | 4   | 3   | 1   |\n|  | IT003 | Cấu trúc dữ liệu và giải thuật | 4   | 3   | 1   |\n|  | SS004 | Kỹ năng nghề nghiệp | 2   | 2   | 0   |\n|  | MA004 | Cấu trúc rời rạc | 4   | 4   | 0   |\n|  | ENG02 | Anh văn 2 (*) | 4   | 4   | 0   |\n|  | **Tổng số tín chỉ HK2** | **18** |     |     |     |"
        },
        {
          "title": "Học kì 3",
          "content": "| --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| **Học kỳ 3** | IT004 | Cơ sở dữ liệu | 4   | 3   | 1   |\n|  | IT005 | Nhập môn mạng máy tính | 4   | 3   | 1   |\n|  | IT012 | Tổ chức và cấu trúc máy tính II | 4   | 3   | 1   |\n|  | MA005 | Xác suất thống kê | 3   | 3   | 0   |\n|  | ENG03 | Anh văn 3 (*) | 4   | 4   | 0   |\n|  | **Tổng số tín chỉ HK3** | **19** |     |     |     |"
        },
        {
          "title": "Học kì 4",
          "content": "| --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| **Học kỳ 4** | SS003 | Tư tưởng Hồ Chí Minh | 2   | 2   | 0   |\n|  | SS007 | Triết học Mác – Lênin | 3   | 3   | 0   |\n|  | IT007 | Hệ điều hành | 4   | 3   | 1   |\n|  | IE101 | Cơ sở hạ tầng Công nghệ thông tin | 3   | 2   | 1   |\n|  | IE103 | Quản lý thông tin | 4   | 3   | 1   |\n|  | **Tổng số tín chỉ HK4** | **16** |     |     |     |"
        },
        {
          "title": "Học kì 5",
          "content": "| --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| **Học kỳ 5** | SS008 | Kinh tế chính trị Mác – Lênin | 2   | 2   | 0   |\n|  | SS009 | Chủ nghĩa xã hội khoa học | 2   | 2   | 0   |\n|  | IE104 | Internet và công nghệ Web | 4   | 3   | 1   |\n|  | IE106 | Thiết kế giao diện người dùng | 4   | 3   | 1   |\n|  | PE231 | Giáo dục thể chất 1 | Tính riêng |     |     |\n|  | **Các môn học chuyên ngành (**)** | **≥ 4** |     |     |     |\n|  | **Tổng số tín chỉ HK5** | **≥ 16** |     |     |     |"
        },
        {
          "title": "Học kì 6",
          "content": "| --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| **Học kỳ 6** | SS010 | Lịch sử Đảng Cộng sản Việt Nam | 2   | 2   | 0   |\n|  | IE105 | Nhập môn bảo đảm và an ninh thông tin | 4   | 3   | 1   |\n|  | IE108 | Phân tích thiết kế phần mềm | 4   | 3   | 1   |\n|  | PE232 | Giáo dục thể chất 2 | Tính riêng |     |     |\n|  | **Các môn học chuyên ngành (**)** | **≥ 10** |     |     |     |\n|  | **Tổng số tín chỉ HK6** | **≥ 16** |     |     |     |"
        },
        {
          "title": "Học kì 7",
          "content": "| --- | --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |     |\n| **Học kỳ 7** | IE400 | Chuyên đề tốt nghiệp (***)  <br>(Bắt buộc nếu chọn hình thức 2 ở khối kiến thức tốt nghiệp) | 4   | 4   |     | 0   |\n|  | **Các môn học chuyên ngành (**)** | **≥12** |     |     |     |\n|  | **Tổng số tín chỉ HK7**  <br>- Nếu không tính Chuyên đề tốt nghiệp: **≥ 12 TC**  <br>- Nếu tính Chuyên đề tốt nghiệp: **≥16 TC** | **≥ 12 - 16** |     |     |     |"
        },
        {
          "title": "Học kì 8",
          "content": "| --- | --- | --- | --- | --- | --- |\n| **Học kỳ** | **Mã môn** | **Tên môn học** | **TC** | **LT** | **TH** |\n| **Học kỳ**<br><br>**8** | **Sinh viên chọn 1 trong 3 hình thức sau (****):** |     |     |     |     |\n| **Hình thức 1: Khóa luận tốt nghiệp** |     |     |     |     |\n| IE505 | Khóa luận tốt nghiệp | 10  | 10  | 0   |\n| **Hình thức 2: Chuyên đề tốt nghiệp và Đồ án tốt nghiệp**  (riêng Chuyên đề tốt nghiệp (4 TC) đã hoàn thành ở học kỳ 7) |     |     |     |     |\n| IE501 | Đồ án tốt nghiệp | 6   | 6   | 0   |\n| **Hình thức 3: Đồ án tốt nghiệp tại doanh nghiệp** |     |     |     |     |\n| IE502 | Đồ án tốt nghiệp tại doanh nghiệp | 10  | 10  | 0   |\n| **Tổng số tín chỉ HK8**  <br>- Nếu chọn hình thức 1 hoặc 3: 10 TC<br>- Nếu chọn hình thức 2: 6 TC |     | **6-10** |     |     |\n| **Tổng số tín chỉ học toàn khóa**<br><br>**(Bao gồm 12 tín chỉ Anh văn)** |     |     | **≥ 125** |     |     |"
        }
      ]
    },
    {
      "title": "Điều kiện tốt nghiệp",
      "content": "**Công nhận tốt nghiệp:**\n\n- Sinh viên đã tích lũy **tối thiểu 125 tín chỉ** (bao gồm 12 tín chỉ Anh văn) và đã hoàn thành các môn học bắt buộc của chương trình đào tạo tương ứng với chuyên ngành.\n\nNgoài ra, sinh viên phải đáp ứng đủ các điều kiện khác theo Quy chế đào tạo hiện hành của Trường Đại học Công nghệ Thông tin."
    }
  ]
}

    try {
      await insertApiRequest.insert(doc)}
    catch (err: any) {
      setError(err?.message || 'An error occurred');
    }     finally {
      setLoading(false);
    }  

    // try {
    //   const validatedData = InsertRequestSchema.parse(formData);
    //   await insertApiRequest.insert(validatedData);
    //   setSuccess(true);
    //   setFormData({
    //     doc_type: "",
    //     source_name: "",
    //     source_url: "",
    //     title: "",
    //     slug: "",
    //     sections: [{
    //       title: "",
    //       content: "",
    //       sub_sections: []
    //     }],
    //     metadata: {
    //       faculty: "",
    //       major: "",
    //       degree: "",
    //       phase: "",
    //       semester: 0,
    //       total_credits: 0,
    //       min_credits_to_graduate: 0
    //     }
    //   });
    // } catch (err: any) {
    //   setError(err?.message || 'An error occurred');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? 'Inserting Data...' : 'Insert Data'}
      </button>

      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}

      {success && (
        <div className="text-green-500 mt-2">Data inserted successfully!</div>
      )}
    </div>
  );
}
