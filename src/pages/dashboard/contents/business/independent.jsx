import cls from "./styles.module.scss";

function IndependentBusiness() {
    let htmlAsString = '                <p style="line-height: 1.2; text-indent: 28.35pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">VI. Mustaqil ta&rsquo;lim uchun tavsiya etiladigan mavzular:</span></strong></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Ma&rsquo;lumotlarni tahlil qilish va modellashtirish.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Internet va moliyaviy operasiyalar.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Elektron tijoratning asosiy xususiyatlari.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Internet orqali biznes yuritish.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Qaror qabul qilishni qo&lsquo;llab-quvvatlash tizimlarining xususiyatlari.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Inson va kompьyuterning o&lsquo;zaro ta&rsquo;siri.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Ma&rsquo;lumotlarning fizik va mantiqiy ko&lsquo;rinishlari.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Baholash va texnik xizmat ko&lsquo;rsatish.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Tahlildan loyixalashtirishga o&lsquo;tish.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Mobil platforma ekotizimi tuzilishi va strategiyasining rivojlanishi</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Bulutli platforma ekotizimi tuzilishi va strategiyasining rivojlanishi,</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">"Internet xizmatlar" davri - ko&lsquo;p ma&rsquo;lumotli, ko&lsquo;p platformali va ko&lsquo;p qurilmali va sensorlar dunyosi.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Raqamli platformadagi barqaror hamkorlik xizmatlari ta&rsquo;rifi.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 6.9pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Raqamli platforma biznesiga rahbarlik qilish.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Platform iqtisodiyoti: real vaqtda ishlov berish asosida.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Inson idroki iqtisodiyotidagi ma&rsquo;lumotlar qiymati.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Platforma iqtisodiyoti rivojlanishi.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Platforma iqtisodiyotining ko&lsquo;tarilishi.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Uber va Amazon qoidalari.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">CIO platformasi iqtisodiyoti.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Raqamli inqilob uchun innovasion ekotizimlar.&nbsp;</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Onlayn platforma iqtisodiyoti: o&lsquo;sish trayektoriyasi qanday?</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Kompaniyaning mahsulot ishlab chiqarishdan platformaga o&lsquo;tish.</span></p>\n' +
        '          </li>\n' +
        '          </ol>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Independent section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: htmlAsString}}>
            </div>
        </div>
    );
}

export default IndependentBusiness;
