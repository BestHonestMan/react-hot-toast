import { Properties } from 'csstype';
import { IndicatorTheme } from '../components/indicator';

export type ToastType = 'success' | 'error' | 'loading' | 'blank';
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type Renderable = JSX.Element | string | number | null;

export interface Toast {
  type: ToastType;
  id: string;
  message: Renderable;
  icon?: Renderable;
  duration: number;

  role: 'status' | 'alert';
  ariaLive: 'assertive' | 'off' | 'polite';

  style?: Properties;
  className?: string;
  iconTheme?: IndicatorTheme;

  createdAt: number;
  visible: boolean;
  height?: number;
}
