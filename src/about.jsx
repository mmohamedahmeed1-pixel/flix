import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      {/* قسم العنوان الرئيسي */}
      <div style={styles.heroSection}>
        <h1 style={styles.mainTitle}>قصة متجر قهوتنا ☕</h1>
        <p style={styles.subtitle}>تعرف على الشغف والسر وراء كل حبة بن نختارها لك</p>
      </div>

      {/* قسم القصة والرؤية */}
      <div style={styles.contentGrid}>
        <div style={styles.textCard}>
          <h2 style={styles.sectionTitle}>من نحن؟</h2>
          <p style={styles.paragraph}>
            بدأنا كمجموعة من عشاق القهوة الذين يبحثون دائماً عن الكوب المثالي. ومن هنا ولدت فكرة <strong>"متجر قهوتنا"</strong> في قلب مصر، ليكون المكان الأول الذي يجمع بين جودة المحاصيل العالمية وأصالة الذوق العربي.
          </p>
          <p style={styles.paragraph}>
            نحن لا نبيع مجرد قهوة، بل نقدم تجربة يومية فريدة تبدأ من اختيار حبات البن بعناية من مزارع كولومبيا، إثيوبيا، والبرازيل، وتمر برحلة تحميص دقيقة لضمان وصول النكهة الغنية والطازجة إليك في كل مرة.
          </p>
        </div>

        <div style={styles.visionCard}>
          <h2 style={styles.sectionTitle}>رؤيتنا وهدفنا 🎯</h2>
          <p style={styles.paragraph}>
            أن نصبح الاسم الأول والوجهة الموثوقة لكل عشاق القهوة المختصة والمشروبات المبتكرة في الوطن العربي، مع الحفاظ على تقديم أعلى مستويات الجودة بأسعار تنافسية تناسب الجميع.
          </p>
        </div>
      </div>

      {/* قسم المميزات / لماذا تختارنا؟ */}
      <div style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>لماذا يفضلنا عشاق القهوة؟ 🤔</h2>
        <div style={styles.featuresGrid}>
          
          <div style={styles.featureBox}>
            <span style={styles.featureIcon}>🌱</span>
            <h4 style={styles.featureName}>محاصيل طبيعية 100%</h4>
            <p style={styles.featureDesc}>نستورد حبوب البن من مزارع مستدامة تضمن نقاء النكهة وخلوها من الإضافات.</p>
          </div>

          <div style={styles.featureBox}>
            <span style={styles.featureIcon}>🔥</span>
            <h4 style={styles.featureName}>تحميص طازج دوري</h4>
            <p style={styles.featureDesc}>يتم تحميص البن بشكل دوري أسبوعياً لضمان الاحتفاظ بالزيوت الطيارة والنكهة الأصلية.</p>
          </div>

          <div style={styles.featureBox}>
            <span style={styles.featureIcon}>🚀</span>
            <h4 style={styles.featureName}>توصيل سريع ومتقن</h4>
            <p style={styles.featureDesc}>نهتم بتغليف المنتجات بعناية فائقة لتصل إليك طازجة وكأنها حُمصت للتو.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
    direction: 'rtl',
    fontFamily: 'sans-serif',
    minHeight: '80vh',
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#F5EBE6',
    padding: '40px 20px',
    borderRadius: '16px',
    border: '1px solid #E5DCD5',
  },
  mainTitle: {
    color: '#4E3629',
    fontSize: '36px',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#705335',
    fontSize: '16px',
  },
  contentGrid: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '60px',
  },
  textCard: {
    flex: '2',
    minWidth: '300px',
    backgroundColor: '#FFF',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    border: '1px solid #E5DCD5',
  },
  visionCard: {
    flex: '1',
    minWidth: '280px',
    backgroundColor: '#4E3629',
    color: '#FFF',
    padding: '30px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: '22px',
    marginBottom: '20px',
    color: 'inherit', // يأخذ اللون من الكارد الأب تلقائياً
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.8',
    marginBottom: '15px',
    color: 'inherit',
  },
  featuresSection: {
    textAlign: 'center',
  },
  featuresTitle: {
    color: '#2C1E17',
    fontSize: '26px',
    marginBottom: '40px',
  },
  featuresGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  featureBox: {
    backgroundColor: '#FFF',
    border: '1px solid #E5DCD5',
    borderRadius: '12px',
    padding: '25px',
    width: '280px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
    transition: 'transform 0.3s',
  },
  featureIcon: {
    fontSize: '40px',
    display: 'block',
    marginBottom: '15px',
  },
  featureName: {
    color: '#4E3629',
    fontSize: '18px',
    marginBottom: '10px',
  },
  featureDesc: {
    color: '#666',
    fontSize: '14px',
    lineHeight: '1.6',
    margin: 0,
  }
};

export default About;