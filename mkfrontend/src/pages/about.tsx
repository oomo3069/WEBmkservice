import "./pagescss/about.css";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">เกี่ยวกับเรา</h1>

      <div className="about-box">
        <div className="about-text">
          <h2>เพจ Facebook ของทางร้าน</h2>
          <p>เป็นช่องทางหลักสำหรับติดตามงานบริการ และติดต่อสอบถามได้ทั้งทางช่อง Comment หรือ Messenger ขอบคุณสำหรับการติดตามเเละถูกใจครับ</p>
        </div>
        <div className="about-image">
          <img src="/images/ffp.png" alt="ประสบการณ์" />
        </div>
      </div>

      <div className="about-box">
        <div className="about-text">
          <h2>ร้านเปิดให้บริการทุกวัน</h2>
          <p>เปิดทุกวัน จันทร์ - ศุกร์ 8:00 - 18:00 | เสาร์ - อาทิตย์ 8:00 - 17:00</p>
        </div>
        <div className="about-image">
          <img src="/img2/mknew10.jpg" alt="เครื่องมือทันสมัย" />
        </div>
      </div>

      <div className="about-box">
        <div className="about-text">
          <h2>การเดินทางมาร้าน</h2>
          <p>ทางร้านจะมีทางขึ้นมาหน้าร้านอยู่ก่อนจะขึ้นร้าน 
            การเดินทาง หากมาจากทางบางพลีหนามเเดงให้เลยสีแยกแล้วกลับรถตรงศูนย์โตโยต้า
            หากมาจากทางสำโรงร้านจะอยู่ก่อนถึงคอนโดรินรดา
            หากสงสัยติดต่อสามารถติดต่อ 089 - 664 - 5156 ช่างเอ็ม </p>
            <a className="tl" href="tel:0896645156">โทรเลย</a>
        </div>
        <div className="about-image">
          <img src="/img2/mknew9.jpg" alt="บริการ" />
        </div>
      </div>
    </div>
  );
};

export default About;