import cls from "./styles.module.scss";

function InternetBusiness() {
    let str = '              <p style="margin-top: 0pt; margin-bottom: 0pt; padding-left: 37.8px;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Axborot manbaalari&nbsp;&nbsp;</span></strong></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">1. <a href="www.gov.uz" aria-invalid="true">www.gov.uz</a> - O&lsquo;zbekiston Respublikasi xukumat portali.</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">2. </span><a style="text-decoration: none;" href="http://www.lex.uz"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">www.lex.uz</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> &ndash; O&lsquo;zbekiston Respublikasi Qonun hujjatlari&nbsp; ma&rsquo;lumotlari milliy bazasi.&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">3. <a href="www.mitc.uz" aria-invalid="true">www.mitc.uz</a> - O&lsquo;zbekiston Respublikasi axborot texnologiyalari va kommunikasiyalarni rivojlantirish vazirligi.</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">4. <a href="www.webofscience.com" aria-invalid="true">www.webofscience.com</a> - O&lsquo;zbekistonning fan va ta&rsquo;lim portali.&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">5. </span><a style="text-decoration: none;" href="http://www.edu.uz"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">www.edu.uz</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> - O&lsquo;zbekiston Respublikasi Oliy va o&lsquo;rta maxsus ta&rsquo;lim vazirligi portali.&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">6. </span><a style="text-decoration: none;" href="http://www.diamond.stup.ac.ru" aria-invalid="true"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">www.diamond.stup.ac.ru</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> &ndash; Ta&rsquo;limda yangi axborot texnologiyalari Rossiya Federasiyaning ta&rsquo;lim portali.&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">7. </span><a style="text-decoration: none;" href="http://www.ziyonet.uz" aria-invalid="true"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">www.ziyonet.uz</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> &nbsp; - Ta&rsquo;lim portali.</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">8. </span><a style="text-decoration: none;" href="http://www.w3schools.com"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">www.w3schools.com</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> &ndash; Masofadan ta&rsquo;lim olish portali.</span></p>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Internet section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default InternetBusiness;
