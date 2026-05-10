import type { FC } from 'hono/jsx';

interface LogoIconProps {
  class?: string;
}

export const LogoIcon: FC<LogoIconProps> = (props) => {
  const { class: className } = props;
  return <img alt='ロゴの画像' class={className} src='/logo.svg' aria-hidden='true' />;
};
