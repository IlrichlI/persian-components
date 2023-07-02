import type { TPersianCalendarProps, TPersianCalendarEmits } from './types'

declare module 'persian-components/style.css';

declare module 'persian-components' {
  declare const _default: {}
  export default _default

  import type { DefineComponent } from 'vue'

  //todo: complete or auto
    
  export const PersianCalendar = {} as unknown as DefineComponent<
  TPersianCalendarProps, 
  unknown, 
  unknown,
  {},
  {},
  {}, 
  unknown, 
  TPersianCalendarEmits
  > & {
  // we augment the wrapper type with a constructor type that overrides/adds
  // the slots type information by adding a `$slots` object with slot functions defined as properties
  new (): {
    $slots: {
      // each function correspond to a slot and its arguments are the slot props available
      // this is the default slot definition, it offers the `GenericSlotProps` properties as slot props.
      // it should return an array of `VNode`
      'calendar-footer': (arg: any) => VNode[];
    };
  };
  }

}
