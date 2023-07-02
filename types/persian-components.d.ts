import type { DefineComponent } from 'vue'
import type { TPersianCalendarProps, TPersianCalendarEmits } from '.'

declare const _default: {
  PersianCalendar: DefineComponent<
    TPersianCalendarProps, 
    unknown, 
    unknown,
    {},
    {},
    {}, 
    unknown, 
    TPersianCalendarEmits
  > & {
    new (): {
      $slots: {
        'calendar-footer': (arg: any) => VNode[];
      };
    };
  }
}
export default _default

//todo: complete or auto



export {}
