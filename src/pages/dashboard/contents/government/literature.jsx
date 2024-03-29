import cls from "./styles.module.scss";

function LiteratureGovernment() {
    let str = '            <p style="line-height: 1.2; text-indent: 21.3pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Basic literatures.</span></strong></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Zaynidinov X.N., Yakubov M.S., Koraboyev J. Elektronnoye pravitelstvo // Akademiya gosudarstvennogo upravleniya pri Prezidente Respubliki Uzbekistan, Koordinasionnыy komitet po razvitiyu nauki i texnologiy pri Kabinete Ministrov Respubliki Uzbekistan. &ndash;T.: Akademiya, 2015.- 175 p </span><em><span style="font-size: 13pt;">(This book is available in PDF version at the university IRC).</span></em></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">The concept of adapting the higher education system to the digital generation. With the support of the European Union Erasmus+ program. </span><a style="text-decoration: none;" href="https://hiedtec.ecs.uni-ruse.bg/pimages/34/3._UZBEKISTAN-CONCEPT-UZ.pdf"><span style="font-size: 13pt; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;">https://hiedtec.ecs.uni-ruse.bg/pimages/34/3._UZBEKISTAN-CONCEPT-UZ.pdf</span></a><span style="font-size: 13pt;"> </span><em><span style="font-size: 13pt;">(This book is available in PDF version at the university IRC).</span></em></p>\n' +
        '          </li>\n' +
        '          </ol>\n' +
        '          <p style="margin-right: 13.5pt; text-indent: 21.3pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp;Additional literatures</span></strong></p>\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">1. Nag Yeon Lee and Kwangsok Oh. Ye-Government Applications. - Republic of Korea: Scand-Media Corp. Ltd., 2016. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(This book is available in PDF version at the university IRC).</span></em></p>\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">2. Zaynidinov H.N., Yakubov M.S., Karaboyev J. Electronic government//The Academy of Public Administration under the President of the Republic of Uzbekistan, the Coordinating Committee for the Development of Science and Technology under the Ministry of the Interior of the Republic of Uzbekistan. -T.: Academy, 2013.-175 p. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(This book is available in PDF version at the university IRC).</span></em></p>\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">3</span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">. </span></em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Markova V.D. Sifrovaya ekonomika: uchebnik /V.D. Markova. - M .: INFRA-M,2019.- 186 s. - (Vыssheye obrazovaniye: Bakalavriat) ISBN 978-5-16-16-013859-6 (print).ISBN 978-5-16-16-106539-6 (online)</span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> (This book is available in PDF version at the university IRC)</span></em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">.</span></p>\n' +
        '          <p><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">4. S.S. Gulyamov, R.H. Ergashev, S.N. Khamrayeva. Digital economy (study guide), T., 2020. -377 p. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(This book is available in PDF version at the university IRC)</span></em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">.</span></p>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Literature section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default LiteratureGovernment;
