import * as bankAssets from './bankAssets';


export const bankPrefixes: Record<string, { src: string; name: string }> = {
    '603799': { src: bankAssets.meliBank , name: 'بانک ملی' },
    '589210': { src: bankAssets.sepahBank, name: 'بانک سپه' },
    '627961': { src: bankAssets.sanatOmadan, name: 'بانک صنعت معدن' },
    '603770': { src: bankAssets.keshavarzi, name: 'بانک کشاورزی' },
    '628023': { src: bankAssets.maskan, name: 'بانک مسکن' },
    '627760': { src: bankAssets.postBank, name: 'پست بانک' },
    '621986': { src: bankAssets.samanBank, name: 'بانک سامان' },
    '502908': { src: bankAssets.tosehTavon, name: 'بانک توسعه تعاون' },
    '627412': { src: bankAssets.eghtesadNovin, name: 'بانک اقتصاد نوین' },
    '622106': { src: bankAssets.parsianBank, name: 'بانک پارسیان' },
    '502229': { src: bankAssets.pasargadBank, name: 'بانک پاسارگاد' },
    '627488': { src: bankAssets.karafarinBank, name: 'بانک کارآفرین' },
    '639346': { src: bankAssets.sinaBank, name: 'بانک سینا' },
    '639607': { src: bankAssets.sarmayehBank, name: 'بانک سرمایه' },
    '502806': { src: bankAssets.shahrBank, name: 'بانک شهر' },
    '502938': { src: bankAssets.deyBank, name: 'بانک دی' },
    '603769': { src: bankAssets.saderatBank, name: 'بانک صادرات' },
    '610433': { src: bankAssets.melatBank, name: 'بانک ملت' },
    '627353': { src: bankAssets.tejaratBank, name: 'بانک تجارت' },
    '589463': { src: bankAssets.refahBank, name: 'بانک رفاه' },
    '627381': { src: bankAssets.ansarBank, name: 'بانک انصار' },
    '639370': { src: bankAssets.mehreEghtesad, name: 'بانک مهر اقتصاد' },
    '639599': { src: bankAssets.ghavaminBank, name: 'بانک قوامین' },
    '504172': { src: bankAssets.resalatBank, name: 'بانک رسالت' },
    '636214': { src: bankAssets.ayandehBank, name: 'بانک آینده' },
    '627648': { src: bankAssets.tosehSaderatBank, name: 'بانک توسعه صادرات' },
    '628157': { src: bankAssets.toseEetebari, name: 'بانک توسعه اعتباری' },
    '505416': { src: bankAssets.gardeshgary, name: 'بانک گردشگری' },
    '606373': {
        src: bankAssets.mehreirangharzolhasanebank,
        name: 'بانک قرض‌الحسنه ایران',
    },
    '505785': { src: bankAssets.iranzaminBank, name: 'بانک ایران زمین' },
};

export default  function getBankByCard(cardNumber: string) {
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 6) return undefined;
  return bankPrefixes[digits.slice(0, 6)];
}