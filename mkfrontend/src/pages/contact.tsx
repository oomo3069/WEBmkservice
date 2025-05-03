import "./pagescss/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contract-minibg">
      <h1 className="contact-title">📞 ช่องทางติดต่อเรา</h1>
      <p>ติดต่อเราผ่าน Line ID : somchok456 หรือ เบอร์โทร : 089 - 664 - 5156</p>

      
      <div className="contact-box">
        <h2>Facebook</h2>
        <p style={{marginTop:"-20px"}}>ฝากติดตามเพจที่ Facebook เพื่อติดตามงานบริการของทางร้าด้วยนะครับขอบคุณครับ</p>
        <a
          href="https://www.facebook.com/mirrorssamutprakarn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/ffp.png" 
            alt="Facebook Page"
            className="contact-image"
          />
        </a>
      </div>

      
      <div className="contact-box">
        <h2>Google Map</h2>
        <p style={{marginTop:"-20px"}}>ลูกค้าสามารถเดินทางมาใช้บริการได้ตาม Google map ครับ</p>
        <div className="map-container">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62038.903654579444!2d100.5439058486328!3d13.631497200000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5fcba8924b99%3A0xd395f8ccbac2fb6f!2zTUsg4LmA4LiL4Lit4Lij4LmM4Lin4Li04LiqIOC4i-C5iOC4reC4oeC4m-C4o-C4sOC4leC4ueC4o-C4luC4ouC4meC4leC5jOC4geC4o-C4sOC4iOC4geC5hOC4n-C4n-C5ieC4siDguYDguJfguJ7guLLguKPguLHguIHguKnguYwg4LiK4LmI4Liy4LiH4LmA4Lit4LmH4Lih!5e0!3m2!1sth!2sth!4v1744014147879!5m2!1sth!2sth"
        width="1024"
        height="450"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
