import cls from "./styles.module.scss";

function InternetJava() {
    let str = '   <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Axborot manbaalari</span></strong></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.gov.uz"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.gov.uz</span></a><span style="font-size: 13pt;"> &ndash; O&lsquo;zbekiston Respublikasi xukumat portali.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.lex.uz" aria-invalid="true"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.lex.uz</span></a><span style="font-size: 13pt;"> &ndash; O&lsquo;zbekiston Respublikasi Qonun hujjatlari ma&rsquo;lumotlari milliy bazasi.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;"><a href="www.yotube.com" aria-invalid="true">www.yotube.com</a></span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.github.com"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.github.com</span></a></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.keegle.com"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.keegle.com</span></a></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="https://cocodataset.org"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">https://cocodataset.org</span></a></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">aitrends.com: </span><a style="text-decoration: none;" href="http://www.aitrends.com/"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.aitrends.com/</span></a></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">KDnuggets: </span><a style="text-decoration: none;" href="http://www.kdnuggets.com/news/index.html"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.kdnuggets.com/news/index.html</span></a></p>\n' +
        '          </li>\n' +
        '          </ol>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Internet section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>


        </div>
    );
}

export default InternetJava;
