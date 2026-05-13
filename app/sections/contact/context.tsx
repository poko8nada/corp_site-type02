import { contactContextCatalog } from './index';

export function ContactContextBlock() {
  const { phoneHeading, phoneDesc, phone, hours, formHeading, formDesc, formNote } =
    contactContextCatalog;

  return (
    <div class='flex flex-col gap-6'>
      <div>
        <h3 class='font-semibold text-base-content'>{phoneHeading}</h3>
        <p class='mt-1 text-sm text-base-content/70'>{phoneDesc}</p>
        <a
          href={`tel:${phone.replace(/-/g, '')}`}
          class='mt-2 inline-block text-lg font-bold text-primary transition-colors hover:text-primary/80'
        >
          {phone}
        </a>
        <p class='mt-1 text-xs text-base-content/50'>{hours}</p>
      </div>

      <hr class='border-base-300/65' />

      <div>
        <h3 class='font-semibold text-base-content'>{formHeading}</h3>
        <p class='mt-1 text-sm text-base-content/70'>{formDesc}</p>
        <p class='mt-2 text-xs text-base-content/50'>{formNote}</p>
      </div>
    </div>
  );
}
