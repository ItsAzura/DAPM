import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import '../pages/user/Report/fonts';

const styles = StyleSheet.create({
  titleCenter: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 6,
    fontFamily: 'Roboto',
  },
  dateEnd: {
    textAlign: 'right',
    fontSize: 12,
    margin: 20,
    fontFamily: 'Roboto',
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `Ngày ${day} tháng ${month} năm ${year}`;
};

const GeneratePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.titleCenter}>
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </Text>
        <Text style={styles.titleCenter}>Độc lập - Tự do - Hạnh phúc</Text>
        <Text style={styles.dateEnd}>
          Đà Nẵng, {formatDate(data[0].ThoiGianBatDau)}
        </Text>
        <Text style={styles.titleCenter}>
          BÁO CÁO CÔNG TÁC KIỂM TRA VI PHẠM
        </Text>
        <Text style={styles.titleCenter}>AN TOÀN THỰC PHẨM</Text>
        <Text style={styles.textCenter}>
          Kính gửi: Cán bộ {data[0].NguoiLapKeHoach}
        </Text>
        <Text style={styles.title}>I. Hành Chính</Text>
        <Text style={styles.text}>- Tên Đoàn Kiếm Tra: {data[0].TenDoan}</Text>
        <Text style={styles.text}>- Danh Sách Thành Viên: </Text>
        {data.map((member) => (
          <Text key={member.IdNguoiDungThanhVien} style={styles.text}>
            + {member.HoTenThanhVien} - {member.VaiTro}
          </Text>
        ))}
        <Text style={styles.title}>II. Cơ Sở</Text>
        <Text style={styles.text}>- Tên Cơ Sở: {data[0].TenCoSo}</Text>
        <Text style={styles.text}>- Chủ Cơ Sở: {data[0].ChuCoSo}</Text>
        <Text style={styles.text}>- Địa Chỉ: {data[0].DiaChi}</Text>
        <Text style={styles.text}>
          - Phường/Xã: {data[0].TenPhuongXa} - Quận/Huyện:{' '}
          {data[0].TenQuanHuyen}
        </Text>
        <Text style={styles.text}>
          - Loại Hình Kinh Doanh: {data[0].TenLoaiHinhKinhDoanh}
        </Text>
        <Text style={styles.title}>III. Kết Quả Kiểm Tra</Text>
        <View>
          <Text style={styles.text}>- Nội Dung: </Text>
          <Text style={styles.text}> {data[0].NoiDungKetQua}</Text>
          <Text style={styles.text}>
            - Có Vi Phạm: {data[0].CoViPham ? 'Có' : 'Không'}
          </Text>
          <Text style={styles.text}>- Hình Ảnh Minh Chứng:</Text>
          <Image
            style={styles.image}
            src={`http://localhost:5000/${data[0].HinhAnhMinhChung}`}
          />
        </View>
      </View>
    </Page>
  </Document>
);

export default GeneratePDF;
