import moment from "jalali-moment"

const englishNumbers = (s: string | number) => {
  return String(s)
    .replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
}

export function gregorianToJalali(gy: number, gm: number, gd: number) {
  const jalali = englishNumbers(new Date(gy,gm -1,gd).toLocaleDateString('fa-IR'))
  const [jy,jm,jd] = jalali.split('/').map(j => +j)
  return [jy, jm, jd] as const
}

export function jalaliToGregorian(jy: number, jm: number, jd: number) {
  const  [gy,gm,gd] = (moment.from([jy,jm,jd].join('/'), 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD') as any as string).split('/').map(i => +i)
  return [gy, gm, gd] as const
}
